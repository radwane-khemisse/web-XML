function triangle2(n) {
  let stars = "";
  for (let i = 1; i <= n; i++) {
    stars += "*";
    console.log(stars);
  }
}
function triangle1(n) {
    let stars = "";
    let i = 1;
    while (i <= n) {
        stars += "*";
        console.log(stars);
        i++;
    }
    
  }
let n = prompt("Entrez un nombre : ");
console.log("Triangle 1 :");
triangle1(n);
console.log("Triangle 2 :");
triangle2(n);