
const form = document.getElementById("authForm");
const usernameField = document.getElementById("usernameField");
const usernameInput = document.getElementById("username");
const heading = document.getElementById("heading");
const description = document.getElementById("description");
const submitButton = document.getElementById("submitButton");
const switchText = document.getElementById("switchText");
const switchMode = document.getElementById("switchMode");
const message = document.getElementById("message");

let isRegistering = false;

switchMode.addEventListener("click", (event) => {
  event.preventDefault();
  isRegistering = !isRegistering;

  usernameField.hidden = !isRegistering;
  usernameInput.required = isRegistering;

  heading.textContent = isRegistering ? "Create Account" : "Welcome Back";
  description.textContent = isRegistering
    ? "Join the GameHub community."
    : "Log in to your account.";
  submitButton.textContent = isRegistering ? "Register" : "Login";
  switchText.textContent = isRegistering
    ? "Already have an account?"
    : "Don't have an account?";
  switchMode.textContent = isRegistering ? "Login" : "Register";
  message.textContent = "";
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  message.textContent = "";

  const data = {
    email: form.email.value.trim(),
    password: form.password.value
  };

  if (isRegistering) {
    data.username = usernameInput.value.trim();
  }

  try {
    const response = await fetch(
      isRegistering ? "/api/register" : "/api/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }
    );

    const result = await response.json();
    message.textContent = result.message;

    if (response.ok && !isRegistering) {
      window.location.href = "/";
    }
  } catch (error) {
    message.textContent = "Server connection failed. Try again.";
  }
});
