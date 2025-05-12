/* script.js */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const email = document.getElementById("email").value;
      const name = document.getElementById("name").value;
      const message = document.getElementById("message").value;

      if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        e.preventDefault();
      } else if (name.trim() === "" || message.trim() === "") {
        alert("Please fill out all fields.");
        e.preventDefault();
      }
    });
  }
});
  