
function gras(){
    document.getElementById("tt").style.fontWeight = "bold";

}
function italique(){
    document.getElementById("tt").style.fontStyle = "italic";

}
function underline(){
    document.getElementById("tt").style.textDecoration = "underline";

}
function fontf() {
    var x = document.getElementById("st").value;
    
    document.getElementById("tt").style.fontFamily = x;

}
function fontsize() {
    var x = document.getElementById("sr").value;
    document.getElementById("tt").style.fontSize = x;

}
var name=prompt('chnoua ismk')
alert('marhbé bik'+name)
