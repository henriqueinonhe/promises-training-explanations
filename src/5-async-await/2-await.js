const foo = async () => {
  const promise = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      reject(new Error("Error"));
      return;
    }

    resolve(10);
  });

  try {
    const value = await promise;
    console.log(value);
  } catch (error) {
    console.log(error);
  }
};
