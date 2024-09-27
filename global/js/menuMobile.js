console.log("start JS");

const btnMobile = document.getElementById("btn-mobile");
const navMobileOpen = document.querySelector(".nav-mobile-open");

function menuShow() {
  if (navMobileOpen.classList.contains("open")) {
    navMobileOpen.classList.remove("open");
  } else {
    navMobileOpen.classList.add("open");
  }
}
