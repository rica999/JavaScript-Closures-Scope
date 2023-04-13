//Variables: Conceptos clave

var a; //declaración
var b = "b"; //declaración y asignación
b = "bb"; //reasignación
var a = "aa"; //redeclaración

//-----------------------------GLOBAL SCOPE--------------------------------------

//Declaración fuera de un bloque o función
var fruta = "Banana";
console.log(fruta);

function readFruit() {
    console.log(fruta);//puede acceder al valor de la variable desde dentro de una función
}
readFruit();

//OJO

function verdura(){
    verdura = "Espinaca"; //si no se asigna un tipo a la variable se considera de alcanca global, incluso desde un bloque
    console.log(verdura);
}

verdura();
console.log(verdura);

//-----------------------------FUNCTION O LOCAL SCOPE--------------------------------------

//Declaración dentro de una función
function saludo(){
    let nombre = "Ricardo";
    console.log(nombre);

    if(nombre === "Ricardo"){
        console.log(`Hola ${nombre}`);//puden ser accedidas dentro de la función, sin importar si están o no en un bloque
    }
    despedida(nombre);//pueden ser accedidas por una función anidada que reciba como parámetro la variable
}

function despedida(a){
    console.log(a);
}

saludo();

//-----------------------------BLOCK SCOPE--------------------------------------

//Implementado en ECMASCRIPT 6. Se usa con variables tipo let y const

function juguete(){
    let toy4 = "Truck"; //en este caso el bloque sería toda lo que esté dentro de la función juguete
    if(true){
        var toy1 = "Car"; //var es de tipo function scope
        let toy2 = "Doll";
        const toy3 = "Robot";
        console.log(toy4);
    }
    console.log(toy1);
    console.log(toy2); //saldrá error porque let y const fueron declarados dentro de if y por ende su bloque sería todo lo que esté fuera del if. Esto sucede con la variable tipo const
    console.log(toy3);
}
juguete();