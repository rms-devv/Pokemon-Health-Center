"use strict";
const progressbar1 = document.querySelector("#progressbar1");
const cardsElt = document.querySelector(".cards");
class Pokemon {
    constructor(firstname, level, pv, image) {
        this.firstname = firstname;
        this.level = level;
        this.pv = pv;
        this.image = image;
    }
}
document.addEventListener('click', (e) => {
    progressbar1.textContent = "100";
});
function createCard(pokemon) {
    const newCard = document.createElement("div");
    newCard.classList.add("machine");
    cardsElt === null || cardsElt === void 0 ? void 0 : cardsElt.appendChild(newCard);
    const image = document.createElement("img");
    newCard.appendChild(image);
    const name = document.createElement("h2");
    newCard.appendChild(name);
    const level = document.createElement("h3");
    newCard.appendChild(level);
    const progress = document.createElement("progress");
    progress.classList.add("progressbar");
    newCard.appendChild(progress);
    const button = document.createElement("button");
    button.classList.add("button-heal");
    newCard.appendChild(button);
    image.src = (`${pokemon.image}`);
    valueElement(name, pokemon.firstname);
    valueElement(level, `lvl : ${pokemon.level}`);
    valueElement(button, "HEAL NOW");
    progress.value = pokemon.pv;
    progress.max = 100;
}
function valueElement(nameClass, value) {
    nameClass.innerHTML = value.toString();
}
const pickachu = new Pokemon("Pikachu", 100, 50, "../image/png-clipart-pokemon-pokemon-pikachu.png");
createCard(pickachu);
const bulbizarre = new Pokemon("Bulbizarre", 88, 68, "../image/bulbizzare.jpeg");
createCard(bulbizarre);
const charizard = new Pokemon("charizard", 88, 68, "../image/Mewtwo.jpeg");
createCard(charizard);
//# sourceMappingURL=app.js.map