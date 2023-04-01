
const geoPoint: {
    text:string,
    location: {
        lat: number,
        lon: number
    },
    tag: string[],
    isAccess: boolean,
}={
    text: "Geopoint as an object with 'lat' and 'lon' keys",
    location: {
        lat: 41.12,
        lon: -71.34
    },
    tag: ['Country', 'Place'],
    isAccess: true
}

console.log(geoPoint.location.lon)
