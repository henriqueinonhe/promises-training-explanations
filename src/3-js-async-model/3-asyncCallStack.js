const main = () => {
  a();
};

const a = () => {
  b();
};

const b = () => {
  c();
};

const c = () => {
  console.trace();
  setTimeout(() => {
    console.trace();
    console.log(1);
  }, 0);

  console.trace();
  console.log(2);

  setTimeout(() => {
    console.trace();
    console.log(3);

    setTimeout(() => {
      console.trace();
      console.log(4);
    }, 0);
  }, 0);

  console.trace();
  console.log(5);

  setTimeout(() => {
    console.trace();
    console.log(6);
  }, 500);
};

main();
