 function compose(...fns) {
        return (...result) => {
            let len = fns.length;
            let flag = true;
            while (len--) {
                if (flag) {
                    flag = false;
                    result = fns[len].apply(this, result);
                } else {
                    result = fns[len](result)
                }
            }
            return result;
        }
    }

    function f1(a, b) {
        return a + 2 + b;
    }
    function f2(c) {
        return c * 2;
    }

    function f3(c) {
        return c + ':狗';
    }

    var v = compose(f3, f2, f1)(3, 4)
    console.log(v);
