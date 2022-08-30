(function () {
  // These are the constraints used to validate the form
  var constraints = {
    email: {
      // Email is required
      presence: { message: 'field is required' },
      // and must be an email (duh)
      email: { message: 'is not a valid email address' },
    },
    phone: {
      presence: { message: 'field is required' },
      format: {
        // We don't allow anything that a-z and 0-9
        pattern: '[0-9]+',
        // but we don't care if the username is uppercase or lowercase
        flags: 'i',
        message: ' This phone must be in the format  099 000 00 00',
      },
      length: {
        minimum: 7,
        maximum: 13,
      },
    },
    username: {
      // You need to pick a username too
      presence: { message: 'field is required' },
      // And it must be between 3 and 25 characters long
      length: {
        minimum: 3,
        maximum: 25,
      },
    },
  };

  // Hook up the form so we can prevent it from being posted
  var form = document.querySelector('form#main');
  var submitButton = document.querySelector('.button-order-modal');

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    handleFormSubmit(form);
  });

  submitButton.addEventListener('mouseleave', function (e) {
    form.classList.remove('has-error');
  });

  // Hook up the inputs to validate on the fly
  var inputs = document.querySelectorAll('input, textarea, select');
  for (var i = 0; i < inputs.length; ++i) {
    inputs.item(i).addEventListener('change', function (ev) {
      var errors = validate(form, constraints) || {};
      showErrorsForInput(this, errors[this.name]);
    });
  }

  function handleFormSubmit(form, input) {
    // validate the form against the constraints
    var errors = validate(form, constraints);
    // then we update the form to reflect the results
    showErrors(form, errors || {});
    if (!errors) {
      showSuccess();
    }
  }

  // Updates the inputs with the validation errors
  function showErrors(form, errors) {
    // We loop through all the inputs and show the errors for that input
    _.each(
      form.querySelectorAll('input[name], select[name]'),
      function (input) {
        // Since the errors can be null if no errors were found we need to handle
        // that
        showErrorsForInput(input, errors && errors[input.name]);
      }
    );
  }

  function isAllInputsEmpty() {
    let isAllEmpty = true;

    _.each(form.querySelectorAll('input[name]'), function (input) {
      if (input.value !== '') {
        isAllEmpty = false;
      }
    });
    return isAllEmpty;
  }
  // Shows the errors for a specific input
  function showErrorsForInput(input, errors) {
    // This is the root of the input

    var formGroup = closestParent(input.parentNode, 'form-group'),
      // Find where the error messages will be insert into
      messages = formGroup.querySelector('.messages');
    // First we remove any old messages and resets the classes
    resetFormGroup(formGroup);
    // If we have errors
    if (errors) {
      // we first mark the group has having errors
      if (isAllInputsEmpty()) {
        form.classList.add('has-error');
      }

      submitButton.classList.add('has-error');
      formGroup.classList.add('has-error');
      // then we append all the errors
      _.each(errors, function (error) {
        addError(messages, error);
      });
    } else {
      // otherwise we simply mark it as success
      formGroup.classList.add('has-success');
    }
  }

  // Recusively finds the closest parent that has the specified class
  function closestParent(child, className) {
    if (!child || child == document) {
      return null;
    }
    if (child.classList.contains(className)) {
      return child;
    } else {
      return closestParent(child.parentNode, className);
    }
  }

  function resetFormGroup(formGroup) {
    // Remove the success and error classes
    form.classList.remove('has-error');
    submitButton.classList.remove('has-error');
    formGroup.classList.remove('has-error');
    formGroup.classList.remove('has-success');
    // and remove any old messages
    _.each(formGroup.querySelectorAll('.help-block.error'), function (el) {
      el.parentNode.removeChild(el);
    });
  }

  // Adds the specified error with the following markup
  // <p class="help-block error"><span class="icon"></><span>[message]</span></p>
  function addError(messages, error) {
    var icon = document.createElement('span');
    icon.classList.add('icon-warning');

    var spanErrorText = document.createElement('span');
    spanErrorText.innerText = error;

    var block = document.createElement('p');
    block.classList.add('help-block');
    block.classList.add('error');
    block.appendChild(icon);
    block.appendChild(spanErrorText);

    messages.appendChild(block);
  }

  function showSuccess() {
    // We made it \:D/
    form.submit();
  }
})();
