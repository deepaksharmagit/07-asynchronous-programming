describe("Callback Hell", () => {
  let originalConsoleLog;
  let logSpy;

  // Store the original console.log function before running the test
  beforeAll(() => {
    originalConsoleLog = console.log;
  });

  // Create a spy that preserves the original behavior of console.log
  beforeEach(() => {
    logSpy = spyOn(console, "log").and.callThrough();
  });

  // After running the tests, restore the original console.log function
  afterAll(() => {
    console.log = originalConsoleLog;
  });

  //Testing Callback Hell
  it(`should test for the function to be logged in order: 'Data fetched!' 'Data processed!' 'Data displayed'`, (done) => {
    // Wait for a brief moment to allow the asynchronous code to execute
    setTimeout(() => {
      // Assertions
      expect(logSpy).toHaveBeenCalledWith("Data fetched!");
      setTimeout(() => {
        expect(logSpy).toHaveBeenCalledWith("Data processed!");
        expect(logSpy).toHaveBeenCalledWith("Data displayed!");
        done();
      }, 500);
    }, 1000); // Adjust the timeout to ensure enough time for execution
  });
});
