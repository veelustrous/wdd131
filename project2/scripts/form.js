const products = [
  { id: 1, name: "Super Drill" },
  { id: 2, name: "Pro Hammer" },
  { id: 3, name: "Magic Saw" },
  { id: 4, name: "Smart Lawn Mower" }
];

const select = document.querySelector("#product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.name;
  option.textContent = product.name;
  select.appendChild(option);
});
