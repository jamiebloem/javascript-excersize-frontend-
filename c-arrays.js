// ==========================================
// Array: []
// - verzameling
// - volgorde
// - tellen vanaf 0
// - console.log(numbers.lenght -1) zorgt dat je de laatste in het rijtje laat zien
// - je mag getallen een nieuwe waarde geven


// 1. Declareer een variabele en sla daar een array met vier jaartallen in op.              // bijv. 2020, 2019, 2018 en 2017
// ==========================================
let years = ['2016', '2017', '2018', '2019']
console.log(years);

// Als je de lengte wilt opvragen (hoeveelheid in de array, dan voeg je .length achter years in je console log

// ==========================================
// 2. Declareer een variabele en sla daar een array met drie van jouw hobbies in op.         // bijv. schaken, koekjes eten en muziek luisteren
// ==========================================
const hobbies = ['piano', 'sporten', 'paardrijden']
console.log(hobbies);

// ==========================================
// 3a. Declareer een variabele met daarin een array met de waardes 3, 4, 5, 7 en 2
// 3b. Log de waarde 3 uit de array in de terminal                                          // geeft 3
// ==========================================
const numbers = [3, 4, 5, 7, 2];
console.log(numbers[0]);

// ==========================================
// 4a. Declareer een variabele met daarin een array met de waardes groen, geel, rood, paars, blauw en oranje
// 4b. Log de waarde blauw uit de array in de terminal                                      // geeft blauw
// 4c. Log de waarde geel uit de array in de terminal                                       // geeft geel
// ==========================================
const colours = ['green', 'yellow', 'red', 'purple', 'blue', 'orange']
console.log(colours[1]);
console.log(colours[4]);
// ==========================================
// 5a. Declareer een variabele met daarin een array met de waardes 21, 22, 23, 25, 25
// 5b. Pas een van de items in de array aan zodat de cijferreeks netjes doorloopt
// 5c. Log de de array in de terminal                                                       // geeft [ 21, 22, 23, 24, 25 ]
// ==========================================
const numbersInOrder = [21, 22, 23, 25, 25]
numbersInOrder[3] = 24
// numbersInOrder[4] = numbersInOrder[4] *  0.5
console.log(numbersInOrder)

// ==========================================
// 6a. Declareer een variabele met daarin een array met de waardes bladerdeeg, knoflook, spinazie
// 6b. Verander daarna de waarde bladerdeeg in lasagne bladen
// 6c. Log de de array in de terminal                                                       // geeft [ 'lasagne bladen', 'knoflook', 'spinazie' ]
// 6d. Log de lengte van de array in de terminal                                            // geeft 3
// ==========================================
let ingredients = ['bladerdeeg', 'knoflook', 'spinazie']
ingredients[0] = 'lasagnebladen';
console.log(ingredients);
console.log(ingredients.length);

