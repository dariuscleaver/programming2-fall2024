//let age = 20;
//if (age >= 18) {
//    alert("You are an adult!");
//} else if (age >= 13) {
//    alert("You are a teenager :(");
//} else {
//    alert("You not are an adult.");
//}
//

//let score = 87;
//if (score >= 90) {
//    alert("You got an A");
//} else if (score >= 80) {
//    alert("You got a B");
//} else if (score >= 70) {
//    alert("You got a C");
//} else {
//    alert("You need to study more");
//}

function generate() {
    let U = document.getElementById("Uinput").value;
    let P = document.getElementById("Pinput").value;
    let message = document.getElementById("message");
    if (U == "teo" && P == "password") {
        message.innerText = "Logged In";
        message.style.color = "green";
    } else if (U != "teo" && P != "password") {
        message.innerText = "both incorrect";
        message.style.color = "red";
    } else if (U == "teo" && P != "password") {
        message.innerText = "password wrong";
        message.style.color = "red";
    } else if (U != "teo" && P == "password") {
        message.innerText = "username wrong";
        message.style.color = "red";
    }
}
