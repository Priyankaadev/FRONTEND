let iphone = {
    name: "Iphone 13 pro",
    price: 100000,
    description: "The new apple iphone 13 pro",
    rating: 4.5,

    display() {
        console.log("first display", this);
    }
}

let macbook = {
    name: "macbook M2",
    price: 1000000,
    description: "The new macbook for you",
    rating: 4.9,

    display() {
        console.log("second display", this);
    }
}
// console.log(iphone, macbook);

iphone.display(); //here this is refering to the iphone or macbook context but not always because if 
//this is not associated with anyone it will give empty object
// console.log(this)

let Products = {
    arr: [
        {

            name: "Iphone 13 pro",
            price: 100000,
            description: "The new apple iphone 13 pro",
            rating: 4.5,
            getCategory: function print() {console.log(this.category);}

        },
        {
            name: "macbook M2",
            price: 1000000,
            description: "The new macbook for you",
            rating: 4.9,
            getCategory: function print() {console.log(this.category);}
        }
    ],
    category: "Electronics"
}

Products.arr[0].getCategory