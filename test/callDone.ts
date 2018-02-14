export function callDone(done:any) {
    let counter = 0;
    return {
      afterNCalls: function (expectedCount:any) {
        return function multiDone() {
          counter++;
          if (counter >= expectedCount) {
            // if we go over the count, we'll call done multiple times thus failing the test
            done();
          }
        }
      },
      afterTwoCalls: function () {
        return this.afterNCalls(2);
      }
    }
  }
  