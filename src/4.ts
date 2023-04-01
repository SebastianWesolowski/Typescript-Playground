
const double = (value: number | string):number => {
    if(typeof value === 'string'){
        return parseInt(value,10) * 2
    }

    return value * 2
}


console.log(double(1))
console.log(double(2))
console.log(double("2"))
