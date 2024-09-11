// Client-side

// 1. #yap-form has display: none; in style.css
// 2. When user starts typing, #yap-form display: none is changed to display: flex
  // 2.1 addeventlistener for keydown
  // 2.2 change display to flex from #yap-form
  // 2.3 keys that user types are shown in #yap-form
// 3. When user clicks #yap-button the form is submitted
  // 3.1 addeventlistener for click
  // 3.2 submit form

const yapForm = document.getElementById("yap-form");
const textArea = document.getElementById("yap-area");

document.addEventListener("keydown", event => {
    yapForm.style.display = "flex";
    textArea.focus();
});
