
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;
const menuButton = document.querySelector("#menu");
const navList = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navList.classList.toggle("show");

  menuButton.textContent = menuButton.textContent === "☰" ? "✖" : "☰";
});
