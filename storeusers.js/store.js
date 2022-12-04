const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
// Listen for form submit
myForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    // alert('Please enter all fields');
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    // Remove error after 3000 milliseconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    let object = {
      name: nameInput.value,
      email: emailInput.value,
    };
    let object_serialize = JSON.stringify(object);
    localStorage.setItem("object", object_values);
    let object_deserialize = JSON.parse(localStorage.getItem("object"));
    console.log(localStorage);
    // Clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}