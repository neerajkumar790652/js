const pi=3.14;
var cylinderFunction = () => {
    var rad=document.getElementById('r1').value;
    var height=document.getElementById('h1').value;
    var result=document.getElementById('r2');
    var vol=pi*rad*rad*height;
    result.value="volume is" +vol;

}


var powerFunction=()=>{
    let a=document.getElementById('c').value;
    let b=document.getElementById('v').value;
    let c=document.getElementById('p');
    var result=a*b;
    c.value="power is"+result;

}