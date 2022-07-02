// Open sub-menus

let navBtns = document.querySelectorAll(".nav-link");

navBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("product")) {
      document.getElementById("product-dropdown").classList.toggle("show");
    } else if (styles.contains("company")) {
      document.getElementById("company-dropdown").classList.toggle("show");
    } else if (styles.contains("connect")) {
      document.getElementById("connect-dropdown").classList.toggle("show");
    }
  });
});

window.onclick = (event) => {
  if (!event.target.matches(".nav-link")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// open the navbar on click

const navToggle = document.querySelector(".mobile-menu-btn");
const nav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");

  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
