 function curry(fn) {
        return function gen(...args) {
            if (fn.length === args.length) {
                return fn(...args)
            } else {
                return (...args2) => {
                    return gen(...args, ...args2)
                }
            }
        }
    }

    function fn(a, b, c, d) {
        let val = d + a * b * c;
        console.log(val)
        return val;
    }

    curry(fn)(8, 1, 2, 3)
    curry(fn)(8)(1, 2, 3)
    curry(fn)(8)(1)(2, 3)
    curry(fn)(8)(1)(2)(3)
    curry(fn)(8, 1, 2)(3)
    curry(fn)(8, 1)(2, 3)
