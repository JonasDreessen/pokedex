const searchPokemon = document.getElementById("searchPokemon");

function pokedex() {
    searchPokemon.addEventListener('click', async function () {
        let input = document.querySelector('.pokemon-search').value;
        let api = `https://pokeapi.co/api/v2/pokemon/${input}/`;
        let response = await axios.get(api);
        displayPokemon(response);
    })
}
pokedex();

function displayPokemon(response){
    // declare html elements 
    let cardTitle = document.querySelector(".card-title");
    let cardInformation = document.querySelector(".card-information");
    // get information out of api
    let pokeName = response.data.name;
    let pokeWeight = response.data.weight;
    
    // append api info to DOM
    cardTitle.innerHTML= pokeName;
    cardInformation.innerHTML = `Weight: ${pokeWeight}`;

    createPokeImage(response);
}

function createPokeImage(response){
    // declare html element
    let cardPic = document.querySelector(".card-picture");
    // get info out of api
    let pokePicURL = response.data.sprites.front_default;
    // create image 
    let createPokePic = document.createElement("img");
    createPokePic.src = pokePicURL;
    // append api to DOM
    cardPic.appendChild(createPokePic);

}