document.addEventListener('DOMContentLoaded', function () {
    // Get the element to display countdown and message
    const countdownElement = document.getElementById('countdown');
    
    // Function to display the countdown
    function countdown(num, callback) {
      setTimeout(function () {
        countdownElement.textContent = num;
  
        // Check if countdown is completed
        if (num === 1) {
          callback();
        } else {
          // Continue countdown with the next number
          countdown(num - 1, callback);
        }
      }, 1000);
    }
  
    // Start countdown from 10
    countdown(10, function () {
      // Display "Happy Independence Day" after countdown
      countdownElement.textContent = "Happy Independence Day 😊🥳";
    });
  });
  