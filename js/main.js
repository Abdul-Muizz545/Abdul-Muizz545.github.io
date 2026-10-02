const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = String(new Date().getFullYear());

const roles = ["Programmer", "AI enthusiast", "AI Engineer", "Data Scientist"];
const role = document.getElementById("role");
let roleIndex = 0;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const showNextRole = () => {
  roleIndex = (roleIndex + 1) % roles.length;

  if (reduceMotion) {
    role.textContent = roles[roleIndex];
    window.setTimeout(showNextRole, 2200);
    return;
  }

  role.classList.remove("is-entering");
  role.classList.add("is-leaving");

  window.setTimeout(() => {
    role.textContent = roles[roleIndex];
    role.classList.remove("is-leaving");
    void role.offsetWidth;
    role.classList.add("is-entering");
    window.setTimeout(showNextRole, 1800);
  }, 350);
};

window.setTimeout(showNextRole, 1800);

const header = document.querySelector(".site-header");
const onScroll = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });
