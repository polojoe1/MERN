const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);


    const pokemonIdDivisibleBy3 = pokémon.filter(mon => mon.id%3===0)

    // console.log(pokemonIdDivisibleBy3);

    const pokemonFireTypeOnly = pokémon.filter(mon=> mon.types.includes("fire"))

    //console.log(pokemonFireTypeOnly);

    const pokemonWithMoreThanOneType = pokémon.filter(mon=>mon.types.length>1)

    // console.log(pokemonWithMoreThanOneType);


    const pokemonAllNamesOnly = pokémon.map(mon=>mon.name)
    
    // console.log(pokemonAllNamesOnly);

    const pokemonAllNameWithIdGreaterThan99 = pokémon.filter(mon=>mon.id>99).map(mon=>mon.name)


    // console.log(pokemonAllNameWithIdGreaterThan99);

    const pokemonWithOnlyPoisonNameOnly = pokémon.filter(mon=>mon.types.length===1&&mon.types.includes("poison")).map(mon=>mon.name)

    // console.log(pokemonWithOnlyPoisonNameOnly);

    const pokemonFirstTypeWhoseSecondFlying = pokémon.filter(mon=>mon.types[1]==="flying").map(mon=>mon.types[0])

    // console.log(pokemonFirstTypeWhoseSecondFlying);


    const numOfTypesThatAreNormal = pokémon.filter(mon=>mon.types.includes("normal")).length


    console.log(numOfTypesThatAreNormal);