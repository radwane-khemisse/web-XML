function troisNombres(a, b, c) {
    let numbers = [a, b, c];
    numbers.sort(); 
    return numbers.join(" ");
}

a=prompt("Entrez le premier nombre 1: ");
b=prompt("Entrez le premier nombre 2: ");
c=prompt("Entrez le premier nombre 3: ");
console.log(troisNombres(a, b, c)); 
