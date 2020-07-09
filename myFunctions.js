let pokeArray = [
    {name: 'Bulbasaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
    {name: 'Ivysaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'},
    {name: 'Venusaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'},
    {name: 'Charmander', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
    {name: 'Charmeleon', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png'},
    {name: 'Charizard', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'},
    {name: 'Squirtle', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'},
    {name: 'Wartortle', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png'},
    {name: 'Blastoise', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'},
    {name: 'Caterpie', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png'},
    {name: 'Metapod', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png'},
    {name: 'Butterfree', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png'},
    {name: 'Weedle', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png'},
    {name: 'kakuna', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png'},
    {name: 'Beedrill', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png'},
  ];

let button = document.getElementById('pokeButton');
button.addEventListener('click', pokeCarousel1);

let index1 = 0;
let index2 = -1;

// if(index1 === 0 && index2 === -1){
//     document.getElementById('pokeButton').onclick = function() {showingPoke()};
// }

function pokeCarousel1() {
    // console.log('hello');

    if(index1 > pokeArray.length -1) {
        index1 = 0;        
    }

    if(index1 === 0) {
        document.getElementById('secondPokeName').style.display = "none";
        document.getElementById('secondPokePic').style.display = "none";
    }

    let pokeName1 = document.getElementById('firstPokeName');
    pokeName1.innerHTML = pokeArray[index1].name;

    let pokePic1 = document.getElementById('firstPokePic');
    pokePic1.src = pokeArray[index1].image;

    index1++;

    if(index1 > 1) {
        document.getElementById('secondPokeName').style.display = "block";
        document.getElementById('secondPokePic').style.display = "block";
        index2++;
        pokeCarousel2();
    }
}

function pokeCarousel2() {
    // console.log('world');

    if(index2 > pokeArray.length -1) {
        index2 = 0;        
    }

    let pokeName2 = document.getElementById('secondPokeName');
    pokeName2.innerHTML = pokeArray[index2].name;

    let pokePic2 = document.getElementById('secondPokePic');
    pokePic2.src =  pokeArray[index2].image;
}

// function showingPoke() {
//     // console.log('I am working');
//     document.getElementById('firstPokeName').style.display = "block";
//     document.getElementById('firstPokePic').style.display = "block";
//     document.getElementById('secondPokeName').style.display = "block";
//     document.getElementById('secondPokePic').style.display = "block";    
// }