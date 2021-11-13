const terre = {
    population: 8e8,
    sattelite: "lune",
    temperatures: {
        min: -70,
        max: 60,
    },
    getTemperature: () =>{
        return 15
    }
        }
//acces a la fonction de l'objet terre
console.log(terre.getTemperature())

//Afin de tester si l’objet détient une certaine propriété
if ("sattelite" in terre){
    console.log("EXISTE")
}
//Pour vérifier qu’une propriété a une valeur autre que « falsy »
if (terre.population){
    console.log("Habite")
}
else {
    console.log("Morte")
}
//pour dire que la lune de la terre n’existe plus
delete terre.sattelite
console.log(terre)

