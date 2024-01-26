// Task 1 (Using Async/Await)
async function fetchDataAsync() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Data fetched!");
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

async function fetchDataAndProcess() {
  // Use await to wait for promises to resolve
  await fetchDataAsync();
  await processDataAsync();
  displayData();
}

fetchDataAndProcess();
