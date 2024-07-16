let result = document.getElementById("result");
var full = document.getElementById("X");
let Door = document.getElementById("Y");
result.addEventListener("click",validateForm);
function validateForm(){
    let ful = full.value;
    let Doorz = Door.value;
if(ful==""||ful==null||Doorz==""||null){    

    return false;
}else{
    results()
}
}
function results() {
    let ful = full.value;
    let Doorz = Door.value;
    let minus = Doorz - 1;
    let answer = minus * 3.2;
    let result = ful - answer;
    var total = result / Doorz;
    var grandresult = document.getElementById("ans");

    let FR = truncator(total, 4);

    grandresult.innerHTML = FR + "cm";
    

}


function truncator(numToTruncate, intDecimalPlaces) {
    var numPower = Math.round(100, intDecimalPlaces); // "numPowerConverter" might be better
    return ~~(numToTruncate * numPower) / numPower;
}


