let imgbox=document.querySelector(".imgbox");
let qrtext=document.getElementById("qrtext");
let btn=document.getElementById("btn");
let qrimage=document.getElementById("qrimage");
btn.addEventListener("click",qrgenerate);

function qrgenerate(){
    qrimage.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= "+qrtext.value;

}