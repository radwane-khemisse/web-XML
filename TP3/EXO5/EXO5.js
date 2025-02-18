function Premier(n){
    let i = 2;
    while (i < n){
        if (n % i == 0){
            return [false, i];
        }
        i++;
    }
    return [true,null];
}

let n = prompt("Entrez un nombre : ");
let result = Premier(n);
if (result[0]) {
    console.log(n + " est un nombre premier");
} else {
    console.log(n + " n'est pas un nombre premier, il est divisible par " + result[1]);
}
