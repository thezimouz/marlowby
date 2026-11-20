// Marlowby — shared JavaScript for every page.

// 1. Highlight the current page in the nav bar.
const currentPage = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".site-nav .nav-link").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

// 2. Fade sections in as they scroll into view.
//    Add class="reveal" to any element to use this.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// 3. Keep the footer year current.
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
