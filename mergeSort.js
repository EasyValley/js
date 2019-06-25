 // 融合两个有序数组，这里实际上是将数组 arr 分为两个数组
    function mergeArray(arr, first, mid, last, temp) {
        let i = first;
        let m = mid;
        let j = mid + 1;
        let n = last;
        let k = 0;
        while (i <= m && j <= n) {
            if (arr[i] < arr[j]) {
                temp[k++] = arr[i++];
            } else {
                temp[k++] = arr[j++];
            }
        }
        while (i <= m) {
            temp[k++] = arr[i++];
        }
        while (j <= n) {
            temp[k++] = arr[j++];
        }
        for (let l = 0; l < k; l++) {
            arr[first + l] = temp[l];
        }
        return arr;
    }
    // 递归实现归并排序
    function mergeSort(arr, first, last, temp) {
        if (first < last) {
            let mid = Math.floor((first + last) / 2);
            mergeSort(arr, first, mid, temp);    // 左子数组有序
            mergeSort(arr, mid + 1, last, temp);   // 右子数组有序
            arr = mergeArray(arr, first, mid, last, temp);
        }
        return arr;
    }


    function compare(n) {

        for (let i = 0; i < n; i++) {
            let arr = [];
            let m = parseInt(Math.random() * 100);
            for (let j = 0; j < m; j++) {
                arr.push(parseInt(Math.random() * 1000-500))
            }

            let r1 = sort(JSON.parse(JSON.stringify(arr))).reverse()

            let r2 = mergeSort(JSON.parse(JSON.stringify(arr)), 0, arr.length - 1, []);

            if (r1.join('') === r2.join('')) {
                console.log(i)
                console.log(r1.join(','))
            } else {
                console.log('---start--')
                console.log(r1.join(''))
                console.log(r2.join(''))
                console.log(false)
                console.log('---end--')
            }

        }

    }

    compare(100)




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
