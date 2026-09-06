/* ============================================================
   guymarcozzi.com — main.js
   ------------------------------------------------------------
   EDIT YOUR CONTACT DETAILS HERE — this is the ONE place they
   live. Every email link and LinkedIn link on the site is
   filled in from these three lines.
   ============================================================ */

var SITE = {
  name: "Guy Marcozzi",
  email: "guy@moltotempo.com", /* EDIT: replace with Guy's real email address */
  linkedin: "https://www.linkedin.com/in/guy-marcozzi-b12744a/"
};

/* ============================================================
   No need to edit anything below this line.
   ============================================================ */

(function () {
  "use strict";

  /* ---- Fill contact links from the constants above ---- */
  document.querySelectorAll("[data-mailto]").forEach(function (el) {
    el.setAttribute("href", "mailto:" + SITE.email);
  });
  document.querySelectorAll("[data-linkedin]").forEach(function (el) {
    el.setAttribute("href", SITE.linkedin);
  });
  document.querySelectorAll("[data-email-text]").forEach(function (el) {
    el.textContent = SITE.email;
  });

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    var setMenu = function (open) {
      links.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    toggle.addEventListener("click", function () {
      setMenu(!links.classList.contains("open"));
    });
    /* Close the menu when a link is chosen or Escape is pressed */
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        setMenu(false);
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("open")) {
        setMenu(false);
        toggle.focus();
      }
    });
    /* Close the menu when tapping or clicking outside it */
    document.addEventListener("click", function (e) {
      if (links.classList.contains("open") && !e.target.closest(".site-nav")) {
        setMenu(false);
      }
    });
  }

  /* ---- Gentle fade-up on section entry ---- */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");
  if (!reduced && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    revealEls.forEach(function (el) {
      /* Only arm sections below the initial viewport — everything else
         (including no-JS and reduced-motion visitors) stays visible. */
      if (el.getBoundingClientRect().top >= window.innerHeight * 0.9) {
        el.classList.add("reveal-armed");
        observer.observe(el);
      }
    });
  }
})();
