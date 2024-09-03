function palindrome(str){
    let str2 = str.split('').reverse();
    return str === str2.join('');
}

function maxlenpalin(s){
    let a = 1;
    for(i=0;i<s.length;i++){
        for(j=i+1;j<s.length;j++){
            substr = s.slice(i,j+1)
            if(palindrome(substr) && substr.length > a){
                a = substr.length;
            }
        }
    }
    return a;
}

console.log(maxlenpalin('aabcccccbdeod'));