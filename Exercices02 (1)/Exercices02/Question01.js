function copyObject(source) {
  return { ...source }
}

const copyObject2 = source => ({ ...source })

const user1 = {
  fullname: "Marc Tremblay",
  username: "Furry99",
  password: "pa$$word"
}

const user2 = copyObject(user1)

user2.fullname = "Francis Roberge"
console.log(user1)
console.log(user2)