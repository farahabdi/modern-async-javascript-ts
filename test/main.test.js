"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const main_1 = require("../src/main");
describe("Callback examples", () => {
    it("Nesting serial async dependencies", (done) => {
        main_1.getCurrentCity((error, city) => {
            main_1.getWeather(city, (error, weather) => {
                console.log("weather", weather);
                done();
            });
            console.log(`Weather for ${city}:`);
        });
    });
});
describe("Operations", () => {
    it("fetchCurrentCity with seperate success and error callbackss", (done) => {
        const operation = main_1.fetchCurrentCity();
        operation.setCallbacks((result) => done(), (error) => done(error));
    });
    it("register only error handler, ignores success", (done) => {
        const operation = main_1.fetchCurrentCity();
        operation.onFailure((error) => done());
        operation.onCompletion((result) => done());
    });
    it("register only success handler, ignores error", (done) => {
        const operation = main_1.fetchCurrentCity();
        operation.onCompletion((result) => done(new Error("Shouldn't succeed")));
        operation.onFailure((error) => done());
    });
});
//# sourceMappingURL=main.test.js.map