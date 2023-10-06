import { parentPort } from "node:worker_threads";
import { writeSync, fsync } from "fs";
import { exit } from "node:process";

parentPort.on("message", (taskName) => {
  const matrix = {
    meeting: meetingTask,
    coding: codingTask,
    debugging: debuggingTask,
  };

  matrix[taskName]();
});

const meetingTask = () => {
  work("Meeting");
  exit(0);
};

const codingTask = () => {
  work("Coding");
  exit(0);
};

const debuggingTask = () => {
  work("Debugging");
  exit(0);
};

const work = (taskName) => {
  let count = 0;
  while (count < 1000) {
    workALittle();

    if (count % 100 === 0) {
      stdoutSync(`${taskName} ${((count / 1000) * 100).toFixed(0)}%`);
    }

    count++;
  }
};

const workALittle = () => {
  const start = performance.now();
  while (performance.now() - start < 1) {}
};

const stdoutSync = (message) => {
  writeSync(1, message + "\n");
  fsync(1, () => {});
};
