describe("customSetTimeout Function", () => {
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

  // Task 2: Testing if delayedMessage is executed after 1 second
  it("should execute delayedMessage function after 1 second (1000 ms)", (done) => {
    setTimeout(() => {
      // Assertions
      expect(logSpy).toHaveBeenCalledWith(
        "This message is delayed by 1 second."
      );
      done();
    }, 1000); // Adjust the timeout to ensure enough time for execution
  });
});
