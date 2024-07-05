function carregar() {
var msg = window.document.getElementById('msg');
var img = window.document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();
//var hora = 19
msg.innerHTML = `Agora são ${hora} horas.`;
if (hora >= 6 && hora < 12) {
    // BOM DIA!
    img.src = 'imagens/dia(edit).png'
    document.body.style.background = '#9aa224'

} else if (hora >= 12 && hora < 18) {
    // BOA TARDE!
    img.src = 'imagens/tarde(edit).png'
    document.body.style.background = '#ae6967'
} else if (hora >= 18 && hora < 24) {
    // BOA NOITE!
    img.src = 'imagens/noite(edit).png'
     document.body.style.background = '#2f4348'
} else {
    // BOA MADRUGADA
    img.src = 'imagens/madrugada(edit).png'
    document.body.style.background = '#030f0f'
}
}
