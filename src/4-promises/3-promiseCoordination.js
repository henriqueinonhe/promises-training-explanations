import { get } from "node:https";

const main = () => {
  const productsPromise = Promise.all([
    getProduct(1),
    getProduct(2),
    getProduct(3),
  ]);

  productsPromise.then(console.log);
};

const getProduct = (id) =>
  new Promise((resolve) => {
    get(`https://fakestoreapi.com/products/${id}`, (res) => {
      const buffer = [];

      res.on("data", (data) => {
        buffer.push(data);
      });

      res.on("close", () => {
        const result = JSON.parse(buffer.toString());
        resolve(result);
      });
    });
  });

main();
