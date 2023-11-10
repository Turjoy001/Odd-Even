function checkOddEven(){
    var number = document.getElementById("numberInput").value;

    if (!isNaN(number)){
     var result = number % 2 === 0 ? "Even" : "Odd";
        document.getElementById("result").innerHTML = "The number " + number + " is " + result + ".";
    } else{
        document.getElementById("result").innerHTML = "Please enter a valid number.";
    }
}