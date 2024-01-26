function fetchDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Log "Data fetched!" to the console
      console.log("Data fetched!");
      // Invoke the callback function
      resolve();
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

// Use .then() to chain promises
fetchDataPromise()
  .then(() => processDataPromise())
  .then(() => displayData())
  .catch((error) => console.error(error));
