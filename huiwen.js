function getAllStr(str) {
        var arr = str.split('')
        var len = arr.length

        var result = [];
        for (let i = 0; i <= len; i++) {

            for (let j = i; j <= len; j++) {
                result.push(str.slice(i, j))
            }
        }

        let r = [...new Set(result)];

        return r;

    }

    function isHui(arr) {
        let r = [];
        arr.forEach(element => {
            if (element === element.split('').reverse().join('')) {
                if (element.length > 1) {
                    r.push(element)
                }
            }

        });
        return r;

    }

    function getMaxHuiwen(arr) {
        var str = ''
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length > str.length) {
                str = arr[i];
            }

        }
        return str;

    }


    var maxStr = getMaxHuiwen(isHui(getAllStr('abcdedcda')))

    console.log(maxStr);
