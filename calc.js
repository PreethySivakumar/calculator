function add(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a)+Number(b);
    document.getElementById("output").innerText=`Sum of number is ${out}`
}

function sub(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a)-Number(b);
    document.getElementById("output").innerText=`Subtraction of number is ${out}`
}
function Mul(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a)*Number(b);
    document.getElementById("output").innerText=`Multiply of number is ${out}`
}
function Divide(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a)/Number(b);
    document.getElementById("output").innerText=`Division of number is ${out}`
}
function Rem(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a)%Number(b);
    document.getElementById("output").innerText=`Remainder of number is ${out}`
}