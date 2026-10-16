
const updateMessage = document.getElementById("updateMessage");

async function loadUpdates() {
  try {
    const response = await fetch("/api/health");

    if (!response.ok) {
      throw new Error("Backend request failed");
    }

    const data = await response.json();
    updateMessage.textContent = data.message;
  } catch (error) {
    updateMessage.textContent =
      "Updates are temporarily unavailable.";
    console.error(error);
  }
}

document.getElementById("loginBtn").addEventListener("click", () => {
  alert("Login and registration will be added in the next stage!");
});

loadUpdates();
