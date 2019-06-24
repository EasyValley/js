
    function bind(context, fn) {
        return (...args) => {
            return fn.apply(context, args);
        }
    }

    var obj = {
        name: 'zs'
    }

    function fn(a, b) {
        console.log(a + '===' + b)
        console.log(this)
    }

    var bf = bind(obj, fn)

    bf(22, 99)
