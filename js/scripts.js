//forEach loop, returns Name is X units tall. They are a X, a Y, and a Z.

let pokemonList = [
        {name: 'Butterfree', height: 1.1, type: ['Bug', 'Rock', 'Grass']},
        {name: 'Caterpie', height: 0.3, type: ['Flying', 'Rock', 'Fire']},
        {name: 'Charmander', height: 0.6, type: ['Fairy', 'Fire', 'Ice']},
    ]
function myLoopFunction(pokemon) {
  console.log(pokemon.name + ' is ' + pokemon.height + ' units tall. ' + 'They are a ' + pokemon.type[0] + ', a ' + pokemon.type[1] + ', and a ' + pokemon.type[2] + '.');
}
pokemonList.forEach(myLoopFunction);

/*
for loop - returns "[pokemone name]: [number] units tall" 
document.write('<ul>')
    
    for (let i = 0; i <= 2; i++) {
        document.write('<li>' + (pokemonList[i].name + ': ') + (pokemonList[i].height) + ' units tall    ');

previous for loop if else statement for age
          if (pokemonList[i].height >= 1.0){
            document.write("  --  I'm a big fella!  ");
    }
    else if (pokemonList[i].height >= 0.5 && pokemonList[i].height < 1.0){
        document.write("  --  I'm a medium fella!  ");
    } 
    else {
        document.write("  --  I'm a little fella!  ");
    }
    document.write('</li>')
   
forEach loop   
     /*pokemonList.forEach(function(name) {
            console.log(name);
          });    
    */


