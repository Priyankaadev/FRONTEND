const player={
    firname : "virat",
    lastname: "kohli",
    numberToBat: 3,
    canBowl: false,
    getDetails: function(){
        console.log(this.firname, this.lastname, "comes at NO.", this.numberToBat);
    }
}

const obj = function(){
console.log(this.getDetails());
}
let x= obj.bind(player);
x(); 
//bind creates new function so that the function has its own function
