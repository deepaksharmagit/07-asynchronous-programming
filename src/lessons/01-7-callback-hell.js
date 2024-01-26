function fetchData(callback) {
  setTimeout(function () {
    // Log "Data fetched!" to the console
    console.log("Data fetched!");
    // Invoke the callback function
    callback();
  }, 1000);
}

function processData(callback) {
  setTimeout(function () {
    console.log("Data processed!");
    callback();
  }, 500);
}

function displayData() {
  console.log("Data displayed!");
}

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
fetchData(function () {
  processData(function () {
    displayData();
  });
});
