const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

    if (!text.trim()) {
      return 0;
    }
  
    let tam = text.split(" ");

    return tam.length;



  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.

    if(text===null){
      return 0;
    }

    //calculo el tamano de la cadena y la envio como resultado  
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.

    if (!text.trim()) {
      return 0;
    }
    //ingreso los caracteres especiales y espacios que quiero borrar y los reemplazo en la cadena con cadenas con una cadena vacia y despues calculo el tamaño de la cadena resultante
    return text.replace(/[\s.,/#!$%^&*;:{}=\-_`~()]/g, "").length;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

    if (!text.trim()) {
      return 0;
    }

    //divido las palabras de acuerdo al espacio entre cada una
    const palabras = text.split(" ");
    //calculo el numero de las palabras que se fueron encontrando
    const tam = palabras.length;
    //inicializo la variable en donde se almacena la suma de la longitud de cada palabra
    let suma = 0;

    //con un for recorro el array de todas las palabras que se fueron desplegando con el split
    for (let i = 0; i < tam; i++) {

      //tomo la palabra en la posicion i y tomo su longitud y luego la sumo en la variable suma
      suma += palabras[i].length;

    }
    //inicializo la variable longitud, divido la suma obtenida con el for con el numero de las palabras, con el tofixed(2) convierto el valor int en un float y el con el 2 especifico cuantos decimales quiero despues de la coma
    let longitud = parseFloat((suma / tam).toFixed(2));

    return longitud;



  },


  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    if (!text.trim()) {
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
    if (!text.trim()) {
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
    
    console.log(suma);
    return suma;

   
  },
};

export default analyzer;
