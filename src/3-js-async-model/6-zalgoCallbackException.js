const main = () => {
  try {
    releaseZalgo(() => {
      throw new Error("Error");
    });
  } catch {
    console.log("Caught!");
  }
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

const releaseZalgo = (callback) => {
  if (Math.random() > 0.5) {
    setTimeout(callback, 0);
    return;
  }

  callback();
};

main();
