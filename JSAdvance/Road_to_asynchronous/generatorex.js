function* fetchNextElement(){
    console.log("inside generator");
    const x = 10;
    yield 11;
    console.log("entering after a yield");
    const y = x + (yield 30); //x=10
    console.log("value of y is", y);
}
console.log("start");
const iter = fetchNextElement();
console.log("called generator");
console.log("first", iter.next());
console.log("second", iter.next());
console.log("third", iter.next());