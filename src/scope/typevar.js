// Con var
var nombre; // declaración (undefined) ✅
nombre = "Andres"; // asignación ✅
nombre = "Valeria"; // reasignación ✅
console.log(nombre);
var nombre = "Oscar"; // redeclaración y reasignación ✅
console.log(nombre);
//var permite cambiar de valor a la variable si esta se reasigna o redeclara y reasigna.

// Con let
let nombre; // declaración (undefined) ✅
nombre = "Andres"; // asignación ✅
nombre = "Valeria"; // reasignación ✅
console.log(nombre);
let nombre = "Oscar"; // SyntaxError: Identifier 'nombre' has already been declared. ❌
//let permite cambiar de valor a la variable si esta se reasigna pero no permite redeclarar esa variable

// Con const
const nombre; // SyntaxError: Missing initializer in const declaration. ❌
const nombre = "Andres"; // declaración y asignación ✅
nombre = "Valeria"; // TypeError: Assignment to constant variable. ❌
const nombre = "Oscar"; // SyntaxError: Identifier 'nombre' has already been declared. ❌
//const se le debe ser asignado un valor cuando es declarado obligatoriamente y no permite tanto redeclarar como reasignar esa variable