function addTask(str) {
        return () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(str)
                    resolve(str)
                }, 1000)
            })
        }
    }

    function Scheduler() {
        this.tasks = [];
        this.p = Promise.resolve()
    }
    Scheduler.prototype.push = function (task) {
        this.tasks.push(task)
        this.run();
    }
    Scheduler.prototype.run = function () {
        if (this.tasks.length > 0) {
            this.p = this.p.then(this.tasks.shift())
        }
    }

    var s = new Scheduler();
    var i = 4;
    s.push(addTask(1))
    s.push(addTask(2))
    s.push(addTask(3))

    s.push(() => {
        return new Promise((re) => {
            setTimeout(() => {
                re();
                console.log('和' + i++)
            }, 1000)
        })
    })
