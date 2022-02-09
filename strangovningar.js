// Task 1
/** function ucFirst(str) {
    return str[0].toUpperCase() + str.toLowerCase().slice(1);
}

alert(ucFirst('joHn')); */

// Task 2
/** function checkSpam(str) {
    let newStr = str.toLowerCase();
    if (newStr.includes('xxx') || newStr.includes('viagra')) {
        let message = 'Spam!';
        return message
    } else {
        let message = 'Inte spam!'
        return message
    }
}

let dinString = prompt('Skriv!');
alert(checkSpam(dinString)); */

// Task 3
/** function truncate(str, maxlength) {
    let strLenght = str.length;
    if (strLenght > maxlength) {
        return str.slice(0, maxlength) + '...';
    } else {
        return str;
    }
}

let dinString = prompt('Skriv din text!');
let antalKaraktarer = Number(prompt('Hur många karaktärer?'));
alert(truncate(dinString, antalKaraktarer)); */

// Task 4
/** function extractCurrencyValue(str) {
    return str.slice(1);
}

let pengar = prompt('Hur mycket pengar?');
alert(extractCurrencyValue(pengar)); */

// Exercise 1
/** function stringOutput(str) {
    let lowerstr = str.toLowerCase();
    if (lowerstr == 'jabroni') {
        alert('Patron Tequila');
    } else if (lowerstr == 'school counselor') {
        alert('Anything with Alcohol');
    } else if (lowerstr == 'programmer') {
        alert('Hipster Craft Beer');
    } else if (lowerstr == 'bike gang member') {
        alert('Moonshine');
    } else if (lowerstr == 'politician') {
        alert('Your tax dollars');
    } else if (lowerstr == 'rapper') {
        alert('Cristal');
    } else {
        alert('Beer');
    }
}

let dinString = prompt('Din input:')
stringOutput(dinString); */

// Exercise 2
/** function charactersInString(str) {
    let characterArray = [];
    for (i = 0; i < str.length; i++) {
        let strCharacter = str[i];
        if (characterArray.includes(strCharacter)) {
            continue;
        } else {
            characterArray.push(strCharacter);
        }
    }
    alert(characterArray);
}

let dinString = prompt('Skriv din string:');
charactersInString(dinString); */

// Exercise 3.1 (omständig)
/** function moneyConvert(ammount) {
    let stringAmmount = ammount.toString();
    if (ammount % 1 == 0) {
        return '$' + stringAmmount + '.00';
    } else {
        if (stringAmmount.split('.')[1].length < 2) {
            return '$' + stringAmmount + '0';
        } else if (stringAmmount.split('.')[1].length == 2) {
            return '$' + stringAmmount;
        } else {
            return '$' + stringAmmount.split('.')[0] + '.' + stringAmmount.split('.')[1].slice(0, 2);
        }
    }
}

let pengar = prompt('Ange dina pengar:');
alert(moneyConvert(pengar)); */

// Exercise 3.2
function moneyConvert(ammount) {
    let fixedAmmount = (+ammount).toFixed(2);
    return '$' + fixedAmmount
}

let pengar = prompt('Ange dina pengar:');
alert(moneyConvert(pengar));