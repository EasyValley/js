function debounce(fn, delay, context) {
    let timer = null;
    return (...args) => {
      if (timer) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          fn.apply(context ? context : this, args)
        }, delay)
      } else {
        timer = setTimeout(() => {
          fn.apply(context ? context : this, args)
        }, delay)
      }
    }
  }

  var i = 0;

  function f() {
    console.log(i++)
  }
  var df = debounce(f, 1000)

  let t = setInterval(() => {
    df()
  }, 300)

  setTimeout(() => {
    clearInterval(t)
  }, 3000)
