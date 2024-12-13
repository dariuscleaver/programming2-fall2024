let person = {
    name: "Terry",
    age: 23,
    favoriteColor: "green",
    height: "6'8\"",
    satScore: 400,
    job: "Basketball player",
    biggestFear: "inflated basketballs",
    favoriteNumber: 3
};

let person2 = {
    name: "Jerry",
    age: 58,
    favoriteColor: "blue",
    height: "4'6\"",
    satScore: 1600,
    job: "CP teacher",
    biggestFear: "spiders",
    favoriteNumber: 4
};
function story(){
    let n1 = person.name;
    document.getElementById("n1").innerText = n1;
    let n2 = person2.name;
    document.getElementById("n2").innerText = n2;
    let a1 = person.age;
    document.getElementById("a1").innerText = a1;
    let a2 = person2.age;
    document.getElementById("a2").innerText = a2;
    let b1 = person.biggestFear;
    document.getElementById("b1").innerText = b1;
    let b2 = person2.biggestFear;
    document.getElementById("b2").innerText = b2;
}

