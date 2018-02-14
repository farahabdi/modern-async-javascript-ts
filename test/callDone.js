"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function callDone(done) {
    let counter = 0;
    return {
        afterNCalls: function (expectedCount) {
            return function multiDone() {
                counter++;
                if (counter >= expectedCount) {
                    done();
                }
            };
        },
        afterTwoCalls: function () {
            return this.afterNCalls(2);
        }
    };
}
exports.callDone = callDone;
//# sourceMappingURL=callDone.js.map