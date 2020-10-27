export class Player {
    move(direcao, px) {
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
}