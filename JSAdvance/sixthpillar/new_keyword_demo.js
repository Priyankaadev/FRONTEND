class Product {
    // name;
    // price;
    // description; //even after commenting out this these are getting assigned
    constructor(n, p , d) {
        this.name =n; //because of the keyvalue pair given here
        this.price = p;
        this.description =d;
        // return 10;//primitive => no effect
        // return {x:10};
        return this; //if you dont return anything, it is equal to saying return this
    }
    //only one constructor inside class
    display() {
        //print the product
    }
}

const p = new Product("bag", 1000, "a cool bag");
console.log(p);