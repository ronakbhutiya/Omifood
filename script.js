// -----------------------make mobile navigation work-----------------
console.log("Hello World!");
const btnNAVEL = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");
("nav-open");
btnNAVEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});
// ----------------------------smooth scrolling animation------------------
const alllink = document.querySelectorAll("a:Link");
alllink.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefoult();
    const href = link.getAttribute("href");
    console.log(href);
    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // ----------------------------scroll other link------------------------
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // ------------------------close mobile navigation---------------------
    if (Link.classList.contains("main-nav-link"))
      headerEL.classList.toggle("nav-open");
  });
});
//-------------------------STICKY NAVIGATION----------------------------
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // IN THE VIEWPORT
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
