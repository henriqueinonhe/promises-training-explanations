import { Worker } from "node:worker_threads";
import { resolve } from "path";

const main = () => {
  const meetingTask = createTask("meeting");
  const codingTask = createTask("coding");
  const debuggingTask = createTask("debugging");

  meetingTask.start();
  codingTask.start();
  debuggingTask.start();
};

const createTask = (taskName) => {
  const currentFile = new URL(import.meta.url).pathname;

  const worker = new Worker(resolve(currentFile, "../1-preemptiveWorker.js"));

  const start = () => {
    worker.postMessage(taskName);
  };

  return {
    start,
  };
};

main();
