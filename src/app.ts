const progressbar1 = document.querySelector("#progressbar1")!;
const cardsElt = document.querySelector(".cards")

class Pokemon {

    constructor(
      readonly firstname: string,
      readonly level: number,
      readonly pv: number,
      readonly image : string 
    ) {}
  
   
  }




document.addEventListener('click', (e) => {
   
  progressbar1.textContent = "100";
    
})

function createCard(pokemon : Pokemon) {
  const newCard = document.createElement("div");
  newCard.classList.add("machine");
  cardsElt?.appendChild(newCard)
  const image = document.createElement("img");
  newCard.appendChild(image);
  const name = document.createElement("h2");
  newCard.appendChild(name)
  const level = document.createElement("h3")
  newCard.appendChild(level)
  const progress = document.createElement("progress");
  progress.classList.add("progressbar");
  newCard.appendChild(progress);
  const button = document.createElement("button");
  button.classList.add("button-heal");
  newCard.appendChild(button);

  image.src = (`${pokemon.image}`)
  valueElement(name, pokemon.firstname)
  valueElement(level, `lvl : ${pokemon.level}`)
  valueElement(button, "HEAL NOW")
  progress.value = pokemon.pv;
  progress.max = 100
}



function valueElement(nameClass : HTMLDivElement | HTMLButtonElement, value : string | number) {
  nameClass.innerHTML = value.toString();
}


const pickachu = new Pokemon("Pikachu", 100, 50, "../image/png-clipart-pokemon-pokemon-pikachu.png" )
createCard(pickachu);
const bulbizarre = new Pokemon("Bulbizarre", 88, 68,"../image/bulbizzare.jpeg")
createCard(bulbizarre)
const charizard = new Pokemon("charizard", 88, 68,"../image/Mewtwo.jpeg")
createCard(charizard)

