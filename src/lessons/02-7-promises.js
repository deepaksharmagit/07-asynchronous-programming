function fetchDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Log "Data fetched!" to the console
      // Invoke the resolve function
    }, 1000);
  });
}

function processDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Data processed!");
      resolve();
    }, 500);
  });
}

function displayData() {
  console.log("Data displayed!");
}

/**
 * Use the functions above to log the following in otder to the console:
 *
 * "Data fetched!"
 * "Data processed!"
 * "Data displayed!"
 *
 * Use .then() and .catch() to chain promises
 *
 *  */
