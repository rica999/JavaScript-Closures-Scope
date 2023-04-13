//ALCANCIA

//Sin closure
function moneyBox1(){
    let saveCoins =0;
    saveCoins += coins;
    console.log( `MoneyBox: $${saveCoins}`)
}
myMoneyBox(5); //ahorra 5
myMoneyBox(5); //ahorra 5 (se pierde la información al declararse nuevamente la variable saveCoins con valor 0)

//Closure
function moneyBox2(){
    let saveCoins =0;
    function countCoins(coins){
        saveCoins +=coins;
        console.log( `MoneyBox: $${saveCoins}`)
    }
    return countCoins;
    }

const myMoneyBox = moneyBox2();
myMoneyBox(5); //ahorra 5
myMoneyBox(5); //ahorra 10
myMoneyBox(15); //ahorra 25 (No se pierde el valor en la variable saveCoins al ser usada en el contexto de la función interna, de esta anera ya no es necesario tener variables globales para ciertos casos como este)

//CARRITO DE COMPRAS
function shoppingCart(){
    let cart = [];
    function addItems(item){
        cart.push(item);
        console.log(cart);
    }
    return addItems;
}

const amazon = shoppingCart();
amazon("Mouse");
amazon("Keyboard");
amazon(`Display 24"`); //va almacenando en el array cada elemento