// Task 2: Testing Promises
it("should execute fetchDataWithPromise, processDataWithPromise, and displayDataWithPromise in sequence using promises", (done) => {
  spyOn(console, "log");

  // Mock setTimeout to execute callbacks immediately
  setTimeout = (callback) => {
    callback();
  };

  // Capture console logs
  const consoleLogs = [];
  spyOn(console, "log").and.callFake((message) => {
    consoleLogs.push(message);
  });

  // Execute promises
  const fetchDataWithPromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Data fetched!");
        resolve();
      }, 2000);
    });
  };

  const processDataWithPromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Data processed!");
        resolve();
      }, 1500);
    });
  };

  const displayDataWithPromise = () => {
    console.log("Data displayed!");
  };

  // Chain promises
  fetchDataWithPromise()
    .then(processDataWithPromise)
    .then(() => {
      displayDataWithPromise();
    });

  // Assertions
  setTimeout(() => {
    expect(consoleLogs).toEqual([
      "Data fetched!",
      "Data processed!",
      "Data displayed!",
    ]);
    done();
  }, 100); // Slight delay to ensure all promises are resolved
});
