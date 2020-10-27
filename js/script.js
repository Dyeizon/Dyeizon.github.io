console.log("Script funcionando!");

var isStarted = false;

function move(direcao, px) {
    if (direcao == "UP") {
        var atual = (window.getComputedStyle(document.querySelector(".square")).top).replace("px", "   ");
        atual = parseInt(atual, 10) - px;
        document.querySelector(".square").style.top = atual.toString() + "px";
    }

    if (direcao == "LEFT") {
        var atual = (window.getComputedStyle(document.querySelector(".square")).left).replace("px", "   ");
        atual = parseInt(atual, 10) - px;
        document.querySelector(".square").style.left = atual.toString() + "px";
    }

    if (direcao == "DOWN") {
        var atual = (window.getComputedStyle(document.querySelector(".square")).top).replace("px", "   ");
        atual = parseInt(atual, 10) + px;
        document.querySelector(".square").style.top = atual.toString() + "px";
    }

    if (direcao == "RIGHT") {
        var atual = (window.getComputedStyle(document.querySelector(".square")).left).replace("px", "   ");
        atual = parseInt(atual, 10) + px;
        document.querySelector(".square").style.left = atual.toString() + "px";
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
    if (true) {
        switch(event.keyCode) {
            case 119 || 87:
                move("UP", 20);
                break;
            case 97 || 65:
                move("LEFT", 20);
                break;
            case 115 || 83:
                move("DOWN", 20);
                break;
            case 100 || 68:
                move("RIGHT", 20);
                break;

        }


    } else {
        console.log("Algo de errado aconteceu!");
    }
}

console.log("Fim do script!")