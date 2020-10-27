console.log("Script funcionando!");

var isStarted = false;

function move(direcao, px) {
    if (direcao == "UP") {
        if((window.getComputedStyle(document.querySelector(".square")).top).replace("px", "   ") == 0) {
            document.querySelector(".square").style.top = "400px";
        } else {
            var atual = (window.getComputedStyle(document.querySelector(".square")).top).replace("px", "   ");
            atual = parseInt(atual, 10) - px;
            document.querySelector(".square").style.top = atual.toString() + "px";
        }  
    }

    if (direcao == "LEFT") {
        while(true) {
            if (game().event.keyCode == 100) {
                break;
            }
            if((window.getComputedStyle(document.querySelector(".square")).left).replace("px", "   ") == 0) {
                document.querySelector(".square").style.left = "800px";
            } else {
                var atual = (window.getComputedStyle(document.querySelector(".square")).left).replace("px", "   ");
                atual = parseInt(atual, 10) - px;
                document.querySelector(".square").style.left = atual.toString() + "px";
            }
        }
        
    }

    if (direcao == "DOWN") {
        if((window.getComputedStyle(document.querySelector(".square")).top).replace("px", "   ") == 400) {
            document.querySelector(".square").style.top = "0px";
        } else {
            var atual = (window.getComputedStyle(document.querySelector(".square")).top).replace("px", "   ");
            atual = parseInt(atual, 10) + px;
            document.querySelector(".square").style.top = atual.toString() + "px";
        }
    }

    if (direcao == "RIGHT") {
        if((window.getComputedStyle(document.querySelector(".square")).left).replace("px", "   ") == 800) {
            document.querySelector(".square").style.left = "0";
        } else {
            var atual = (window.getComputedStyle(document.querySelector(".square")).left).replace("px", "   ");
            atual = parseInt(atual, 10) + px;
            document.querySelector(".square").style.left = atual.toString() + "px";
        }
    }
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
    if (isStarted) {
        switch(event.keyCode) { // MOVIMENTO
            case 119: // w
                move("UP", 20);
                break;

            case 87: // W
                move("UP", 20);
                break; 

            case 97: // a
                move("LEFT", 20);
                break;

            case 65: // A
                move("LEFT", 20);
                break;

            case 115: // s
                move("DOWN", 20);
                break;

            case 83: // S
                move("DOWN", 20);
                break;

            case 100: // d
                move("RIGHT", 20);
                break;

            case 68: // D
                move("RIGHT", 20);
                break;
        }
    }
}

console.log("Fim do script!")