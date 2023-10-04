const stack = [];

const withStack = (f) => {
  return (...args) => {
    stack.push(f.name);

    console.log(`Inside ${f.name}, current stack:`, stack);

    const result = f(...args);

    stack.pop();

    return result;
  };
};

const a = withStack(function a() {
  b();
  c();
});

const b = withStack(function b() {
  d();
});

const c = withStack(function c() {
  e();
});

const d = withStack(function d() {
  f();
});

const e = withStack(function e() {
  f();
});

const f = withStack(function f() {});

a();
