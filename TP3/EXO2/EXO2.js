function hjms(seconds) {
    var days= Math.floor(seconds / 3600 / 24);
    seconds -= days * 24 * 3600;
    var hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    return days + " jours " + hours + " heures " + minutes + " minutes " + seconds + " secondes";
}

let seconds = prompt("Entrez le nombre de secondes : ");
console.log(hjms(seconds));