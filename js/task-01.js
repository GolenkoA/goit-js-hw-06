const list = document.querySelector("#categories");
// console.log(list);

const numberOfCategories = list.children.length;
console.log(`Number of categories:`, numberOfCategories);

const items = document.querySelectorAll('.item');
// console.log(items);

items.forEach(function (item) {

    const nameOfCategory = item.firstElementChild.textContent
    console.log('Category:', nameOfCategory);
    const amountOfElements = item.lastElementChild.children.length
    console.log('Elements:', amountOfElements);
});