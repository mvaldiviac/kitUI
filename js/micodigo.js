
function hacerClick(){
    document.querySelector ("#principal p:first-child").onclick=mostrarAlerta;
}
function mostrarAlerta(){
    alert('Hizo click!');
}
window.onload = hacerClick;