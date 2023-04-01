// interface Car = {
//     name: string;
//     color: string;
//     brand: string;
//     model: string;
//     year: number;
//     isActive?: boolean;
// }
//
// interface ExpensiveCar extends Car {
//     isActive?: string; // Incompatible override for member from InterfaceA
// }

type Car = {
    name: string;
    color: string;
    brand: string;
    model: string;
    year: number;
    isActive?: boolean;
}

type ExpensiveCar = {
    isActive?: string; // ✅ overload (isActive : boolean | string)
} &  Car


const cars:Car[] = [
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
    },
    {
        name: 'Ferrari 458 Italia Standard',
        color: 'Red',
        brand: "Ferrari",
        model: "458 Italia",
        year: 2010,
        isActive: false,
    }
]

const newCars:ExpensiveCar[] = [
    {
        name: 'Ferrari 458 Italia Standard',
        color: 'Red',
        brand: "Ferrari",
        model: "458 Italia",
        year: 2010,
        isActive: false,
        cost: 3000000
    }
]


function logProduct(products:Car[]) {
    products.forEach((oneCar) => {
        const description = `A product named ${oneCar.name}, which is in the color ${oneCar.color}. The car ${oneCar.name} was manufactured in the year ${oneCar.year} by the company
${oneCar.brand}. The model shown is ${oneCar.model}`
        console.log(description)
        console.log('--');
    })
}

logProduct(cars);
