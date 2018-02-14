
export const delayms = 1;

export function fetchCurrentCity() {

  const operation :any = {
    successReactions: [],
    errorReactions: []
  }

  getCurrentCity((error:any, result:any) => {
    if (error) {
      operation.errorReactions.forEach((r:any) => r(error))
      return
    }
    operation.successReactions.forEach((r:any) => r(result))
  })

  operation.onCompletion = function onCompletion(onSuccess:any, onError:any) {
    operation.successReactions.push(onSuccess)
    operation.errorReactions.push(onError)
  }

  operation.onFailure = function onFailure(onError:any) {
    operation.onCompletion(null, onError);
  }

  return operation

}

export  function getCurrentCity(callback:any) {
  setTimeout(() => {
    const city = "New York, NY";
    callback(null, city);
  }, delayms)
}

export  function getWeather(city:any, callback:any) {
  setTimeout(() => {
    if (!city) {
      callback(new Error("City required to get weather"));
      return;
    }

    const weather = {
      temp: 50
    };

    callback(null, weather)

  }, delayms)

}

export function getForecast(city :any, callback:any) {
  setTimeout(() => {

    if (!city) {
      callback(new Error("City required to get forecast"));
      return;
    }

    const fiveDay = {
      fiveDay: [60, 70, 80, 45, 50]
    };

    callback(null, fiveDay)

  }, delayms)
  
}

