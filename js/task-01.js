const navCtgrs = document.querySelectorAll(".item");
console.log("Number of categories:", navCtgrs.length);

const navEl = document.querySelectorAll("h2");
console.log(navEl);

navEl.forEach(function (number, index) {
  console.log("Category:", navEl[index].textContent);
  const navElItem = document.querySelector("ul");
  console.log(navElItem);
});
