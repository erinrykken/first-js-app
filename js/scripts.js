//returns "[pokemone name]: [number] units tall" 

    let pokemonList = [
        {name: 'Butterfree', height: 1.1, type: ['Bug', 'Rock', 'Grass']},
        {name: 'Caterpie', height: 0.3, type: ['Flying', 'Rock', 'Fire']},
        {name: 'Charmander', height: 0.6, type: ['Fairy', 'Fire', 'Ice']},
    ]
    function myLoopFunction(pokemon) {
        console.log(pokemon.name + ' is ' + pokemon.height + ' units tall. ' + 'They are a ' + pokemon.type.);
      }
      pokemonList.forEach(myLoopFunction);

    //for loop 
    /*document.write('<ul>')
    for (let i = 0; i <= 2; i++) {
        document.write('<li>' + (pokemonList[i].name + ': ') + (pokemonList[i].height) + ' units tall    ');
   
     //forEach loop   
     /*pokemonList.forEach(function(name) {
            console.log(name);
          });    
   
   
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
    */


