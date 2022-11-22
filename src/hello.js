let sayHello = (name) => {
  return `Hello ${name}!`;
};

console.log(sayHello(process.argv[2]));

let concatenate = (charachters) => {
  for (var i = 0; i <= charachters.lenght; i++) {
    var concat = concat + charachters[i];
  }
  return concat;
};

console.log(concatenate(process.argv[2]));
