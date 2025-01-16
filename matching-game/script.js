//setup
let correct = 0;

document.addEventListener("DOMContentLoaded", () => {
    const pairs = [
        { word: "el género", match: "the gender" },
        { word: "la sexualidad", match: "the sexuality" },
        { word: "el comportamiento", match: "the behavior" },
        { word: "el papel", match: "the role" },
        { word: "la identidad", match: "the identity" },
        { word: "la feminidad", match: "the femininity" },
        { word: "la masculinidad", match: "the masculinity" },
        { word: "el estereotipo", match: "the stereotype" },
        { word: "la doble moral", match: "the double standard" },
        { word: "la ley", match: "the law" },
        { word: "la expectativa", match: "the expectation" },
        { word: "la norma", match: "the norm" },
        { word: "la (des)igualdad", match: "the (in)equality" },
        { word: "el espectro", match: "the spectrum" },
        { word: "el pronombre", match: "the pronoun" },
        { word: "el sexo biológico", match: "the biological sex" }
    ];
    let cards = document.getElementsByClassName("item");
    console.log(cards);
    //shuffle
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function shuffleAssign() {
        let shufflePairs = shuffleArray(pairs);
        console.log(shufflePairs);
        let cardPairs = [];

        for (let i = 0; i < cards.length / 2; i++) {
            cardPairs.push(shufflePairs[i].word);
            cardPairs.push(shufflePairs[i].match);
        }
        console.log(cardPairs);

        cardPairs = shuffleArray(cardPairs);

        for (let i = 0; i < cardPairs.length; i++) {
            cards[i].innerText = cardPairs[i];
            cards[i].onclick = isClicked;
        }
    }
    //clicked
    function isClicked(e) {
        let cardClicked = e.srcElement;
        cardClicked.classList.add("clicked");
        cardClicked.classList.add("solved");
        let numClicked = document.getElementsByClassName("clicked");
        let numSolved = document.getElementsByClassName("solved");
        if (numClicked.length == 2) {
            if (isMatch(numClicked[0].innerText, numClicked[1].innerText)) {
                numClicked[0].style.backgroundColor = "green";
                numClicked[1].style.backgroundColor = "green";

                numClicked[0].disabled = true;
                numClicked[1].disabled = true;

                numClicked[0].classList.remove("clicked");
                numClicked[0].classList.remove("clicked");
                correct++;
                if (correct >= 10) {
                    setTimeout(function () {
                        let correct = 0;
                        shuffleAssign();
                        for (let i = 0; i < 20; i++) {
                            numSolved[0].style.backgroundColor = "";
                            numSolved[0].classList.remove("solved");
                        }
                    }, 500);
                }
            } else {
                numClicked[0].style.backgroundColor = "red";
                numClicked[1].style.backgroundColor = "red";
                setTimeout(function () {
                    numClicked[0].style.backgroundColor = "";
                    numClicked[1].style.backgroundColor = "";
                    numClicked[0].classList.remove("clicked");
                    numClicked[0].classList.remove("clicked");
                    numSolved[0].classList.remove("solved");
                    numSolved[0].classList.remove("solved");
                }, 500);
            }
        }
    }
    //match
    function isMatch(item1, item2) {
        console.log(item1);
        console.log(item2);
        for (let i = 0; i < Object.keys(pairs).length; i++) {
            if (item1 == pairs[i].word && item2 == pairs[i].match) {
                return true;
            }
            if (item2 == pairs[i].word && item1 == pairs[i].match) {
                return true;
            }
        }
        return false;
    }

    shuffleAssign();
    //start button
    const restartButton = document.getElementById("start");
    restartButton.addEventListener("click", () => {
        window.location.reload();
    });
});
