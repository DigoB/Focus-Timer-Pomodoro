import Timer from "./timer.js"
import Controls from "./controls.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.soundOn')
const buttonSoundOff = document.querySelector('.soundOff')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

/* Para fazer injeção de dependencia direto pelo JS, é necessário
    criar um objeto com os parametros exportados no módulo
*/
const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})


buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countDown()
})

buttonPause.addEventListener('click', function() {    
    controls.pause()
    timer.hold()
})

buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
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
    let newMinutes = controls.getMinutes()

    if(!newMinutes) {
        timer.reset()
        return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)


})