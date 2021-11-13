const getRandomValue = (obj) => {
    const values = Object.values(obj);
    return values[Math.floor(Math.random() * values.length)];
  };
  
  const user1 = {
    fullname: "Marc Tremblay",
    username: "Furry99",
    password: "pa$$word",
  };
  
  console.log(getRandomValue(user1));
  