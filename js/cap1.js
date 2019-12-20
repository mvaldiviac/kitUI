//Create variables
var greeting = 'Howdy ';
var name = 'Molly';
var message = ', please check your order:';

//Concatenation by vars
var welcome = greeting + name + message;

//Crear variables para el detalle
var sign = 'Mountage House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//Obtener saludo
var el = document.getElementById('greeting');
el.textContent = welcome;

//User
var elSing = document.getElementById('userSign');
elSing.textContent = sign;

//
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

//
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + ' ' + subTotal;

//
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + ' ' + shipping;

//
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + ' ' + grandTotal;