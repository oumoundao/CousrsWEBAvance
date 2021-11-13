function getRandomValue(source) {
  const count = Object.values(source).length;
  const random = Math.floor(Math.random() * count);
  return Object.values(source)[random];
}

const getRandomValue2 = (source) => Object.values(source)[Math.floor(Math.random() * Object.values(source).length)];

const user1 = {
  fullname: "Marc Tremblay",
  username: "Furry99",
  password: "pa$$word",
};

console.log(getRandomValue2(user1));


const tableau []
for ()
