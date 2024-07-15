let result = document.getElementById("result");
result.addEventListener("click", results);
function results() {
    let full = document.getElementById("X").value;
    const Door = document.getElementById("Y").value;
    let minus = Door - 1;
    let answer = minus * 3.2;
    let result=full-answer;
    const total=result/Door

    let grandresult=document.getElementById("ans");
    FR= (truncator(total,3));
grandresult.innerHTML=FR;
}

function truncator(numToTruncate, intDecimalPlaces) {    
var numPower = Math.pow(10, intDecimalPlaces); // "numPowerConverter" might be better
return ~~(numToTruncate * numPower)/numPower;
}