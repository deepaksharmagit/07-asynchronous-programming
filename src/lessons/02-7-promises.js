// Task 2 (Using Promises)
function fetchDataWithPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Data fetched!");
      resolve();
    }, 2000);
  });
}

fetchDataWithPromise()
  .then(function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("Data processed!");
        resolve();
      }, 1500);
    });
  })
  .then(function () {
    console.log("Data displayed!");
  });
