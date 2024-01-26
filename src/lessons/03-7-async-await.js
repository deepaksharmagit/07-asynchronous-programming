async function fetchDataAsync() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      // Log "Data fetched!" to the console
      console.log("Data fetched!");
      // Invoke the resolve function
      resolve();
    }, 1000);
  });
}

async function processDataAsync() {
  return new Promise(function (resolve) {
    setTimeout(function () {
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
 * Use async/await syntax
 *
 *  */
async function fetchDataAndProcess() {
  await fetchDataAsync();
  await processDataAsync();
  displayData();
}

fetchDataAndProcess();
