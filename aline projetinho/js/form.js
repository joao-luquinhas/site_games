function enviar(){
    let seleing = document.getElementById("imagem");
    let aleatorio = Math.floor(Math.random() * 10 + 1);
    seleing.src = "img/"+aleatorio+".png";
}