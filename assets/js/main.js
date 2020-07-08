function open01() {
    document.getElementById("panel01").classList.toggle("show")
}
function open02() {
    document.getElementById("panel02").classList.toggle("show")
    console.log(document.getElementById("panel02").classList)
}
function black() {
    console.log("test")
    // document.body.style.backgroundColor = "black";
    // document.body.style.color = "white";

document.body.classList.toggle('black')
}
function color() {
    document.body.classList.toggle('color')
}





    //document.getElementById("navHome").style.color = "#000"
    //document.getElementById("navHome").style.transform = "rotateY(180deg)"
    //document.getElementById("problem").style.transform = "rotateY(180deg)"
    //document.getElementById("problem").style.display = "inline-block"