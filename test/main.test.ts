import "mocha";
import { assert } from "chai";
import { getCurrentCity, getWeather, 
         getForecast, fetchCurrentCity } from '../src/main'
import { callDone } from './callDone'
         
describe("Callback examples", () => {

  it("Nesting serial async dependencies", (done) => {
      getCurrentCity((error:any, city:any) => {
  
          getWeather(city, (error:any, weather:any) => {
            console.log("weather", weather)
            done()
          });
      
          console.log(`Weather for ${city}:`)
       });
    });
});

describe("Operations", () => {
  it("fetchCurrentCity with seperate success and error callbackss", (done) => {
    const operation :any = fetchCurrentCity()
    operation.setCallbacks(
      (result:any) => done(),
      (error:any) => done(error))

  });

  it("register only error handler, ignores success", (done) => {
    const operation :any = fetchCurrentCity();
    
    operation.onFailure((error:any) => done());
    operation.onCompletion((result:any) => done());

  });

  it("register only success handler, ignores error", (done) => {

    const operation :any = fetchCurrentCity()

    operation.onCompletion((result:any) => done(new Error("Shouldn't succeed")));
    operation.onFailure((error:any) => done());

  });


});