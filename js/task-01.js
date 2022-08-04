"use strict";

// const numOfCat = document.querySelectorAll(".item");
// console.log(`Number of categories: ${numOfCat.length}`);

// const firstCat = document.getElementsByTagName("h2")[0];
// console.log(`Category: ${firstCat.innerText}`);
// const firstList = firstCat.nextElementSibling.children;
// console.log(`Elements: ${firstList.length}`);

// const SecondCat = document.getElementsByTagName("h2")[1];
// console.log(`Category: ${SecondCat.innerText}`);
// const secondList = SecondCat.nextElementSibling.children;
// console.log(`Elements: ${secondList.length}`);

// const thirdCat = document.getElementsByTagName("h2")[2];
// console.log(`Category: ${thirdCat.innerText}`);
// const thirdList = thirdCat.nextElementSibling.children;
// console.log(`Elements: ${thirdList.length}`);

//second solution

// const numberOfCategories = document.querySelectorAll(".item");
// console.log(`Number of categories: ${numberOfCategories.length}`);

// numberOfCategories.forEach((item) => {
// 	console.log(`Category: ${item.firstElementChild.textContent}`);
// 	console.log(`Elements: ${item.querySelectorAll("li").length}`);
// });

//third solution

const nodes = document.querySelectorAll(".item");

console.log(`Number of categories: ${nodes.length}`);

nodes.forEach((node) => {
	console.log(`Category: ${node.firstElementChild.innerText}`);
	console.log(`Elements: ${node.lastElementChild.children.length}`);
});
