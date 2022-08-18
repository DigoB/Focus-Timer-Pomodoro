export function Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeout,
    resetControls
}) {
    
    function countDown() {
    
        timerTimeout = setTimeout(function() {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
    
            updateTimerDisplay(minutes, 0)
    
            if(minutes <= 0) {
    
                resetControls()
    
                return;
            }
    
            if(seconds <= 0) {
                seconds = 2
                --minutes
            }
    
            updateTimerDisplay(minutes, seconds - 1)
    
            countDown()
        }, 1000)
    }
    
    function resetTimer() {
        updateTimerDisplay(minutes, 0)
        clearTimeout(timerTimeout)
    
    }
    
    function updateTimerDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    return {
        countDown,
        resetTimer,
        updateTimerDisplay
    }
}
