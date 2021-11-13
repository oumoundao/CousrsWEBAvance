function copyObject(object1) {
  return object1;
}
const object2 = {
  nom: "oumou",
  prenom: "oumou",
  age: 37,
};
const moi = copyObject(object2);
console.log(moi);
