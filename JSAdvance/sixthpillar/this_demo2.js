let Products = {
    arr: [
        {

            name: "Iphone 13 pro",
            price: 100000,
            description: "The new apple iphone 13 pro",
            rating: 4.5,
            getCategory: ()=> {console.log(this.category);}

        },
        {
            name: "macbook M2",
            price: 1000000,
            description: "The new macbook for you",
            rating: 4.9,
            getCategory: ()=> {console.log(this.category);}
        }
    ],
    category: "Electronics",
    getProducts: function (){
        return this.arr;
    }
}

Products.getProducts()[0].getCategory();