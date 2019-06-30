function flat(depth, arr) {
        if (depth === 0) {
            return arr;
        } else {
            return arr.reduce((pre, cur) => {
                if (Array.isArray(cur)) {
                    return [...pre, ...flat(depth - 1, cur)]
                } else {
                    return [...pre, cur]
                }
            }, [])
        }
    }

    var arr = [[[3, 4, [6, 7]]], 5]

    console.log(flat(Infinity, arr));
    console.log(flat(1, arr));
    console.log(flat(2, arr));
    console.log(flat(3, arr));
