function processed(arr:number[], func: (value:number) => number):number[] {
    return arr.map(func);
}


console.log(processed([1,2,3], (value) => value ))
console.log(processed([1,2,3], (value) => value * 2 ))


// const a = () => 'test'
// const b = () => {
//     return 'test'
// }
