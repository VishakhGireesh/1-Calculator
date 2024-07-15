let result = document.getElementById("result");
result.addEventListener("click", results);
function results() {
    let full = document.getElementById("X").value;
    const Door = document.getElementById("Y").value;
    let minus = Door - 1;
    let answer = minus * 3.2;
    let result=full-answer;
    const total=result/Door
    if(result==true){
    var grandresult=document.getElementById("ans");
    }
    FR= (truncator(total,4));
    
grandresult.innerHTML=FR+"cm";
}

function truncator(numToTruncate, intDecimalPlaces) {    
var numPower = Math.round(100, intDecimalPlaces); // "numPowerConverter" might be better
return ~~(numToTruncate * numPower)/numPower;
}