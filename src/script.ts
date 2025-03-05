const canvas = document.getElementById('jogo2D') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
const gravidade = 1

document.addEventListener('keydown', (e) => {
    if(e.code == 'Space' && personagem.jump == false) {
        console.log("Press the Space Bar")
        personagem.speedy = 15
        personagem.jump = true
    }
})

const personagem = {
    x: 100,
    y:canvas.height - 50,
    height: 50,
    width: 50,
    jump: false,
    speedy: 0,
    speedx: 10
}

function desenharPersonagem(){
    ctx.fillStyle = 'blue'
    ctx.fillRect(personagem.x,personagem.y,personagem.height,personagem.width);
}

function pularPersonagem() {
    if (!personagem.jump) return;

    personagem.y -= personagem.speedy;
    personagem.speedy -= gravidade
    if (personagem.y < canvas.height-50) return;

    personagem.speedy = 0
    personagem.jump = false
    personagem.y = canvas.height-50
}

function atualizarPersonagem(){
    pularPersonagem();
}

function loop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);{

    }

    desenharPersonagem();
    atualizarPersonagem()
    requestAnimationFrame(loop)
}

loop()