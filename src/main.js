"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delayms = 1;
function fetchCurrentCity() {
    const operation = {
        successReactions: [],
        errorReactions: []
    };
    getCurrentCity((error, result) => {
        if (error) {
            operation.errorReactions.forEach((r) => r(error));
            return;
        }
        operation.successReactions.forEach((r) => r(result));
    });
    operation.onCompletion = function onCompletion(onSuccess, onError) {
        operation.successReactions.push(onSuccess);
        operation.errorReactions.push(onError);
    };
    operation.onFailure = function onFailure(onError) {
        operation.onCompletion(null, onError);
    };
    return operation;
}
exports.fetchCurrentCity = fetchCurrentCity;
function getCurrentCity(callback) {
    setTimeout(() => {
        const city = "New York, NY";
        callback(null, city);
    }, exports.delayms);
}
exports.getCurrentCity = getCurrentCity;
function getWeather(city, callback) {
    setTimeout(() => {
        if (!city) {
            callback(new Error("City required to get weather"));
            return;
        }
        const weather = {
            temp: 50
        };
        callback(null, weather);
    }, exports.delayms);
}
exports.getWeather = getWeather;
function getForecast(city, callback) {
    setTimeout(() => {
        if (!city) {
            callback(new Error("City required to get forecast"));
            return;
        }
        const fiveDay = {
            fiveDay: [60, 70, 80, 45, 50]
        };
        callback(null, fiveDay);
    }, exports.delayms);
}
exports.getForecast = getForecast;
//# sourceMappingURL=main.js.map