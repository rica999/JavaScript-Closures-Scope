//-----------------------------CLOSURE--------------------------------------

//Es la combinación del scope padre + función interna del scope padre
//Se usa con la finalidad de evitar variables globales

//Ejemplo 1

let person1 = "Ricardo"; //declarado en el global scope (scope padre)                                                          //}
function readPerson(){ //función interna del scope padre                                                                       //} closure
    console.log(person1); //ámbito léxico (alcance de una variable des un nivel inferior hasta uno superior y no viceversa)    //}
}                                                                                                                              //}
readPerson();

//Ejemplo 2

function readPersonParent(){
    let personParent = "Richy"; //declarado en el scope superior de la función interna (scope padre)                                                //}
    function readPersonChild(){ //función interna. Puede acceder a las variables en el scope padre y anteriores                                     //}
        let personChild = "Terry";                                                                                                                  //} closure
        console.log(personParent,personChild);//ámbito léxico (alcance de una variable des un nivel inferior hasta uno superior y no viceversa)     //}
    }                                                                                                                                               //}
    return readPersonChild();
}
readPersonParent();