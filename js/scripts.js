//returns "[pokemone name]: [number] units tall" 

    let pokemonList = [
        {name: 'Butterfree', height: 1.1, type: ['Bug', 'Rock', 'Grass']},
        {name: 'Caterpie', height: 0.3, type: ['Flying', 'Rock', 'Fire']},
        {name: 'Charmander', height: 0.6, type: ['Fairy', 'Fire', 'Ice']},
    ] 
    for (let i = 0; i <= 2; i++) {
        document.write((pokemonList[i].name + ': ') + (pokemonList[i].height) + ' units tall    ');
    if (pokemonList[i].height >= 1.0){
            document.write("  --  I'm a big fella!  ");
    }
    else if (pokemonList[i].height >= 0.5 && pokemonList[i].height < 1.0){
        document.write("  --  I'm a medium fella!  ");
    } 
    else {
        document.write("  --  I'm a little fella!  ");
    }
}



    


//practice for part 3 of exercise

//if the pokemon height is above 1.0 then write "Big Feller!" after the height
