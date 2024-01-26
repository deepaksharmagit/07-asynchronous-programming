function fetchData(callback) {
  setTimeout(function () {
<<<<<<< HEAD
    console.log("Data fetched!");
    callback();
  }, 2000);
=======
    // Log "Data fetched!" to the console
    console.log("Data fetched!");
    // Invoke the callback function
    callback();
  }, 1000);
>>>>>>> solutions
}

function processData(callback) {
  setTimeout(function () {
    console.log("Data processed!");
    callback();
<<<<<<< HEAD
  }, 1500);
=======
  }, 500);
>>>>>>> solutions
}

function displayData() {
  console.log("Data displayed!");
}

<<<<<<< HEAD
// Usage of callback hell
=======
/**
 * Use the function above to log the following in otder to the console:
 *
 * "Data fetched!"
 * "Data processed!"
 * "Data displayed!"
 *
 * Use callback syntax
 * https://dev.to/jerrycode06/callback-hell-and-how-to-rescue-it-ggj
 *
 *  */
>>>>>>> solutions
fetchData(function () {
  processData(function () {
    displayData();
  });
});
<<<<<<< HEAD

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
=======
>>>>>>> solutions
