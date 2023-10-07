const promise = new Promise((resolve) => {
  setTimeout(() => resolve(1), 200);
});

console.log(promise);

const instantlyResolved = new Promise((resolve) => resolve(2));

console.log(instantlyResolved);

instantlyResolved.then(console.log);

setTimeout(() => instantlyResolved.then(console.log), 1000);
