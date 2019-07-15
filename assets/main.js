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
    let cardId = document.querySelector(".card-id");
    let cardMoves = document.querySelector(".card-moves");

    // get information out of api
    let pokeName = response.data.name;
    let pokeId = "ID " + response.data.id;

    let i;
    let pokeMoves = "";
    for (i = 0; i < 4; i++) {
        pokeMoves += i + 1 +'. ' + response.data.moves[i].move.name + "<br>";
    }
    console.log(i);
    // append api info to DOM
    cardTitle.innerHTML = pokeName;
    cardId.innerHTML = pokeId;
    cardMoves.innerHTML = `I have some smooth moves like: <br> ${pokeMoves} what's your power?`;

    createPokeImage(response);
}

function createPokeImage(response) {

    // declare html element
    let cardPic = document.querySelector(".card-picture");
    // get info out of api
    let pokePicURL = response.data.sprites.front_default;
    var createPokePic = document.createElement("img");

    if (searchCounter === 1) {
        // give scr to image
        createPokePic.src = pokePicURL;
        // give className to img 
        createPokePic.className = 'pokemon-picture';
        // place img to dom
        cardPic.appendChild(createPokePic);

    } else if (searchCounter > 1) {
        let pokePicClass = document.querySelector('.pokemon-picture');
        // delete previous searched img
        cardPic.removeChild(pokePicClass);
        // add newly searched img url
        createPokePic.src = pokePicURL;
        createPokePic.className = 'pokemon-picture';
        // place img to dom
        cardPic.appendChild(createPokePic);

    }
}