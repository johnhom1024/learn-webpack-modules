// 这里使用cjs的规范

function bar(params) {
  return 1;
}

function foo(params) {
  return 2
}

// exports.foo = foo;

module.exports = foo;
exports.bar = bar;