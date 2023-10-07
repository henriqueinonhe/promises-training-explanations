const promise = new Promise((resolve) => {
  setTimeout(() => resolve(1), 200);
});

const otherPromise = promise.then(console.log);

const yetAnotherPromise = otherPromise.then(console.log);

const yetAnotherOtherPromise = promise.then(console.log);

console.log(promise === otherPromise);
console.log(promise === yetAnotherPromise);
console.log(promise === yetAnotherOtherPromise);
console.log(otherPromise === yetAnotherPromise);
console.log(otherPromise === yetAnotherOtherPromise);
console.log(yetAnotherPromise === yetAnotherOtherPromise);
