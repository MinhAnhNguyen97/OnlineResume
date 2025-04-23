let count = 0;
  let timerId;

  function startTimer() {
    const limit = parseInt(document.getElementById("timeLimit").value); // get user input
    count = 0;
    document.getElementById("timer").innerText = count;
  
    if (!timerId && !isNaN(limit) && limit > 0) {
      timerId = setInterval(() => {
        count++;
        document.getElementById("timer").innerText = count;
  
        if (count >= limit) {
          clearInterval(timerId);
          timerId = null;
          alert("Timer ended!");
        }
      }, 1000); // every 1 second
    } else if (isNaN(limit) || limit <= 0) {
      alert("Please enter a valid number of seconds.");
    }
  }

  function stopTimer() {
    clearInterval(timerId); // stop the interval
    timerId = null; // reset the timerId so it can start again
  }

// let idleSeconds = 0;
// let idleInterval;
  
// function startIdleTracker() {
//     idleSeconds = 0;
  
    // Increase idle time every second
//     idleInterval = setInterval(() => {
//       idleSeconds++;
//       if (idleSeconds >= 10) {
//         alert("Time is reached");
//         idleSeconds = 0; // reset after alert
//       }
//     }, 1000);
  
    // Reset idle time on user activity
// document.onmousemove = resetIdleTime;
// document.onkeydown = resetIdleTime;
// document.onclick = resetIdleTime;
//   }
  
// function resetIdleTime() {
//     idleSeconds = 0;
//   }
  
//   window.onload = () => {
//     startIdleTracker();
//   };