// name, height, type


/* let carArray = [
    { type: 'Bus', wheels: 4, color: 'blue'},
    { type: 'Sport', wheels: 4, color: 'red'}
  ]; */
  
  
// array of objects

/* let pokemonList = [
let pokemonList = [
    {name: 'Butterfree', height: 1.1, type: ['Bug', 'Rock', 'Grass']},
    {name: 'Caterpie', height: 0.3, type: ['Flying', 'Rock', 'Fire']},
    {name: 'Charmander', height: 0.6, type: ['Fairy', 'Fire', 'Ice']}
] */

/*let pokemonList = [
    {name: 'Butterfree', height: 1.1, type: ['Bug', 'Rock', 'Grass']},
    {name: 'Caterpie', height: 0.3, type: ['Flying', 'Rock', 'Fire']},
    {name: 'Charmander', height: 0.6, type: ['Fairy', 'Fire', 'Ice']}
] 
for (let i = 0; i <= pokemonList.length; i++) {
    if (pokemonList[i].height > 1.0){
        console.log('This is a BIG Pokemon!');
    }else if (pokemonList[i].height < 1.0 && pokemonList[i].height >=0.5) {
        console.log('This is a MEDium Pokemon!');
    }else{
        console.log('This is a small Pokemon!');
        }
    }*/
    

    /*let pokemonList = [
        {name: 'Butterfree', height: 1.1, type: ['Bug', 'Rock', 'Grass']},
        {name: 'Caterpie', height: 0.3, type: ['Flying', 'Rock', 'Fire']},
        {name: 'Charmander', height: 0.6, type: ['Fairy', 'Fire', 'Ice']}
    ] 
    for (let i = 0; i <= 2; i++) {  
        document.write('My nanme is ' pokemonList[i].name 
        ' and I am' pokemonList[i].height 
        'units high. My types are ' pokemonList[i]type[0] 
        ',' pokemonList[i]type[1] 
        ', and ' pokemonList[i].type[2] 
        '.')
    // Use document.write() inside the loop’s code to write the Pokémon name on your website’s DOM.Bulbasaur (height: 7)
    //document.write('My name is' [Butterfree] 'and I am' [1.1] 'units high. My types are' [bug, rock, grass].)*/

    let pokemonList = [
        {name: 'Butterfree', height: 1.1, type: ['Bug', 'Rock', 'Grass']},
        {name: 'Caterpie', height: 0.3, type: ['Flying', 'Rock', 'Fire']},
        {name: 'Charmander', height: 0.6, type: ['Fairy', 'Fire', 'Ice']}
    ] 
    for (let i = 0; i <= 2; i++) {  
        console.log('My name is ' + pokemonList[i].name);
        console.log('I am ' + pokemonList[i].height);
        console.log('My types are' + pokemonList[i].type[0][1][2])
    }

    
    
/*  let pokemonList = [
        {name: 'Butterfree', height: 1.1, type: ['Bug', 'Rock', 'Grass']},
        {name: 'Caterpie', height: 0.3, type: ['Flying', 'Rock', 'Fire']},
        {name: 'Charmander', height: 0.6, type: ['Fairy', 'Fire', 'Ice']}
    ] 
    for (let i = 0; i <= 2; i++) {  
        document.write('My name is + [pokemonList[i].name]');
    }*/



