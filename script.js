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
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
let minutes
const minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

function countDown() {

    // setTimeOut recebe uma função com o que é desejado que ela faça, e o segundo
    // parametro é o tempo que ela vai executar
    setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)

        if(seconds <= 0) {
            seconds = 60
        }

        secondsDisplay.textContent = seconds - 1
        
        // A função chamando ela mesma se chama RECURSIVIDADE
        // A cada segundo quando a função terminar, vai chamar a si mesma novamente
        // Necessário implementar a lógica para quando isso vai parar.
        countDown()        
    }, 1000)
}

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

    countDown()
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

buttonSet.addEventListener('click', function() {
    minutes = prompt('Quantos minutos?')
    // Para alterar o conteudo de um elemento HTML, podemos utilizar o textContent
    minutesDisplay.textContent = minutes
})