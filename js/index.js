import Timer from "./timer.js"
import Controls from "./controls.js"
import { elements } from "./elements.js"
import Sound from "./sounds.js"

const {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOn,
    buttonSoundOff,
    minutesDisplay,
    secondsDisplay
} = elements

const sound = Sound()
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
    sound.pressButton()
})

buttonPause.addEventListener('click', function() {    
    controls.pause()
    timer.hold()
    sound.pressButton()
})

buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    sound.pressButton()
})


buttonSoundOn.addEventListener('click', function() {
    elements.buttonSoundOn.classList.add('hide')
    elements.buttonSoundOff.classList.remove('hide')
    sound.bgAudio.pause()
})

buttonSoundOff.addEventListener('click', function() {
    elements.buttonSoundOn.classList.remove('hide')
    elements.buttonSoundOff.classList.add('hide')
    sound.bgAudio.play()
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