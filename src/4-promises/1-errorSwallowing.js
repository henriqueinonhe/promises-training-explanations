import { readFile } from "node:fs/promises";

readFile("MWAHAHA").then(
  (data) => {
    console.log(data);
  },
  (error) => {
    //...
  },
);
