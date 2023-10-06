const main = () => {
  task(1);
  task(2);
  task(3);
};

const task = (number) => {
  setTimeout(() => {
    console.log(`Start ${number}`);

    sleep(1000);

    console.log(`End ${number}`);
  }, 500);
};

const sleep = (ms) => {
  const start = performance.now();
  while (performance.now() - start < ms);
};

main();
