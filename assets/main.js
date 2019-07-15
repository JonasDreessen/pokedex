const searchPokemon = document.getElementById("searchPokemon");
var searchCounter = 0;

function pokedex() {
    searchPokemon.addEventListener('click', async function () {
        searchCounter++;
        let input = document.querySelector('.pokemon-search').value;
        let api = `https://pokeapi.co/api/v2/pokemon/${input}/`;
        let response = await axios.get(api);

        displayPokemon(response);
    })
}
pokedex();

function displayPokemon(response) {


    // declare html elements 
    let cardTitle = document.querySelector(".card-title");
    let cardInformation = document.querySelector(".card-information");
    let cardPic = document.querySelector(".card-picture");
    // get information out of api
    let pokeName = response.data.name;
    let pokeWeight = response.data.weight;

    // append api info to DOM
    cardTitle.innerHTML = pokeName;
    cardInformation.innerHTML = `Weight: ${pokeWeight}`;

    // activate function to create Image
    createPokeImage(response);
}

function createPokeImage(response) {

    // declare html element
    let cardPic = document.querySelector(".card-picture");
    // get info out of api
    let pokePicURL = response.data.sprites.front_default;
    // create image 
    if (searchCounter === 1) {

        let createPokePic = document.createElement("img");
        createPokePic.src = pokePicURL;
        createPokePic.className = 'pokemon-picture'
        cardPic.appendChild(createPokePic);
    } else if (searchCounter > 1) {

        let pokePicClass = document.querySelector('.pokemon-picture');
        cardPic.removeChild(pokePicClass);
        let createPokePic = document.createElement("img");
        createPokePic.src = pokePicURL;
        createPokePic.className = 'pokemon-picture';
        cardPic.appendChild(createPokePic);

    }



}