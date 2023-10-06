try {
  [1, 2, 3].map(() => {
    throw new Error("Error!");
  });
} catch {
  console.log("Caught!");
}
