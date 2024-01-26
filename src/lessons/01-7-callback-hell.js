// Task 1 (Callback Hell)
function fetchData(callback) {
  setTimeout(function () {
    console.log("Data fetched!");
    callback();
  }, 2000);
}

function processData(callback) {
  setTimeout(function () {
    console.log("Data processed!");
    callback();
  }, 1500);
}

function displayData() {
  console.log("Data displayed!");
}

// Usage of callback hell
fetchData(function () {
  processData(function () {
    displayData();
  });
});

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
