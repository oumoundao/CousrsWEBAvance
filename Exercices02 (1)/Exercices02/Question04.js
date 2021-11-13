function getValue(key, source) {
  return key in source ? source[key] : `Propriété ${key} inexistante!`
}

const user1 = {
  fullname: "Marc Tremblay",
  username: "Furry99",
  password: "pa$$word"
}

console.log(getValue("fullname", user1))
console.log(getValue("fullname2", user1))