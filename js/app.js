const navbarList = document.getElementById("navbar__list");
const allSections = document.querySelectorAll(".section");
// Functions
function removeActive(sections) {
  sections.forEach((ele) => {
    ele.classList.remove("active");
  });
}

window.onscroll = () => {
  const allAnchors = document.querySelectorAll("a");
  allSections.forEach((section, i) => {
    let sectionRec = section.getBoundingClientRect().y;
    if (sectionRec < window.innerHeight - 200) {
      allAnchors.forEach((section) => section.classList.remove("active"));
      allAnchors[i].classList.add("active");
    }
  });
};

// Looping throgh section elements
allSections.forEach((section, i) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  // adding class to anchor
  a.classList.add("menu__link");
  a.innerText = section.id;
  // listen on click event

  a.addEventListener("click", (e) => {
    e.preventDefault();
    // scroll to view based on the index
    allSections[i].scrollIntoView();
    // const current = document.querySelectorAll(".active");
    // current[0].className = current[0].className.replace(" active", "");
    // this.className += " active";

    // removing all active class
    removeActive(allSections);
    // add active class to the highlighted section and navItem
    // removing all active class
    removeActive(allAnchors);
    section.classList.add("active");
    a.classList.add("active");
  });
  li.appendChild(a);
  navbarList.appendChild(li);
});
