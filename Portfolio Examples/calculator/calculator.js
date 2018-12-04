const doMath = (leftOperand,symbol,rightOperand) => {
    if (symbol === $("#plus").text()){
        return rightOperand + leftOperand;
    }else if (symbol === $("#minus").text()){
        return rightOperand - leftOperand;
    }else if (symbol === $("#multiply").text()){
        return rightOperand * leftOperand;
    }else if (symbol === $("#divide").text()){
        return rightOperand / leftOperand;
    }
};

let leftOrRight = "left";
let numberString = "";
let leftNumberString = "";
let symbolString = "";

$("#one").click(() => {
    if (leftOrRight === "left"){
        numberString = numberString + "1";
        $("#leftOperand").val(numberString);
    }else {
        leftNumberString = leftNumberString + "1";
        $("#rightOperand").val(leftNumberString);
    }
});

$("#two").click(() => {
    if (leftOrRight === "left"){
        numberString = numberString + "2";
        $("#leftOperand").val(numberString);
    }else {
        leftNumberString = leftNumberString + "2";
        $("#rightOperand").val(leftNumberString);
    }
});

$("#three").click(() => {
    if (leftOrRight === "left"){
        numberString = numberString + "3";
        $("#leftOperand").val(numberString);
    }else {
        leftNumberString = leftNumberString + "3";
        $("#rightOperand").val(leftNumberString);
    }
});

$("#four").click(() => {
    if (leftOrRight === "left"){
        numberString = numberString + "4";
        $("#leftOperand").val(numberString);
    }else {
        leftNumberString = leftNumberString + "4";
        $("#rightOperand").val(leftNumberString);
    }
});

$("#five").click(() => {
    if (leftOrRight === "left"){
        numberString = numberString + "5";
        $("#leftOperand").val(numberString);
    }else {
        leftNumberString = leftNumberString + "5";
        $("#rightOperand").val(leftNumberString);
    }
});

$("#six").click(() => {
    if (leftOrRight === "left"){
        numberString = numberString + "6";
        $("#leftOperand").val(numberString);
    }else {
        leftNumberString = leftNumberString + "6";
        $("#rightOperand").val(leftNumberString);
    }
});

$("#seven").click(() => {
    if (leftOrRight === "left"){
        numberString = numberString + "7";
        $("#leftOperand").val(numberString);
    }else {
        leftNumberString = leftNumberString + "7";
        $("#rightOperand").val(leftNumberString);
    }
});

$("#eight").click(() => {
    if (leftOrRight === "left"){
        numberString = numberString + "8";
        $("#leftOperand").val(numberString);
    }else {
        leftNumberString = leftNumberString + "8";
        $("#rightOperand").val(leftNumberString);
    }
});

$("#nine").click(() => {
    if (leftOrRight === "left"){
        numberString = numberString + "9";
        $("#leftOperand").val(numberString);
    }else {
        leftNumberString = leftNumberString + "9";
        $("#rightOperand").val(leftNumberString);
    }
});

$("#zero").click(() => {
    if (leftOrRight === "left"){
        numberString = numberString + "0";
        $("#leftOperand").val(numberString);
    }else {
        leftNumberString = leftNumberString + "0";
        $("#rightOperand").val(leftNumberString);
    }
});

$("#decimal").click(() => {
    if (leftOrRight === "left"){
        if (numberString.indexOf('.') === -1) {
            numberString = numberString + ".";
            $("#leftOperand").val(numberString);
        }
    }else {
        if (leftNumberString.indexOf('.') === -1) {
            leftNumberString = leftNumberString + ".";
            $("#rightOperand").val(leftNumberString);
        }
    }
});

$("#percentage").click(() => {
    if (leftOrRight === "left"){
        if (numberString.indexOf('.') === -1) {
            numberString = "." + numberString;
            $("#leftOperand").val(numberString);
        }
    }else {
        if (numberString.indexOf('.') === -1) {
            leftNumberString = leftNumberString + ".";
            $("#rightOperand").val(leftNumberString);
        }
    }
    console.log(numberString);
});

$("#negative").click(() => {
    if (leftOrRight === "left"){
        numberString = "-" + numberString;
        $("#leftOperand").val(-Math.abs(numberString));
    }else {
        numberString = "-" + numberString;
        $("#rightOperand").val(leftNumberString);
    }
});


$("#plus").click(() => {
    symbolString = "";
    symbolString = symbolString + "+";
    $("#operator").val(symbolString);
});

$("#minus").click(() => {
    symbolString = "";
    symbolString = symbolString + "-";
    $("#operator").val(symbolString);
});

$("#multiply").click(() => {
    symbolString = "";
    symbolString = symbolString + "*";
    $("#operator").val(symbolString);
});

$("#divide").click(() => {
    symbolString = "";
    symbolString = symbolString + "/";
    $("#operator").val(symbolString);
});

$("#squareRoot").click(() => {
    if (leftOrRight === "left"){
        let number = parseFloat(numberString);
        let numberToSquareRoot = Math.sqrt(number);
        $("#leftOperand").val(numberToSquareRoot);
        numberString = numberToSquareRoot.toString();
    }else {
        let number = parseFloat(leftNumberString);
        let numberToSquareRoot = Math.sqrt(number);
        $("#rightOperand").val(numberToSquareRoot);
        leftNumberString = numberToSquareRoot.toString();
    }
});


$("#equal").click(() => {
    if (numberString === ""){
        numberString = "0" + numberString;
    }
    if (leftNumberString === ""){
        leftNumberString = "0" + numberString;
    }
   let number = parseFloat(numberString);
    let leftNumber = parseFloat(leftNumberString);
    let compliedNumber = doMath(leftNumber,symbolString,number);
    $("#leftOperand").val(compliedNumber);
    numberString = compliedNumber.toString();
    $("#rightOperand").val('');
    leftNumberString = "";
});

$("#clear").click(() => {
   numberString = '';
   leftNumberString = '';
   leftOrRight = "left";
    $("#leftOperand").val("");
    $("#rightOperand").val("");
    $("#operator").val("");
});

$(".symbol").click(() => {
    leftOrRight = "right";
});



