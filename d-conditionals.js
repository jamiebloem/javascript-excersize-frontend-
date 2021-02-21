// ==========================================
//conditional:
// - je kan kijken of iets true of false is (vergelijking)
// - maken van vergelijkingen -> leeftijd > 18 -> true / false
// - je kan dan een andere uitkomst laten zien (dynamisch). bijvoorbeeld mag je een biertje kopen bij leeftijd groter dan 18

const age = 28;
const isOfDrinkingAge = age > 18;  // test condition
console.log(isOfDrinkingAge);

// conditional statement
if(isOfDrinkingAge) {
    console.log('U kunt afrekenen')
}
else {
    console.log('Iemand komt u controleren')
}
//
// Ander voorbeeld
const age2 = 28;
const isOfDrinkingAge2 = age > 18;  // test condition
const isNotADrinkingAge = age <18;
console.log(isOfDrinkingAge);

if (isOfDrinkingAge2) {
    console.log('U kunt afrekenen')
}
if (isNotADrinkingAge) {
    console.log('Iemand komt u controleren')
}
else {
    console.log('Je bent 18')
}
// 1. Declareer een variabele en sla daar de uitkomst van de vergelijking "Is 10 groter dan 20?" in op        // geeft false
// ==========================================
const biggerThan = 10 > 20
console.log(biggerThan)

// ==========================================
// 2. Declareer een variabele en sla daar de uitkomst van de vergelijking "Is 10 ongelijk aan 11?" in op        // geeft true
// ==========================================
const notEqual = 10 !== 11
console.log(notEqual)

// ==========================================
// 3. Declareer een variabele en sla daar in op of de woorden 'zoet' en 'sappig' hetzelfde zijn                // geeft false
// ==========================================
const sameWords = 'zoet' === 'sappig';
console.log(sameWords)

// ==========================================
// 4a. Declareer een variabele en sla daar het rapportcijfer 9 in op.
// 4b. schrijf een script dat checkt of het rapportcijfer groter is dan 8.
//     Als dat zo is, loggen we 'Cum laude!' in de console.                                                     // geeft 'Cum laude!'
// ==========================================
const grade = 9
if(grade > 8) {
    console.log("Cum laude!")
}
console.log(grade)
// ==========================================
// 5a. Gebruik onderstaande variabelen isRaining en temperature;
// 5b. Schrijf een script dat "Je kunt een korte broek aan!" logt wanneer het niet regent EN de temperatuur hoger is dan 21 graden
// 5c. Log "Doe een jas aan!" Als het regent OF kouder is dan 12 graden
// Tip: verander de waarde van isRaining en temperature even handmatig om te kijken of jouw 2e conditie klopt
// ==========================================
const isRaining = false;
const tempreature = 30;
if (!isRaining || tempreature > 21) {
    console.log("Je kunt een korte broek aan")
}

if (isRaining || tempreature < 12) {
    console.log("Doe een jas aan!")
}
