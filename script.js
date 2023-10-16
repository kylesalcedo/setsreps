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

    // Sets x Reps Counter
    const setsRepsCounter = document.getElementById("setsReps");
    const incrementSetsRepsButton = document.getElementById("incrementSetsReps");
    const decrementSetsRepsButton = document.getElementById("decrementSetsReps");

    let setsRepsCount = 0;

    incrementSetsRepsButton.addEventListener("click", function() {
        setsRepsCount++;
        setsRepsCounter.textContent = setsRepsCount;
    });

    decrementSetsRepsButton.addEventListener("click", function() {
        if (setsRepsCount > 0) {
            setsRepsCount--;
            setsRepsCounter.textContent = setsRepsCount;
        }
    });

    function updateTimeDisplay() {
        const minutes = Math.floor(timeCount / 60);
        const seconds = timeCount % 60;
        timeCounter.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }
});
