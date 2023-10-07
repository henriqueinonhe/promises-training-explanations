const promisifiedTask = (args) =>
  new Promise((resolve, reject) => {
    task(args, (error, data) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(data);
    });
  });

const main = () => {
  promisifiedTask("yada").then(console.log, console.error);
};

// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE

const task = (args, callback) => {
  // ...

  const error = Math.random() > 0.5 ? new Error("Error") : undefined;

  if (error) {
    callback(error, undefined);
    return;
  }

  callback(undefined, "Data");
};

main();
