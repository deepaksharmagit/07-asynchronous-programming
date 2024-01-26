function customSetTimeout(callback, delay) {
  // Pass the callback function and delay to the standard setTimeout function
<<<<<<< HEAD
=======
  setTimeout(callback, delay);
>>>>>>> solutions
}

function delayedMessage() {
  console.log("This message is delayed by 1 seconds.");
}

// Call customeSetTimeout in a way that executes the console.log in delayedMessage after 1 second (1000 ms)
<<<<<<< HEAD
=======
customSetTimeout(delayedMessage, 1000);
>>>>>>> solutions
