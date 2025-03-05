"use strict";
const canvas = document.getElementById('jogo2D');
const ctx = canvas.getContext('2d');
function desenharPersonagem() {
    ctx.fillStyle = 'white';
    ctx.fillRect(100, 25, 50, 50);
}
function loop() {
    desenharPersonagem();
}
loop();
//# sourceMappingURL=script.js.map