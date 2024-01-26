describe("customSetTimeout Function", () => {
  let originalTimeout;

  // Store the original setTimeout function before running tests
  beforeAll(() => {
    originalTimeout = setTimeout;
  });

  // Restore the original setTimeout function after each test
  afterEach(() => {
    setTimeout = originalTimeout;
  });

  // Task 1: Testing if customSetTimeout calls setTimeout with correct arguments
  it("should call setTimeout with the provided callback and delay", (done) => {
    // Create a spy to track setTimeout calls
    spyOn(window, "setTimeout").and.callThrough();

    const callback = jasmine.createSpy("callback");
    const delay = 1000; // 1 second

    // Call customSetTimeout
    customSetTimeout(callback, delay);

    // Expectations
    expect(window.setTimeout).toHaveBeenCalledWith(callback, delay);
    done();
  });

  // Task 2: Testing if delayedMessage is executed after 1 second
  it("should execute delayedMessage function after 1 second (1000 ms)", (done) => {
    spyOn(console, "log");
    const delay = 1000; // 1 second

    // Replace the global setTimeout with a spy
    setTimeout = (callback, actualDelay) => {
      expect(actualDelay).toBe(delay);
      callback(); // Manually execute the callback
    };

    // Call customSetTimeout with delayedMessage
    customSetTimeout(delayedMessage, delay);

    // Wait for a brief moment to ensure delayedMessage is executed
    setTimeout(() => {
      expect(console.log).toHaveBeenCalledWith(
        "This message is delayed by 1 seconds."
      );
      done();
    }, delay); // Delayed slightly to account for setTimeout precision
  });
});
