import analyzer from "./analyzer.js";
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//recargo la pagina y limpio el contenido
let refresh = document.getElementById("reset-button");
refresh.addEventListener("click", () => {
  location.reload();
});


//llamo el contenido del textarea con query selector
let textarea = document.querySelector("[name=\"user-input\"]");

//con el queryselector capturo el li de cada elemento para despues mostrar el resultado de cada uno
let mostrarnumcaracteres = document.querySelector("[data-testid=\"character-count\"]");
let mostrarnumcaracteresse=document.querySelector("[data-testid=\"character-no-spaces-count\"]");
let mostrarnumpalabras=document.querySelector("[data-testid=\"word-count\"]");
let mostrarnumnumeros=document.querySelector("[data-testid=\"number-count\"]");
let mostrarsuma=document.querySelector("[data-testid=\"number-sum\"]");
let mostrarlongitud=document.querySelector("[data-testid=\"word-length-average\"]");

//funcion, con addevenlistener escucho el valor del textarea y ejecuto las funciones del analyzer
textarea.addEventListener("input",()=>{
    
  //capturo el valor de textarea y lo almaceno en text
  let text =textarea.value;

  //creo una variable donde almaceno el resultado de las funciones mandando el valor del textarea y la despliego en su li respectivo con el textcontent
  let contarpalabras=analyzer.getWordCount(text);
  mostrarnumpalabras.textContent=`Recuento palabras: ${contarpalabras}`;

    
  let contarcaracteres=analyzer.getCharacterCount(text);
  mostrarnumcaracteres.textContent=`Recuento caracteres: ${contarcaracteres}`;


  let contarcaracteresse=analyzer.getCharacterCountExcludingSpaces(text);
  mostrarnumcaracteresse.textContent=`Recuento caracteres sin espacio: ${contarcaracteresse} `;

  let contarnumeros=analyzer.getNumberCount(text);
  mostrarnumnumeros.textContent=`Recuento numeros: ${contarnumeros}`;

  let sumar=analyzer.getNumberSum(text);
  mostrarsuma.textContent=`Suma de números: ${sumar}`;

  let longitudmedia=analyzer.getAverageWordLength(text);
  mostrarlongitud.textContent=`Promedio de Longitud: ${longitudmedia}`;





});