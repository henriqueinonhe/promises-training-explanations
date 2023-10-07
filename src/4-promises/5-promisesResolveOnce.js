const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve(1), 200);
  setTimeout(() => resolve(2), 300);
  setTimeout(() => resolve(3), 400);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(1), 200);
  setTimeout(() => reject(2), 300);
  setTimeout(() => reject(3), 400);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 200);
  setTimeout(() => reject(2), 300);
  setTimeout(() => resolve(3), 400);
});

promise1.then(
  () => console.log(promise1),
  () => console.log(promise1),
);
promise2.then(
  () => console.log(promise2),
  () => console.log(promise2),
);
promise3.then(
  () => console.log(promise3),
  () => console.log(promise3),
);
