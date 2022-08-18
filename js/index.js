import { Timer } from "./timer.js"
import resetControls from "./controls.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.soundOn')
const buttonSoundOff = document.querySelector('.soundOff')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeout


/* Para fazer injeção de dependencia direto pelo JS, é necessário
    criar um objeto com os parametros exportados no módulo
*/
const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeout,
    resetControls,
})

buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')

    timer.countDown()
})

buttonPause.addEventListener('click', function() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')

    clearTimeout(timerTimeout)
})

buttonStop.addEventListener('click', function() {
    resetControls()
    timer.resetTimer()
})


buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', function() {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
})

buttonSet.addEventListener('click', function() {
    let newMinutes = prompt('Quantos minutos?')
    if(!newMinutes) {
        timer.resetTimer()
        return
    }

    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
})