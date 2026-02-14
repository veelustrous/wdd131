const wigs = [
  {
    name: "Luxury Body Wave 24\"",
    texture: "Body Wave",
    length: 24,
    price: 85000,
    image: "images/bodywave.jpg"
  },
  {
    name: "Silky Straight 20\"",
    texture: "Straight",
    length: 20,
    price: 70000,
    image: "images/straight.jpg"
  },
  {
    name: "Deep Curly 26\"",
    texture: "Curly",
    length: 26,
    price: 95000,
    image: "images/curly.jpg"
  }
];
function displayWigs(wigArray) {
  const container = document.querySelector("#wig-container");

  if (!container) return;

  container.innerHTML = "";

  wigArray.forEach(wig => {
    container.innerHTML += `
      <div class="card">
        <img src="${wig.image}" alt="${wig.name}" loading="lazy" width="200">
        <h3>${wig.name}</h3>
        <p>Texture: ${wig.texture}</p>
        <p>Length: ${wig.length}"</p>
        <p>₦${wig.price}</p>
        ${wig.price > 90000 ? "<p>Premium Collection</p>" : "<p>Standard Collection</p>"}
        <button onclick='addToCart("${wig.name}")'>Add to Cart</button>
      </div>
    `;
  });
}
function addToCart(wigName) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(wigName);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${wigName} added to cart!`);
}
document.addEventListener("DOMContentLoaded", () => {
  displayWigs(wigs);

  document.getElementById("year").textContent = new Date().getFullYear();
});
const form = document.querySelector("#contact-form");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;

    document.querySelector("#confirmation").textContent =
      `Thank you ${name}, we will contact you shortly!`;

    form.reset();
  });
}
// Collapsible FAQ
const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});
faqButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle("show");
  });
});
