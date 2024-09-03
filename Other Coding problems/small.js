let a = [10,7,9,3,2,1,15]

let c = 0;
for(i=0 ; i<a.length+1 ;i++){
    let x = a[i];
    for(j=i ; j<a.length; j++){
        if(x > a[j]){
            a[i] = a[j];
            c++;
            break;
        }
        a[i] = -1
    }
    
}

console.log(a);