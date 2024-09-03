let str = 'A man, in the boat says : I see 1-2-3 in the sky';
let len = str.length;
let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let i = 0;
let j = len - 1;
let arr = str.split('');

while (i <= j) {
    while (i <= j && !(alpha.includes(arr[i].toUpperCase()) )) {
        i++;
    }
    while (i <= j && !(alpha.includes(arr[j].toUpperCase()))) {
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