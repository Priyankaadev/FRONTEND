function fetchNextElement(array){
    let idx = 0;
    function next(){
        if (idx == array.length){
            return undefined;
        }
        const nextElement = array[idx];
        idx++;
        return nextElement;
    }
    return next;
} 


//somewhere we consume it
 
const automaticFetcher = fetchNextElement([99, 11, 13, 12, 0,1,2,63])
//inside automatic fetcher variable we can store next function
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
