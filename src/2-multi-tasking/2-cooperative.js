import { writeSync, fsync } from "fs";

const main = () => {
  meetingTask();
  codingTask();
  debuggingTask();
};

const meetingTask = () => {
  work("Meeting");
};

const codingTask = () => {
  work("Coding");
};

const debuggingTask = () => {
  work("Debugging");
};

const work = (taskName) => {
  let count = 0;

  const go = () => {
    workALittle();

    if (count % 100 === 0) {
      stdoutSync(`${taskName} ${((count / 1000) * 100).toFixed(0)}%`);
    }

    count++;

    if (count < 1000) {
      suspend(go);
    }
  };

  go();
};

const workALittle = () => {
  const start = performance.now();
  while (performance.now() - start < 1) {}
};

const stdoutSync = (message) => {
  writeSync(1, message + "\n");
  fsync(1, () => {});
};

const suspend = (callback) => {
  setTimeout(callback, 0);
};

main();
