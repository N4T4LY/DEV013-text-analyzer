import analyzer from './analyzer.js';

//recargo la pagina y limpio el contenido
let refresh = document.getElementById('reset-button');
refresh.addEventListener('click', _ => {
            location.reload();
})

//

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
//llamo el contenido del textarea con query selector
let textarea = document.querySelector('[name="user-input"]');
//
let mostrarnumcaracteres=document.querySelector('[data-testid="character-no-spaces-count"]');

let mostrarnumpalabras=document.querySelector('[data-testid="word-count"]');
textarea.addEventListener('input',()=>{
    let text =textarea.value;

    let contarpalabras=analyzer.getWordCount(text);
    mostrarnumpalabras.textContent=`Recuento palabras: ${contarpalabras}`


    let contarcaracteres=analyzer.getCharacterCountExcludingSpaces(text);
    mostrarnumcaracteres.textContent=`Recuento caracteres sin espacio: ${contarcaracteres} `;
});