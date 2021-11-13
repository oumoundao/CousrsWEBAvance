function copyObject(object1) {
  return object1;
}
const object2 = {
  nom: "oumou",
  prenom: "ndao",
  age: 37,
  fullname: () => {
    return console.log("je me nomme " + object2.nom + " " + object2.prenom);
  }
};
const moi = copyObject(object2);
moi.fullname();
