const countChar = document.querySelector(".count");
const Input  = document.querySelector("#input");

Input.addEventListener("keyup", () => {
    countChar.innerHTML = Input.value.length;
})


