// MAHIDHAR REDDY PORTFOLIO — interactions
const intro = document.querySelector("#intro");
const profiles = document.querySelector("#profiles");
const portfolio = document.querySelector("#portfolio");

document.querySelector("#enter-button").addEventListener("click", () => {
  intro.classList.add("hidden");
  profiles.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector("#back-to-intro").addEventListener("click", () => {
  profiles.classList.add("hidden");
  intro.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll(".profile-card").forEach((card) => {
  card.addEventListener("click", () => {
    const selectedProfile = card.dataset.profile;
    profiles.classList.add("hidden");
    portfolio.classList.remove("hidden");
    document.body.dataset.profile = selectedProfile;
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Focus the most relevant section for each profile.
    if (selectedProfile === "developer") {
      setTimeout(() => document.querySelector("#projects").scrollIntoView({ behavior: "smooth" }), 350);
    } else if (selectedProfile === "security") {
      setTimeout(() => document.querySelector("#skills").scrollIntoView({ behavior: "smooth" }), 350);
    }
  });
});

const menuToggle = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const backTop = document.querySelector("#back-top");
window.addEventListener("scroll", () => {
  backTop.classList.toggle("visible", window.scrollY > 500);
});
backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

document.querySelector("#year").textContent = new Date().getFullYear();
