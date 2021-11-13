function deleteFind(char, source) {
  for (let key in source) {
    if (source[key].includes(char)) {
      delete source[key];
    }
  }
  return source;
}

const user1 = {
  fullname: "Marc Tremblay",
  username: "Furry99",
  password: "pa$$word",
};

console.log(deleteFind("a", user1));
