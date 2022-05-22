const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASS = "hidden";
const USER = "username";

const onLoginSubmit = (e) => {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  const username = loginInput.value;
  localStorage.setItem(USER, username);
  paintGreeting(username);
};

const paintGreeting = (name) => {
  greeting.innerText = `${name}`;
  greeting.classList.remove(HIDDEN_CLASS);
};

// check saves
const savedUsername = localStorage.getItem(USER);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
