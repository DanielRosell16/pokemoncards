
let fetchPromise = fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')

fetchPromise.then((response) => {
    return response.json()
}) .then((jasonData) => {
    jasonData.results.forEach(async (item) => {

        //here is the data
        // console.log(item)


        let response = await fetch(item.url);
        let individualPokemon = await response.json();

        let imgURL = getImageFileName(individualPokemon)

        // console.log(individualPokemon)
        

        const pokemonDiv = document.querySelector('#pokemonDiv');
        // console.log(pokemonDiv)

        let newPokemonFigure = createElement('figure') //<figure></figure>
        // newPokemonFigure.setAttribute('id', 'cards')

        let cardContent = `<figure id='cards'>
        <div class='card'>
          <div class='content'>
            <div class='front'>
              <img src='${imgURL}'>
            </div>
            <div class='back'>
              <p>Name: ${individualPokemon.name}</p>
              <p>Weight: ${individualPokemon.weight}</p>
              <p>Height: ${individualPokemon.height}</p>
            </div>
          </div>
        </div>
    </div>`

    newPokemonFigure.innerHTML = cardContent;

        console.log(newPokemonFigure)

        // let pokemonImg = createElement('img') //<img></img>

        // pokemonImg.setAttribute('src', individualPokemon.sprites.front_default)
        
        

        // // practice trail

        // let pokemonType = createElement('figcaption') //<img></img>

        // pokemonType.setAttribute('src', individualPokemon.species.url)

        // // console.log(pokemonType)


        // // flipping capability front

        // let figDiv = createElement('div');
        // figDiv.setAttribute('class', 'card');
            

        // let figDiv1 = createElement('div');
        // figDiv1.setAttribute('class', 'content');

        // let figDiv2 = createElement('div');
        // figDiv2.setAttribute('class', 'front');

        // let figImg = createElement('div')
        // figImg.setAttribute('src', individualPokemon.sprites.front_default)

        // console.log(figImg)
        // // let figDiv3 = createElement('img')
        // // figDiv3.setAttribute('src', individualPokemon.sprites.front_default)



        // // flipping capcabilty back


        // let figDiv4 = createElement('div');
        // figDiv4.setAttribute('class', 'back');

        // let figCaption = createElement('figcaption')

        // figCaption.innerHTML = item.name;
        // // console.log(item.name)

        // let figWeight = createElement('figcaption')

        // figWeight.innerHTML = individualPokemon.weight;

        // // console.log(figWeight);

        // let figHeight = createElement('figcaption')

        // figHeight.innerHTML = individualPokemon.height;

        // // console.log(figHeight);



        // // <figure id="cards">
        // // <div class="card">
        // //     <div class="content">
        // //       <div class="front">
        // //         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png' />
        // //       </div>
        // //       <div class="back">
        // //         Back!
        // //       </div>
        // //     </div>
        // //   </div> 
        // //     </div>


        // //append elements
        // appendElement(newPokemonFigure, pokemonImg)

        // // appendElement(newPokemonFigure, pokemonType)
        // appendElement(newPokemonFigure, figCaption)
        // appendElement(newPokemonFigure, figHeight);
        // appendElement(newPokemonFigure, figWeight);
        // appendElement(newPokemonFigure, figDiv4)
        // appendElement(figDiv, newPokemonFigure)
        // appendElement(figDiv1, figDiv)
        // appendElement(figDiv1, figDiv2)
        // appendElement(pokemonImg, figDiv2)
        // appendElement(figDiv2, pokemonType)
        // appendElement(figDiv4, figCaption)
        // appendElement(figDiv4, figWeight)
        // appendElement(figDiv4, figHeight)
        





        //append the new structue to the HTML DOM
        appendElement(pokemonDiv, newPokemonFigure)


    })
})



//function to select HTML elements
function selectElement(selectString) {
    return document.querySelector(selectString)
}

//function to create HTML element
function createElement(elementTypeString) {
    return document.createElement(elementTypeString)
}

//function to apped
function appendElement(appendTo, elementToAppend) {
    appendTo.append(elementToAppend)
}
function getImageFileName(pokemon) {
    let pokeId  
    if (pokemon.id < 10) pokeId = `00${pokemon.id}`  
    if (pokemon.id > 9 && pokemon.id < 100) pokeId = `0${pokemon.id}`  
    if (pokemon.id > 99 && pokemon.id < 810) pokeId = pokemon.id  
    if (pokemon.id === 900) {
      return `images/pokeball.png`  
    }
    return `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeId}.png`
}









