function generate() {
    const v1 = document.getElementById("birthseason").value;
    const v2 = document.getElementById("breakfast").value;
    const v3 = document.getElementById("age").value;

    if (v1 == "winter") {
        w1 = "Blue";
    } else if (v1 == "spring") {
        w1 = "Green";
    } else if (v1 == "summer") {
        w1 = "Purple";
    } else if (v1 == "fall") {
        w1 = "Orange";
    }

    if (v2 == "cereal") {
        w2 = "Kind";
    } else if (v2 == "pancakes") {
        w2 = "Tall";
    } else if (v2 == "waffles") {
        w2 = "Generous";
    } else if (v2 == "fall") {
        w2 = "Sympathetic";
    }

    if (v3 == "senior") {
        w3 = "Rocking Chair User";
    } else if (v3 == "adult") {
        w3 = "Old Person";
    } else if (v3 == "teen") {
        w3 = "Phone Addict";
    } else if (v3 == "kid") {
        w3 = "Pacifier User";
    }
    message.innerText = w1 + " " + w2 + " " + w3;
}
