 // 方式一
  Function.prototype.bindT = function(that, ...args) {
    return (...args2) => {
      this.apply(that, args.concat(args2));
    };
  };

  function f(a, b) {
    console.log(this);
    console.log(a + "===" + b);
  }
  let obj = {
    name: "zs"
  };
  let f2 = f.bindT(obj, "h");
  f2("ooo");

  // 方式二
  function bind(context, fn, ...args0) {
    return (...args) => {
      return fn.apply(context, args0.concat(args));
    };
  }

  let obj = {
    name: "zs"
  };

  function fn(a, b) {
    console.log(a + "===" + b);
    console.log(this);
  }

  var bf = bind(obj, fn, 66);

  bf(22, 99);
