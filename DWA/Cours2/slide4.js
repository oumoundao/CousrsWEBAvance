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

//Pour obtenir une copie de l’objet terre sans la lune: nouvelleTerre sera une copie de terre sans la lune (satellite)
        const {sattelite, ...nouvelleTerre}=terre
console.log(nouvelleTerre)

