const stack = [];

const withStack = (f) => {
  return (...args) => {
    stack.push(f);

    console.log(stack);
    const result = f(...args);
    stack.pop();
    return result;
  };
};

const a = withStack(function a() {
  b();
});

const b = withStack(function b() {
  c();
});

const c = withStack(function c() {
  d();
});

const d = withStack(function d() {});

a();
