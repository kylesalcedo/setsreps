document.addEventListener("DOMContentLoaded", function() {
    // Sets Counter
    const setsCounter = document.getElementById("sets");
    const incrementSetsButton = document.getElementById("incrementSets");
    const decrementSetsButton = document.getElementById("decrementSets");

    let setsCount = 0;

    incrementSetsButton.addEventListener("click", function() {
        setsCount++;
        setsCounter.textContent = setsCount;
    });

    decrementSetsButton.addEventListener("click", function() {
        if (setsCount > 0) {
            setsCount--;
            setsCounter.textContent = setsCount;
        }
    });

    // Reps Counter
    const repsCounter = document.getElementById("reps");
    const incrementRepsButton = document.getElementById("incrementReps");
    const decrementRepsButton = document.getElementById("decrementReps");

    let repsCount = 0;

    incrementRepsButton.addEventListener("click", function() {
        repsCount++;
        repsCounter.textContent = repsCount;
    });

    decrementRepsButton.addEventListener("click", function() {
        if (repsCount > 0) {
            repsCount--;
            repsCounter.textContent = repsCount;
        }
    });

    // Sets x Time Counter
    const timeCounter = document.getElementById("time");
    const incrementTime15Button = document.getElementById("incrementTime15");
    const decrementTimeButton = document.getElementById("decrementTime");
    const toggleTimerButton = document.getElementById("toggleTimer");
    const timerIcon = document.getElementById("timerIcon");

    let timeCount = 0;
    let timerInterval;

    incrementTime15Button.addEventListener("click", function() {
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
