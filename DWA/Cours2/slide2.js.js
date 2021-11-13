
const terre = {
    population: 8e8,
    sattelite: "lune",
    temperatures: {
        min: -70,
        max: 60,
    }
        }
//acces simple au propriete
console.log(terre.temperatures.max)
console.log(terre["population"])
//acces par cle a la propriete
let key="sattelite"
console.log(terre[key])