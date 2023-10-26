"use strict";

function orderCalculation() {
  const envelopeCost = 0.25;
  const vatCost = 0.1;
  const deliveryCost = 4.00;
  
  let input = document.getElementById("usertotal").value;
  let envelopes = parseInt(input, 10);
  
  if(isNaN(envelopes)) {
    alert("Please select a quantity using the arrows instead.");
  } else {
    let cost = envelopeCost * envelopes;
    let vat = cost * vatCost;
    let total = cost + deliveryCost + vat;
  
    document.getElementById("numofenvelopes").innerText = envelopes;
    document.getElementById("envelopetotal").innerText = "£" + cost.toFixed(2);
    document.getElementById("vat").innerText = "£" + vat.toFixed(2);
    document.getElementById("delivery").innerText = "£" + deliveryCost.toFixed(2);
    document.getElementById("ordertotal").innerText = "£" + total.toFixed(2);
  }
}

function greetFunc() {
  let greeting = prompt("Hello! Please tell me your name?");
  alert(`Hello ${greeting}. This webpage is just an example. Unfortunately real orders cannot be made.`)
}

let index = 0;

const pics = ["https://cdn.pixabay.com/photo/2019/03/03/11/34/colored-pencils-4031668_1280.jpg", "https://cdn.pixabay.com/photo/2014/04/05/11/28/paper-315772_1280.jpg", "https://cdn.pixabay.com/photo/2018/04/03/23/24/composition-3288398_1280.jpg", "https://cdn.pixabay.com/photo/2016/03/05/20/01/artistic-1238606_1280.jpg"];

function PictureSlideshow() {
  index = (index + 1) % pics.length;
  document.getElementById("pic").src = pics[index];
}
  
