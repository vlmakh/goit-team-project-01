!function(){var e={email:{presence:{message:"field is required"},email:{message:"is not a valid email address"}},phone:{presence:{message:"field is required"},format:{pattern:"[0-9]+",flags:"i",message:" This phone must be in the format  099 000 00 00"},length:{minimum:7,maximum:13}},username:{presence:{message:"field is required"},length:{minimum:3,maximum:25}}},t=document.querySelector("form#main"),n=document.querySelector(".button-order-modal");t.addEventListener("submit",(function(n){var a,o;n.preventDefault(),a=t,o=validate(a,e),function(e,t){_.each(e.querySelectorAll("input[name], select[name]"),(function(e){r(e,t&&t[e.name])}))}(a,o||{}),o||t.submit()})),n.addEventListener("mouseleave",(function(e){t.classList.remove("has-error")}));for(var a=document.querySelectorAll("input, textarea, select"),o=0;o<a.length;++o)a.item(o).addEventListener("change",(function(n){r(this,(validate(t,e)||{})[this.name])}));function r(e,a){var o=s(e.parentNode,"form-group"),r=o.querySelector(".messages");!function(e){t.classList.remove("has-error"),n.classList.remove("has-error"),e.classList.remove("has-error"),e.classList.remove("has-success"),_.each(e.querySelectorAll(".help-block.error"),(function(e){e.parentNode.removeChild(e)}))}(o),a?(function(){let e=!0;return _.each(t.querySelectorAll("input[name]"),(function(t){""!==t.value&&(e=!1)})),e}()&&t.classList.add("has-error"),n.classList.add("has-error"),o.classList.add("has-error"),_.each(a,(function(e){!function(e,t){var n=document.createElement("span");n.classList.add("icon-warning");var a=document.createElement("span");a.innerText=t;var o=document.createElement("p");o.classList.add("help-block"),o.classList.add("error"),o.appendChild(n),o.appendChild(a),e.appendChild(o)}(r,e)}))):o.classList.add("has-success")}function s(e,t){return e&&e!=document?e.classList.contains(t)?e:s(e.parentNode,t):null}}(),(()=>{const e={openModalBtn:document.querySelector("[data-menu-btn]"),mobMenu:document.querySelector("[data-menu]")};e.openModalBtn.addEventListener("click",(function(){e.mobMenu.classList.toggle("is-closed")}))})();const e={openModalBtnHeader:document.querySelector("[data-modal-open-1]"),openModalBtnHero:document.querySelector("[data-modal-open-2]"),openModalBtnOffer:document.querySelector("[data-modal-open-3]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtnHeader.addEventListener("click",t),e.openModalBtnHero.addEventListener("click",t),e.openModalBtnOffer.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);new Swiper(".mySwiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});
//# sourceMappingURL=index.a8470125.js.map
