// const navCtgrs = document.querySelectorAll(".item");
// console.log("Number of categories:", navCtgrs.length);

// const navEl = document.querySelectorAll("h2");

// navEl.forEach(function (number, index) {
//   console.log("Category:", navEl[index].textContent);
//   const navElItem = document.querySelector("li");
// });

const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

const categoriesArray = [...totalCategories]
  .map(
    (categories) => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);
