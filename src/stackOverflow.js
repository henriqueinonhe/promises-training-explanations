let count = 0;
const arr = [];

const foo = () => {
  count++;
  console.log(count);

  const a1 = Math.random();
  const a2 = Math.random();
  const a3 = Math.random();
  const a4 = Math.random();
  const a5 = Math.random();
  const a6 = Math.random();
  const a7 = Math.random();
  const a8 = Math.random();
  const a9 = Math.random();
  const a10 = Math.random();

  arr.push(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);

  foo();
};

foo();
