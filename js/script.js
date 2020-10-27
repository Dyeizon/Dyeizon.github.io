console.log("Script funcionando!");

var isStarted = false;

function teste() {
    console.log("aaaa");
}

function verificador() {
    if (isStarted == false) {
        document.querySelector(".game").style.transition = "200ms";
        document.querySelector(".game").style.opacity = "1";
        document.querySelector(".telaInicial").style.display = "none";
        isStarted = true;
    }
    return isStarted;
}

function game(event) {
    if (true) {
        switch(event.keyCode) {
            case 119:
                break;
            case 97:
                var atual = (window.getComputedStyle(document.querySelector(".square")).left).replace("px", "   ");
                atual = parseInt(atual, 10) - 20;
                document.querySelector(".square").style.left = atual.toString() + "px";
                break;
            case 115:
                var atual = (window.getComputedStyle(document.querySelector(".square")).top).replace("px", "   ");
                atual = parseInt(atual, 10) + 20;
                document.querySelector(".square").style.top = atual.toString() + "px";
                break;
            case 100:
                var atual = (window.getComputedStyle(document.querySelector(".square")).left).replace("px", "   ");
                atual = parseInt(atual, 10) + 20;
                document.querySelector(".square").style.left = atual.toString() + "px";
                break;

        }


    } else {
        console.log("Algo de errado aconteceu!");
    }

}