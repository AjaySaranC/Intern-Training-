// let str = 'A man, in the boat says : I see 1-2-3 in the sky';
// let len = str.length;
// let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let i = 0;
// let j = len - 1;
// let arr = str.split('');

// while (i <= j) {
//     while (i <= j && !(alpha.includes(arr[i].toUpperCase()) )) {
//         i++;
//     }
//     while (i <= j && !(alpha.includes(arr[j].toUpperCase()))) {
//         j--;
//     }


//     if (i <= j) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--;
//     }
// }

// let result = arr.join('');
// console.log(result);
let str = 'A man, in the boat says : I see 1-2-3 in the sky';
let len = str.length;
let i = 0;
let j = len - 1;
let arr = str.split('');

// Helper function to check if a character is an alphabetic letter
function isAlphabetic(char) {
    let code = char.charCodeAt(0);
    return (code >= 65 && code <= 90) || 
    (code >= 97 && code <= 122) ||
    (code >= 48 && code <= 57);
}

while (i <= j) {
    while (i <= j && !isAlphabetic(arr[i])) {
        i++;
    }
    while (i <= j && !isAlphabetic(arr[j])) {
        j--;
    }

    if (i <= j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}

let result = arr.join('');
console.log(result);
