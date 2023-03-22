const promise = new Promise(function (resolve, reject) {
    resolve()
});

const cows = 5;

const countCows = new Promise(function(resolve, reject){
    if(cows > 10) {
        resolve(`We have ${cows} cows on the farm`); }
        else {
            reject ('There is not enough cows on the farm');
        }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finally');
});


export function delay(time, message) {
    const promise = new Promise(function (resolve, reject) {
      resolve()
    });
    const time = 100;
    const message = "logrado"
  
    setTimeout(() => {
      const i = new Promise(function (resolve, reject) {
        if (time > 900) {
          resolve(`Hello, ${time} is good, so ${message}`);
        } else {
          reject('Not timer');
        }
      });
  
      i.then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        console.log('Is done');
      })
    }, 1000);
  }
  