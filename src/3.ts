const cars = [
    {
        name: 'Ford Mustang 5.0 V8 Mach 1',
        color: 'Blue',
        brand: "Ford",
        model: "Mustang",
        year: 2019,
    },
    {
        name: 'Ferrari 458 Italia Standard',
        color: 'Red',
        brand: "Ferrari",
        model: "458 Italia",
        year: 2010,
    }
]


function logProduct(products:{ name: string; color: string; brand: string; model: string; year: number; }[]) {
    products.forEach((oneCar) => {
        const description = `A product named ${oneCar.name}, which is in the color ${oneCar.color}. The car ${oneCar.name} was manufactured in the year ${oneCar.year} by the company
${oneCar.brand}. The model shown is ${oneCar.model}`
        console.log(description)
        console.log('--');
    })
}

logProduct(cars);
