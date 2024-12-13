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
        { word: "la ley", match: "the law" }
    ];
    let cards = document.getElementsByClassName("item");
    console.log(cards);
    
    function shuffleArray(array){
        for (let i=array.length -1; i>0; i--){
            const j = Math.floor(Math.random() * (i+1));
            
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    function shuffleAssign(){
        let shufflePairs = shuffleArray(pairs);
        console.log(shufflePairs);
    }
    
    let cardPairs = [];
    
    for(let i=0; i<cards.length/2; i++){
        cardPairs.push(shuffledPairs[i].word);
        cardPairs.push(shuffledPairs[i].match);
    }
    console.log(cardPairs);
    
    cardPairs = shuffleArray(cardPairs);
    
    shuffleAssign();
});
