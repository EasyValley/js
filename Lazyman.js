function Lazyman(name) {
        this.tasks = [];//设置任务队列
        let task = (name => () => {
            console.log(`Hi! This is ${name} !`);
            this.next();
        })(name);
        this.tasks.push(task);
        //通过settimeout的方法，将执行函数放入下一个事件队列中，从而达到先注册事件，后执行的目的

        setTimeout(() => {
            this.next();
        }, 0);

    }

    Lazyman.prototype = {
        //尾调用函数，一个任务执行完然后再调用下一个任务
        next() {
            let task = this.tasks.shift();
            task && task();
        },

        eat(food) {
            let task = (food => () => {
                console.log(`Eat ${food}`);
                this.next();
            })(food);
            this.tasks.push(task);
            return this;
        },

        sleep(time) {
            let task = (time => () => {
                setTimeout(() => {
                    console.log(`Wake up after ${time} s!`);
                    this.next();
                }, time * 1000)
            })(time);
            this.tasks.push(task);
            return this;
        },

        sleepFirst(time) {
            let task = (time => () => {
                setTimeout(() => {
                    console.log(`Wake up after ${time} s!`);
                    this.next();
                }, time * 1000)
            })(time);
            this.tasks.unshift(task);//sleepFirst函数需要最先执行，所以我们需要在任务队列前面放入，然后再执行后面的任务
            return this;
        }
    }


    // new Lazyman("Hank")

    // new Lazyman("Hank").sleep(4).eat("dinner")

    // new Lazyman("Hank").eat("dinner").eat("supper")


    new Lazyman("Hank").sleepFirst(5).eat("supper")
