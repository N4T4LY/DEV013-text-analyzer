const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

    if (!text.trim()) {
      return 0;
    }
    //divido las cadenas en base a espacios y las almaceno en tam
    let tam = text.split(" ");

    return tam.length;



  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.

    //verifico si en el textarea hay espacios o la cadena esta vacia y retorna 0 si es el caso
    if (!text.trim()) {
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
    let longitud = (suma / tam).toFixed(2);

    return longitud;



  },


  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    if (!text.trim()) {
      return 0;
    }

    //inicializo la variable resultado y voy almacenando los numeros que se encuentran en la cadena, con el + especifico que sean digitos consecutivos para que los tome en cuenta como numeros y no digitos aparte
    let resultado = text.match(/\d+/g);
    //si no existen numeros retorna 0
    if (resultado === null) {
      return 0;
    } else {
      //y si existen numeros devuelvo el numero de elementos que se encontraron
      return resultado.length;


    }


  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    if (!text.trim()) {
      return 0;
    }

    //inicializo variable suma
    let suma = 0;
    //busco los numeros y los almaceno en numero
    let numero = text.match(/\d+/g);
    
    //pregunto si hay o no numeros retorna 0 si no
    if (numero === null) {
      return 0;
    } else {
      //recorro el array numero     
      for (let i = 0; i < numero.length; i++) {
        //en la variable suma voy sumando los numeros, con parseint los convierto a enteros en base 10
        suma += parseInt(numero[i], 10);

      }
     
      return suma;
    }



  },
};

export default analyzer;
