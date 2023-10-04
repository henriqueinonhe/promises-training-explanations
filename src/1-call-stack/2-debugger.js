debugger;

function a() {
  b();
  c();
}

function b() {
  d();
}

function c() {
  e();
}

function d() {
  f();
}

function e() {
  f();
}

function f() {}

a();
