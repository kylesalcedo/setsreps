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
});
