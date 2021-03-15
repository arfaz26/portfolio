const myFunction = function () {
  document.getElementById("navi-toggle").checked = false;
};

const link = document.getElementsByClassName("navigation__item");

setTimeout(function () {
  console.log(link.length);

  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", myFunction);
  }
}, 1);

let a = document.getElementById("dev");

const devFuntion = function () {
  color = "#12993d";

  if (a.style.backgroundColor != "rgb(18, 153, 61)") {
    a.style.backgroundColor = "#12993d";
    a.style.color = "white";
  } else {
    a.style.backgroundColor = "transparent";
    a.style.borderColor = "#12993d";

    a.style.color = "#12993d";
  }
};
setInterval(devFuntion, 800);

const allSections = document.querySelectorAll(".section");

// console.log(allSections);

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});
