function Fibo1(n){
    u=[0,1];
    if (n==0 || n==1){
        return n;
    }
    for (let i = 2; i <= n; i++){
        u.push(u[i-1]+u[i-2]);
    }
    return u[n];
} 


let n=prompt("Entrez un nombre : ");
console.log("Fibo1("+n+") = "+Fibo1(n));
