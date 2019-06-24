 function flat(arr) {
        return [].concat.apply([], arr)
    }

    function hasArr(arr) {
        return arr.some((item) => {
            if (Array.isArray(item)) {
                return true
            } else {
                return false
            }
        })
    }

    function flatAll(arr) {
        if (hasArr(flat(arr))) {
            return flatAll(flat(arr))
        } else {
            return flat(arr)
        }
    }

    console.log(flatAll([1, 2]));
    console.log(flatAll([1, 2, [3, 4]]));

    console.log(flatAll([1, 2, [3, 4, [5, 6]]]));

    console.log(flatAll([1, 2, [3, 4, [5, 6, [7, 8]]]]));

    console.log(flatAll([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]));
    console.log(flatAll([1, 2, [3, 4, [5, 6, [7, 8, [9, 10, [11, 12]]]]]]));

    console.log(flatAll([1, 2, [3, 4, [5, 6, [7, 8, [9, 10, [11, 12, [13, 14, { name: '张三' }]]]]]]]));
