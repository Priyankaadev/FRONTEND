console.log("LOADED");

async function fetchCategories() {
    //this function is marked async so this will also return a promise
    const response = await fetch("https://fakestoreapi.com/products/categories");
    const data = await response.json();
    console.log( data);
    return data;
}
// fetchCategories( );

async function populateCategories() {
    const categories = await fetchCategories();
    const loaderbackdrop = document.getElementById('loader-backdrop');
    loaderbackdrop.style.display = 'none';
    const categoryList = document.getElementById("categoryList");
    categories.forEach(category => {
        const categoryHolder = document.createElement("div");
        const categoryLink = document.createElement("a");
        categoryLink.href = `productList.html?category= ${category}`;
        categoryLink.textContent = category; //setting the category name as the text of the anchor tag
        categoryHolder.classList.add("category-item", "d-flex",  "justify-content-center", "align-items-center");
        categoryHolder.appendChild(categoryLink);
        categoryList.appendChild(categoryHolder);
    });
}

populateCategories();