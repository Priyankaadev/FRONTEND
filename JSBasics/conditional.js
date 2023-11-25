// console.log("start");
// if(null ){
//     console.log("yes")
// }
// console.log("end")

// console.log(typeof undefined)
// console.log(typeof null)

let isUserPremium = true;
let isUserVIP = true;

// if(isUserPremium){
//     console.log("Enjoy the premium content on hotstar");
// }else if(isUserVIP){
//     console.log("Enjoy the VIP content on hotstar, for more subscribe to premium");
// }else{
//     console.log("Please subscribe")
// }

// nested ifelse

if(isUserVIP){
if(isUserPremium){
    console.log("Enjoy both prime and VIP content")
} else{
    console.log("Enjoy VIP content"    )
}
}else{
    console.log("Please buy a subscription")
}