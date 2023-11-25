let iphone = {
    name: "Iphone 13 pro",
    price: 100000,
    description: "The new apple iphone 13 pro",
    rating: 4.5,

    display:() =>{
        console.log( this);
    }
}

let macbook = {
    name: "macbook M2",
    price: 1000000,
    description: "The new macbook for you",
    rating: 4.9,

    display: function() {
        console.log( this);
    }
}
// macbook.display();
// iphone.display();

const Iphone = {
    name: "iphone",
    price: 210000,
    rating: 4.4,
    display: ()=>{//function(){
        let iphoneRed ={
            name: "iphone RED",
            price: 100000,
            print : ()=>{
                console.log(this); //resolved lexically
            }
        }
        iphoneRed.print();
    }
}

Iphone.display(); 