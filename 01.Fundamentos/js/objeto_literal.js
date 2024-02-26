let character = {
    name: "Tony Stark",
    codeName: "Iron Man",
    alive: true,
    age: 40,
    coords:{
        lat: 34.034,
        lng: -118.70
    },
    armor: ["Mark 1", "Mark 5", "Hulkbuster"],
};


console.log(character);

//obtener name
console.log(character.name);

//obtener coords (lat)
console.log(character.coords.lat);

//obtener numero de armaduras
console.log(character.armor.length)

//obtener todas las armaduras
console.log(character.armor)

//obtener la primera armadura
console.log(character.armor[0])


// mas detalles sobre objeto literal

//como borrar una propiedad
delete character.coords.lat
console.log(character)

//Object}


const entriespares = Object.entries(character)
console.log(entriespares)