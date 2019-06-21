  function Person(name) {
        this.name = name
    }

    function fn(Conb, args) {
        var o = Object.create(Conb.prototype);
        Conb.apply(o, args);
        return o;
    }

    var p = fn(Person, ['丽丽'])

    console.log(p)
