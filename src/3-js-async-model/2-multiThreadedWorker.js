import { exit } from "node:process";
import { parentPort } from "node:worker_threads";

const main = () => {
  parentPort.on("message", (message) => {
    task(message);
  });
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
