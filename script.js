document.addEventListener("DOMContentLoaded", function() {
    // Sets x Reps Counter
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
    const incrementTimeButton = document.getElementById("incrementTime");
    const decrementTimeButton = document.getElementById("decrementTime");

    let timeCount = 0;

    incrementTimeButton.addEventListener("click", function() {
        timeCount++;
        updateTimeDisplay();
    });

    decrementTimeButton.addEventListener("click", function() {
        if (timeCount > 0) {
            timeCount--;
            updateTimeDisplay();
        }
    });

    function updateTimeDisplay() {
        const minutes = Math.floor(timeCount / 60);
        const seconds = timeCount % 60;
        timeCounter.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }
});
