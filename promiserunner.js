 function promiseRunnerCreator() {
    return {
      __initPromise: Promise.resolve(),
      run(job) {
        let jobArray = [];
        if (Array.isArray(job)) {
          jobArray = job;
        } else {
          jobArray = [job];
        }

        this.__initPromise = this.__initPromise.then(() => {
          return Promise.all(
            jobArray.map((fn) => {
              return fn();
            })
          );
        });
      },
    };
  }

  let promiseRunner = promiseRunnerCreator();

  promiseRunner.run(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("p1----3s");
        resolve();
      }, 3000);
    });
  });
  promiseRunner.run(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("p2----1s");
        resolve();
      }, 1000);
    });
  });

  promiseRunner.run([
    () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("p3----300ms");
          resolve();
        }, 300);
      });
    },
    () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("p4----100ms");
          resolve();
        }, 100);
      });
    },
  ]);
