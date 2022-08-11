/*
DOM - Document Object Model
É a modelagem do documento em formado de objeto Javascript

A DOM é programada direcionada a eventos(event-driven)
 */

/* 
Ao utilizar o querySelector podemos buscar os elementos no HTML 
 para fazer alterações, isso pode ocorrer tantos nas tags primárias
 como classes e ids que crie
*/ 
let buttonPlay = document.querySelector('.play')
let buttonPause = document.querySelector('.pause')
let buttonStop = document.querySelector('.stop')
let buttonSet = document.querySelector('.set')
let buttonSoundOn = document.querySelector('.sound-on')
let buttonSoundOff = document.querySelector('.sound-off')

/**
 * Callback
 * Sempre que passamos uma função como argumento de outra função
 * que será executada após algum tipo de evento, chamamos de callback.
 * Nesse caso, estamos adicionamento um listener, que vai ser armazenado em memória mas será executado apenas quando houver um clique.
 * Quando isso ocorrer, vai ser acionada a função passada como paramentro, isso é o callback da função addEventListener nesse caso.
 * 
 */
buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonStop.classList.remove('hide')
    buttonSet.classList.add('hide')
})

buttonPause.addEventListener('click', function() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
})

buttonStop.addEventListener('click', function() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
})

buttonSoundOff.addEventListener('click', function() {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
})

buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})