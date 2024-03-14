// mi salvo il menu dentro a una variabile
let menu = document.getElementById("fasciaMenu");
console.log(menu); //controllo di aver preso il pezzo giusto

let a = 0;
//creo la funzione per fare comparire il menu
function appariMenu() {
    if(a == 0) {
        // comando che fa ricomparire il menu cambiano il valore di display
        menu.style.display = "block";
        a = 1; //cambio il valore di a per cambiare alternativa nella funzione
    }
    else if(a == 1) {
        // comando che fa risparire il menu cambiano display
        menu.style.display = "none";
        a = 0;
    }
}

