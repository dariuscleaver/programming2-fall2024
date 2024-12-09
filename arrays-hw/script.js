let animals = ["cat", "dog", "giraffe", "elephant", "orca"];
let capitals = [];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
    capitals.push(animals[i].toUpperCase);
}
capitals.pop();
capitals.pop();

let scores = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69];
for (let i = 0; i < scores.length; i++) {
    scores[i]=scores[i]+5;
    if (scores[i]<50) {
        scores.splice(i, 1, "Retake");
    }
}