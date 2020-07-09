let pokeArray = [
    {name: 'Bulbasaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
    {name: 'Ivysaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'},
    {name: 'Charmander', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
    {name: 'Charizard', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'},
    {name: 'Squirtle', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'},
  
  ];

let button = document.getElementById('pokeButton');
button.addEventListener('click', pokeCarousel);

var index1 = 0;
var index2 = -1;

function pokeCarousel() {
    if(index1 >= pokeArray.length -1) {
        index1 = 0;        
    }

    if(index2 >= pokeArray.length -1) {
        index2 = 0;        
    }

    let pokeName1 = document.getElementById('firstPokeName');
    pokeName1.innerHTML = pokeArray[index1].name;

    let pokePic1 = document.getElementById('firstPokePic');
    pokePic1.src = pokeArray[index1].image;

    let pokeName2 = document.getElementById('secondPokeName');
    pokeName2.innerHTML = pokeArray[index2].name;

    let pokePic2 = document.getElementById('secondPokePic');
    pokePic2.src =  pokeArray[index2].image;
    
    index1++;
    index2++;
}