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
    let cardPic = document.querySelector(".card-picture");
    let cardInformation = document.querySelector(".card-information");
    // get information out of api
    let pokeName = response.data.name;
    let pokePic = response.data.sprites.front_default;
    console.log(pokePic);
    console.log(response);
}