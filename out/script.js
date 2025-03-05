"use strict";
const canvas = document.getElementById('jogo2D');
const ctx = canvas.getContext('2d');
document.addEventListener('keydown', (e) => {
    if (e.code == 'Space') {
        console.log("Press the Space Bar");
        personagem.speedy = 15;
        personagem.jump = true;
    }
});
const personagem = {
    x: 100,
    y: canvas.height - 50,
    height: 50,
    width: 50,
    jump: false,
    speedy: 0,
    speedx: 10
};
function desenharPersonagem() {
    ctx.fillStyle = 'white';
    ctx.fillRect(personagem.x, personagem.y, personagem.height, personagem.width);
}
function AtualizarPersonagem() {
    if (personagem.jump == true) {
        personagem.y += personagem.speedy;
    }
}
function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    desenharPersonagem();
    AtualizarPersonagem();
    requestAnimationFrame(loop);
}
loop();
//# sourceMappingURL=script.js.map