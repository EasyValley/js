function throttle(fn, delay) {
    let pre = Date.now()

    return (...args) => {
      let du = Date.now() - pre
      if (du >= delay) {
        fn.apply(this, args)
        pre = Date.now()
      }
    }

  }
  var i = 0;
  function fn() {
    console.log(i++)
  }

  var tf = throttle(fn, 2000)

  setInterval(() => {
    tf()

  }, 200)
