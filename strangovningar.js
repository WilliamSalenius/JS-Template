// Task 1
/** function ucFirst(str) {
    return str[0].toUpperCase() + str.toLowerCase().slice(1);
}

alert(ucFirst('joHn')); */

// Task 2
/** function checkSpam(str) {
    let newStr = str.toLowerCase();
    if (newStr.includes('xxx') || newStr.includes('viagra')) {
        let message = 'Snusksgubbe!';
        return message
    } else {
        let message = 'Okej!'
        return message
    }
}

let dinString = prompt('Skriv!');
alert(checkSpam(dinString)); */

// Task 3
function truncate(str, maxlength) {
    let strLenght = str.lenght;
    if (strLenght > maxlength) {
        return str.slice(0, maxlenght) + '...';
    } else {
        return str;
    }
}

let dinString = prompt('Skriv din text!');
let antalKaraktarer = prompt('Hur många karaktärer');

alert(truncate(dinString, antalKaraktarer));
