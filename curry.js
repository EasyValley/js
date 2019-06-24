 function curry(fn) {

        let fStr = fn.toString()
        let reg = /\({1}(.*)\){1}/
        let m = fStr.match(reg)
        let args = m[1].split(',').map((item) => {
            return item.trim()
        })
        let len = args.length;
        let str = 'var fn = ' + fStr + ';'
        let arr = []
        for (let i = 0; i < len; i++) {
            arr.push('}')
            str += `return function(${args[i]}){`
        }
        str = str + 'return ' + `fn.apply(this, [${m[1]}])` + arr.join('');
        return new Function(str)()
    }

    function f(a, b, c) {

        return `a:${a},b:${b},c${c}`
    }

    var val = curry(f)('你')('好')('啊')

    console.log(val);
