const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "Spencer" && password === "Maggie13!") {
    // Successful login (you can add your logic here)
    window.open(https://grandmasarmpit.github.io/freakbob/, '_blank').focus();
  } else {
    alert("Invalid username or password.");
  }
});
