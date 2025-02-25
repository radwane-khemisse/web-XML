function Raca1(A) {
    if (A <= 0 || A > 100) {
        console.log("Veuillez entrer un nombre entre 1 et 100.");
        return;
    }

    let u = A / 2; 
    const epsilon = 1e-5;

    while (Math.abs(u * u - A) >= epsilon) {
        u = 0.5 * (u + A / u); 
    }

    console.log(`Valeur approchée de la racine carréede ${A} est = ${u}`);
}

let A = prompt("Entrez un nombre : ");
Raca1(A);