const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");
let play = false;
let newWords = "";
let randWords = "";
let sWords = ["python", "java", "php", "c++", "javascript","mongodb","dougntnet","vennilajavascript","c#","react","sql",
    "angular", "nodejs", "html"];
const createNewWords = () => {

    let ranNum = Math.floor(Math.random() * sWords.length);
    let newTempSwords = sWords[ranNum];
    //console.log(newTempSwords); 
    return newTempSwords;

}
const scrambleWords = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {

        let temp = arr[i];
        //console.log(temp);
       let j = Math.floor(Math.random() * (i + 1));
       // console.log(i);
       // console.log(j);

       arr[i] = arr[j];
       arr[j] = temp;


    }
    return arr;


}
btn.addEventListener("click", function ()
{

    if (!play) {

        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle("hidden");
        newWords = createNewWords();

        randWords = scrambleWords(newWords.split("")).join("");
        msg.innerHTML = ` gess the word :${randWords}`;
    }
    else {
        let tempWord = guess.value;
        if (tempWord === newWords) {

            // console.log("correct");
            play = false;
            msg.innerHTML = `it's correct it is ${newWords}`;
            btn.innerHTML = "start again";
            guess.classList.toggle("hidden");
            guess.value = "";

        }
        else {

            console.log("in correct");
            msg.innerHTML = `sorry try again ${randWords}`;
           
        }








    }


}
    )