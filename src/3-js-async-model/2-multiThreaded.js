import { Worker } from "node:worker_threads";
import { resolve } from "node:path";

const main = () => {
  task(1);
  task(2);
  task(3);
};

const task = (number) => {
  const currentFile = new URL(import.meta.url).pathname;

  const worker = new Worker(
    resolve(currentFile, "../2-multiThreadedWorker.js"),
  );

  worker.postMessage(number);
};

main();
