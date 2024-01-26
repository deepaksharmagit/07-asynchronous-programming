// Task 1 (Callback Hell)
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
 * Use fetchData, processData, and displayData to log the following in otder to the console:
 * "Data fetched!"
 * "Data processed!"
 * "Data displayed!"
 *  */
fetchData(function () {
  processData(function () {
    displayData();
  });
});
