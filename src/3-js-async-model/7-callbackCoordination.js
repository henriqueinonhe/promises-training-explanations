import { get } from "node:https";

const getProduct = (id, callback) => {
  get(`https://fakestoreapi.com/products/${id}`, (res) => {
    const buffer = [];

    res.on("data", (data) => {
      buffer.push(data);
    });

    res.on("close", () => {
      const result = JSON.parse(buffer.toString());
      callback(result);
    });
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
// SPACE
// SPACE
// SPACE
// SPACE
// SPACE

const main = () => {
  const products = [undefined, undefined, undefined];

  const next = (index, product) => {
    products[index] = product;

    if (!products.every((product) => Boolean(product))) {
      return;
    }

    console.log(products);
  };

  getProduct(1, (product) => next(0, product));
  getProduct(2, (product) => next(1, product));
  getProduct(3, (product) => next(2, product));
};

main();
