try {
  setTimeout(() => {
    throw new Error("Error!");
  }, 1000);
} catch {
  console.log("Caught!");
}
