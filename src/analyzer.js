const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

    if(!text.trim()){
      return 0;
    }
    let tam= text.split(" ");
    
    return tam.length;

    

  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.

    return text.length;
    
  
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.

    return text.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').length;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

    if(!text.trim()){
      return 0;
    }
   
    let palabras=text.split(" ");
    let longitud=0;
    let suma=0;

    for(let i=0;i<palabras.length;i++){
      suma+=palabras[i].length;
  }
  longitud=(suma/palabras.length).toFixed(2);

    return longitud;

  },

  
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let resultado=text.match(/\d+/g);
    return resultado.length;
 
    
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let suma=0;
    let numero=text.match(/\d+/g);
    //console.log(numero);
    if(numero){
      for(let i=0;i<numero.length;i++){
        suma+= parseInt(numero[i],10);
        //console.log(suma);
        
    }
    }else{
      return 0;
    }
    return suma;
  
  },
};

export default analyzer;
