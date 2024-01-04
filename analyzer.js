const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    
    if (!text.trim()||text===null) {
      //console.log("0");
      return 0;
    }
    let tam = text.split(" ");
    let contar=0;
    for (let i = 0; i < tam.length; i++) {
      if(tam[i].match(/\w/g)){
        contar=contar+1;
        //console.log(tam[i].match(/\w/g));
      }
    }
    if(contar===0){
     
      return 0;
    }
   
    return contar;
  },


  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.

    if(text===null){
    // console.log(0);
      return 0;
    }
    //console.log(text.length);
    return text.length;
  },


  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    if (!text.trim()) {
      return "0" ;
    }
    const resultado = text.replace(/[\s.,/#"«»!¡¿?$%^&*;:{}=[\-_`~()\]]/g, "").length;
    if(resultado===null){
      return "0";
    }
    console.log(resultado);
    return resultado;
    
  },

  
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

    if (!text.trim()) {
      return 0;
    }
    const palabras = text.split(" ");
    const tam = palabras.length;
    let suma = 0;
    for (let i = 0; i < tam; i++) {
      suma += palabras[i].length;
    }
    let longitud = parseFloat((suma / tam).toFixed(2));
    return longitud;

  },


  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    
    if (!text.trim()||text===null) {
      return 0;
    }
    let palabras=text.split(" ");
    if(palabras===null){
      return 0;
    }
    let contar=0;
    for (let i = 0; i < palabras.length; i++) {
      if(palabras[i].match(/\b\d+\b/g)){
        contar=contar+1;
      }
    }
    return contar;
  },


  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
   
    if (!text.trim()||text===null) {
      return 0;
    }
    let palabras=text.split(" ");
    let suma=0;
    for (let i = 0; i < palabras.length; i++) {
      if(palabras[i].match(/\b\d+\b/g)){
        if(palabras[i].match(/\b\d+(\.\d+)?\b/g)){
          suma+=parseFloat(palabras[i]);
        }else{
          suma+=parseInt(palabras[i]);          
        }
      }
    }

    if(suma % 1 !== 0){
      suma=parseFloat(suma.toFixed(2));

    }else{
      suma=parseInt(suma);
    }
          
    return suma;

   
  },
};

export default analyzer;
