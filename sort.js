 function getMax(arr) {
        let max = arr[0];
        let index = 0;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] >= max) {
                max = arr[i]
                index = i
            }
        }
        return {
            max,
            index
        }
    }

    function sort(arr) {
        var result = [];
        let len = arr.length;

        for (let i = 0; i < len; i++) {
            var val = getMax(arr)
            result.push(val.max)
            arr.splice(val.index, 1);
        }
        return result
    }

    console.log(sort([8, 10, 1, 5, 8]))
