
    function unique(arr) {
        return [...new Set(arr)]
    }

    var a = {
        name: 'a'
    }
    var b = {
        name: 'b'
    }

    var c = {
        name: 'c'
    }

    var arr = [a, b, c, a, b, b, b, b]
    console.log(unique(arr))
