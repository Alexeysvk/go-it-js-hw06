const itemsRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsRef.length}`);

itemsRef.forEach((item) => {
  const titleRef = item.querySelector("h2").textContent;
  console.log(`
  Category: ${titleRef}
  Elements: ${item.querySelectorAll("li").length}`);
});
