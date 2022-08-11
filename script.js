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
})

/**
 * Programação imperativa
 * É quando nós programamos dando ordens passo a passo do que o 
 * software deve fazer, como fizemos com o HTML e CSS
 * 
 * Programação declarativa
 * Não falamos o passo a passo, dizemos apenas o que deve ser feito
 * mas não deixamos claro em qual ordem ou em que momento deve ser
 * executado
 */


