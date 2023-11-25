let obj ={
    x:1, y:2
}
let another = obj;
const newobj = Object.create(obj);
newobj.x = 99;
another.x = 89;
console.log(newobj, another, obj)