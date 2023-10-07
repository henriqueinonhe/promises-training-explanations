const main = async () => {
  const promise = task();

  promise
    .then((data) => {
      console.log(data);

      const promise2 = task();
      console.log(promise2);
      return promise2;
    })
    .then((data) => {
      console.log(data);
    });

  // IGNORA ISSAQUI
  await new Promise((resolve) => setTimeout(resolve, 0));

  const otherPromise = taskWithError();

  otherPromise
    .then(null, (error) => {
      console.log(error);

      const promise2 = taskWithError();
      console.log(promise2);
      return promise2;
    })
    .then(null, (error) => {
      console.log(error);
    });
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

const task = () => Promise.resolve(Math.random());

const taskWithError = () => Promise.reject("Error " + Math.random());

main();
