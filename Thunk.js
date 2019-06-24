  function Thunk(fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return function (callback) {
                args.push(callback);
                return fn.apply(this, args);
            }
        };
    };

    function fn(a, b, cb) {
        console.log(a + b)
        cb(33)
    }

    Thunk(fn)(100, 2)((v) => {
        console.log(v)
    })
