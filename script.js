document.addEventListener("DOMContentLoaded", function() {
    // Sets Counter
    // ...

    // Reps Counter
    // ...

    // Sets x Time Counter
    const timeCounter = document.getElementById("time");
    const incrementTimeButton = document.getElementById("incrementTime");
    const decrementTimeButton = document.getElementById("decrementTime");
    const toggleTimerButton = document.getElementById("toggleTimer");
    const timerIcon = document.getElementById("timerIcon");

    let timeCount = 0;
    let timerInterval;

    incrementTimeButton.addEventListener("click", function() {
        timeCount += 15; // Increase by 15 seconds
        updateTimeDisplay();
    });

    decrementTimeButton.addEventListener("click", function() {
        if (timeCount > 0) {
            timeCount -= 15; // Decrease by 15 seconds
            updateTimeDisplay();
        }
    });

    toggleTimerButton.addEventListener("click", function() {
        if (!timerInterval) {
            timerInterval = setInterval(function() {
                if (timeCount > 0) {
                    timeCount--;
                    updateTimeDisplay();
                } else {
                    clearInterval(timerInterval);
                    timerInterval = null; // Reset the interval
                    timerIcon.className = "far fa-play-circle"; // Change to Start icon
                }
            }, 1000); // Decrease by 1 second per second
            timerIcon.className = "far fa-pause-circle"; // Change to Pause icon
        } else {
            clearInterval(timerInterval);
            timerInterval = null; // Reset the interval
            timerIcon.className = "far fa-play-circle"; // Change to Start icon
        }
    });

    function updateTimeDisplay() {
        const minutes = Math.floor(timeCount / 60);
        const seconds = timeCount % 60;
        timeCounter.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }
});
