
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  const form = document.querySelector("#contact-form");
  const feedback = document.querySelector(".form-feedback");
  if (form && feedback) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("#name").value.trim();
      const email = form.querySelector("#email").value.trim();
      const message = form.querySelector("#message").value.trim();
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !email || !message) {
        feedback.textContent = "Please fill in all fields.";
        return;
      }
      if (!emailOk) {
        feedback.textContent = "Please enter a valid email address.";
        return;
      }
      feedback.textContent = "Message ready to send. Connect this form to EmailJS, Formspree, or your backend.";
      form.reset();
    });
  }
});
