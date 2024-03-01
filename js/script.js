"use strict";

import cardComponent from "../component/cardComponent.js";
import cardUsers from "../component/userCard.js";
let renderProducts = document.querySelector("#renderCardProducts");
let renderUsers = document.querySelector("#renderCardUser");


const base_URL = "http://127.0.0.1:5502/data/";


async function getCards(endpoint) {
  try {
    const response = await fetch(`${base_URL}${endpoint}.json`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}


// Render Products Card
const products = await getCards("products");
console.log(products)
products.map((product) => {
  renderProducts.innerHTML += cardComponent(product);
});




// Render Profile Card
const users = await getCards("users");
users.map((user) => {
  renderUsers.innerHTML += cardUsers(user);
});