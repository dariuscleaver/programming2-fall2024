function generate() {
    const a1 = document.getElementById("a1input").value;
    const n1 = document.getElementById("n1input").value;
    const a2 = document.getElementById("a2input").value;
    const n2 = document.getElementById("n2input").value;
    const a3 = document.getElementById("a3input").value;
    const n3 = document.getElementById("n3input").value;
    const a4 = document.getElementById("a4input").value;
    const n4 = document.getElementById("n4input").value;
    const v1 = document.getElementById("v1input").value;
    const v2 = document.getElementById("v2input").value;
    const n5 = document.getElementById("n5input").value;
    const n6 = document.getElementById("n6input").value;
    document.getElementById("a1").innerText = a1;
    document.getElementById("n1").innerText = n1;
    document.getElementById("a2").innerText = a2;
    document.getElementById("n2").innerText = n2;
    document.getElementById("a3").innerText = a3;
    document.getElementById("n3").innerText = n3;
    document.getElementById("a4").innerText = a4;
    document.getElementById("n4").innerText = n4;
    document.getElementById("v1").innerText = v1;
    document.getElementById("v2").innerText = v2;
    document.getElementById("n5").innerText = n5;
    document.getElementById("n6").innerText = n6;

    document.getElementById("madlib").style.display = "block";
    document.getElementById("madlib").style.color = "red";
}
