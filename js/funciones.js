
function obternerAleatorio(){
    return Math.random();
}

console.log( obternerAleatorio() );


function esMayor05(){
    if( obternerAleatorio() > 0.5 ){
        return true;
    }else{
        return false;
    }
}

// console.log( esMayor05() );

if(esMayor05()){
    console.log("Es mayor a 0.5");
}else{
    console.log("Es menor a 0.5");
}