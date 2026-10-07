const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

menu?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm")?.addEventListener("submit", e => {
  e.preventDefault();

  const data = new FormData(e.currentTarget);

  const recipient = "lvthes.personalshopper@gmail.com";

  const subject = encodeURIComponent(
    "Demande d'accompagnement LVTHES — " + data.get("name")
  );

  const body = encodeURIComponent(
`Nom : ${data.get("name")}
E-mail : ${data.get("email")}

Demande :
${data.get("message")}`
  );

  window.location.href =
    `mailto:${recipient}?subject=${subject}&body=${body}`;
});

document.getElementById("bookingForm")?.addEventListener("submit", e => {
  e.preventDefault();

  const data = new FormData(e.currentTarget);

  const recipient = "contact@lvthes.fr";

  const subject = encodeURIComponent(
    "Réservation LVTHES — " +
    data.get("service") +
    " — " +
    data.get("name")
  );

  const body = encodeURIComponent(
`Nom : ${data.get("name")}
E-mail : ${data.get("email")}
Prestation : ${data.get("service")}
Budget indicatif : ${data.get("budget")}

Besoin :
${data.get("message")}`
  );

  window.location.href =
    `mailto:${recipient}?subject=${subject}&body=${body}`;
});
