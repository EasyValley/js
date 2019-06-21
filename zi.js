 var str = '{[()]}{}['

    function test(str) {
        var arr = str.split('');
        var len = arr.length;
        var s = ''
        var j = 0;
        for (let i = 0; i < len + 2; i += 2) {
            s = str.slice(j, i);
            if (isBi(s)) {
                s = ''
                j = i;
            }
        }
        if (s === '') {
            return true;
        } else {
            return false;
        }
    }
    function isBi(str) {
        if (str.length <= 0 || str.length % 2 !== 0) {
            return false
        } else {
            var trueArr = ['{}', '[]', '()']
            let s1 = str.slice(0, str.length / 2).split('')
            let s2 = str.slice(str.length / 2).split('').reverse();

            let flag = true;
            for (let i = 0; i < s1.length; i++) {
                if (trueArr.indexOf(s1[i] + s2[i]) === -1) {
                    flag = false;
                    break;
                }
            }
            return flag;

        }

    }

    console.log(test('{}{}['))

    console.log(test('{}[]{}'))

    console.log(test('{[]}{}'))

    console.log(test('{[]}({}'))
