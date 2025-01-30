let dummy_data = [
  {
    imageurl: "images/products-images/camera.jpeg",
    name: "Nikon Camera 2025 new",
    before_discount_price: 300,
    final_price: 250,
    store_name: "Negro Store",
    rating: 4.9,
    tagline: ["Filming", "Camera"],
  },
  {
    imageurl: "images/products-images/headset.jpeg",
    name: "Black Elegant Headset",
    before_discount_price: 50,
    final_price: 20,
    store_name: "Negro Store",
    rating: 4.6,
    tagline: ["Headset", "Listening"],
  },
  {
    imageurl: "images/products-images/ipad.jpeg",
    name: "Smooth iPad 2026",
    before_discount_price: 200,
    final_price: 130,
    store_name: "Nigga Electronic",
    rating: 4.8,
    tagline: ["iPad", "Gaming"],
  },
  {
    imageurl: "images/products-images/keyboard.jpeg",
    name: "Wooden Keyboard Wireles",
    before_discount_price: 999,
    final_price: 199,
    store_name: "Nigga Electronic",
    rating: 4.7,
    tagline: ["Keyboard", "Wood"],
  },
  {
    imageurl: "images/products-images/laptop.jpeg",
    name: "NegroBook Air 20",
    before_discount_price: 999,
    final_price: 799,
    store_name: "Floyd Alive",
    rating: 4.1,
    tagline: ["Laptop", "Gaming"],
  },
  {
    imageurl: "images/products-images/monitor.jpeg",
    name: "Blackie Monitor 144Hz",
    before_discount_price: 100,
    final_price: 10,
    store_name: "Nigger Gaming",
    rating: 3.9,
    tagline: ["Monitor"],
  },
  {
    imageurl: "images/products-images/ps5.jpeg",
    name: "Playstadion 5 2025 New",
    before_discount_price: 700,
    final_price: 399,
    store_name: "Nigger Gaming",
    rating: 3.5,
    tagline: ["Playstadion", "Gaming"],
  },
];

const itemCards = document.querySelectorAll(
  ".item-store-card-container .item-store-card"
);

function getRandomIndex() {
  return Math.floor(Math.random() * dummy_data.length);
}

function changeItemDetails(index, data) {
  document.querySelector(`.store-card-${index} .img-container img`).src =
    data.imageurl;
  document.querySelector(`.store-card-${index} .item-name`).innerHTML =
    data.name;
  document.querySelector(
    `.store-card-${index} .before-discount-price`
  ).innerHTML = data.before_discount_price + "$";
  document.querySelector(`.store-card-${index} .final-price`).innerHTML =
    data.final_price + "$";
  document.querySelector(`.store-card-${index} .store p`).innerHTML =
    data.store_name;
  document.querySelector(`.store-card-${index} .rating p`).innerHTML =
    data.rating;
  data.tagline.forEach((value) => {
    let p = document.createElement("p");
    let nodetext = document.createTextNode(value);
    p.appendChild(nodetext);
    document.querySelector(`.store-card-${index} .tagline`).appendChild(p);
  });
}

itemCards.forEach((v, i) => {
  changeItemDetails(i + 1, dummy_data[getRandomIndex()]);
});
