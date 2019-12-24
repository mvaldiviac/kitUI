//var style1 = URL;

function swapStylesheet(sheet) {
    document.getElementById('swap').setAttribute('href', sheet)
}

// function initate() {
//     var style1 = document.getElementById("stylesheet1");
//     var style2 = document.getElementById("stylesheet2");

//     style1.onclick = swapStyleSheet("default.css");
//     style2.onclick = swapStyleSheet("dark.css");
// }

var clic = 1;


function divLogin(){ 
    if(clic==1){
    document.getElementById("caja").style.height = "100px";
    clic = clic + 1;
    } else{
        document.getElementById("caja").style.height = "0px";      
     clic = 1;
    }   
 }
