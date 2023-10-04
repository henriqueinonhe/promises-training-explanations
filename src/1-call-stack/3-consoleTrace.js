debugger;

function a() {
  console.trace();
  b();
  c();
}

function b() {
  console.trace();
  d();
}

function c() {
  console.trace();
  e();
}

function d() {
  console.trace();
  f();
}

function e() {
  console.trace();
  f();
}

function f() {
  console.trace();
}

a();
