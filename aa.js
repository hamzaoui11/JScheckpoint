
function gras(){
    var element =document.getElementById("txt");
        element.classList.toggle("bold")
}
function italique(){
    var element=document.getElementById("txt");
    element.classList.toggle("italic")
}
function underline(){
    var element=document.getElementById("txt");
    element.classList.toggle("underlined")
}
function fontf() {
    var x = document.getElementById("st").value;
    document.getElementById("txt").style.fontFamily = x;
}
function fontsize() {
    var x = document.getElementById("sr").value;
    document.getElementById("txt").style.fontSize = x;
}

