// Exempel
/** const myString = "Hello, world!";
console.log(myString); */



// Uppgift 1
/** let penningbellop = Number(prompt('Ange belopp (i kr.) att handla för -> '));

if (penningbellop >= 1000) {
    console.log('Du har råd att köpa ett guldsmycke');
} else if (penningbellop >= 500) {
    console.log('Du har råd att köpa ett silversmycke');
} else if (penningbellop >= 200) {
    console.log('Du har råd att köpa ett järnsmycke');
} else {
    console.log('Du har inte råd att köpa något smycke');
} */



// Uppgift 2
/** let artal = Number(prompt('Ange ett årtal -> '));

if (artal % 4 != 0) {
    alert(`År ${artal} är inte ett skottår`);
} else if (artal % 100 == 0) {
    if (artal % 400 == 0) {
        alert(`År ${artal} är ett skottår`);
    } else {
        alert(`År ${artal} är inte ett skottår`);
    }
} else {
    alert(`År ${artal} är ett skottår`);
} */



// Uppgift 3
const maxlottorad = 13;
let lottorad = 0;

while (lottorad < maxlottorad) {
    let nummer = Math.floor(Math.random() * 3) + 1;
    if (nummer == 3) {
        let nummer = 'X';
        console.log(nummer);
    } else {
        console.log(nummer);
    }
    lottorad++;
}