const foo = async () => {
  if (Math.random() > 0.5) {
    throw new Error("Error");
  }

  return 10;
};

const promise = foo();

console.log(promise);
