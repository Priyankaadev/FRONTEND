document.addEventListener("DOMContentLoaded", async () => {



    async function fetchProducts() {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        return response.data
    }

    async function fetchProductsByCategory(category) {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        console.log(response.data);
        return response.data
    }

    const downloadedProducts = await fetchProducts();

    async function populateProducts(flag, customProducts) {
        let products = customProducts;
       const queryParamsObject = getQueryParams();
        if (flag == false) {
            if (queryParamsObject['category']) {
                products = await fetchProductsByCategory(queryParamsObject['category']);
            } else {
                products = await fetchProducts();
            }


        };

        const productList = document.getElementById("productList");
        products.forEach(product => {
            const productItem = document.createElement("a");
            productItem.target = "_blank";
            productItem.classList.add("product-item", "text-decoration-none", "d-inline-block");
            productItem.href = `productDetails.html?id=${product.id}`;

            const productImage = document.createElement("div");
            const productName = document.createElement("div");
            const productPrice = document.createElement("div");

            productImage.classList.add("product-img");
            productName.classList.add("product-name", "text-center");
            productPrice.classList.add("product-price", "text-center");

            productName.textContent = product.title.substring(0, 12) + "....";
            // productPrice.textContent = `&#8377; ${product.price}`;
            const formattedPrice = `₹ ${product.price.toFixed(2)}`;
            productPrice.textContent = formattedPrice;

            const imageInsideProductImage = document.createElement("img");
            imageInsideProductImage.src = product.image;


            //append divs
            productImage.appendChild(imageInsideProductImage);
            productItem.appendChild(productImage);
            productItem.appendChild(productName);
            productItem.appendChild(productPrice);
            productList.appendChild(productItem);
        });
    }


    async function populateCategories() {
        const categories = await fetchCategories();
        const categoryList = document.getElementById('categoryList');
        categories.forEach(category => {
            const categoryLink = document.createElement('a');
            categoryLink.classList.add("d-flex", "text-decoration-none");
            categoryLink.textContent = category;
            categoryLink.href = `productList.html?category=${category}`;

            categoryList.appendChild(categoryLink)
        })
    }
    async function downloadContentAndPopulate() {
        Promise.all([populateProducts(false), populateCategories()])
        .then(() =>{
            const loaderBackdrop = document.getElementById("loader-backdrop");
        loaderBackdrop.style.display = 'none';
        });       
    }
    downloadContentAndPopulate();


    const filterSearch = document.getElementById("search");
    filterSearch.addEventListener("click", async () => {
        const productList = document.getElementById("productList")
        const minPrice = Number(document.getElementById("minPrice").value);
        const maxPrice = Number(document.getElementById("maxPrice").value);
        const products = downloadedProducts;
        filteredProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
        productList.innerHTML = "";
        populateProducts(true, filteredProducts);
    });

    const resetFilter = document.getElementById("clear");
    resetFilter.addEventListener("click", () => {
        const minPriceInput = document.getElementById("minPrice");
        const maxPriceInput = document.getElementById("maxPrice");
        window.location.reload();
        minPriceInput.value = '0';
        maxPriceInput.value = '0';
    });


})

//when we make http request we can send the data in 3 forms-
// 1. URL params / slashes / data is embedded in url directly
// 2.  Query params ? key=valueandkey=value , post the url the set of keyvalue params separated by and initial by ?
//3. Request body - there are multiple components of a http request ex- URL, method, headers, req body


//BOM - Browser object model
//there are some browser related properties that we can access using JS.
//ex- history, location~url

