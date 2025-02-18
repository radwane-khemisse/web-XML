function hjms(seconds) {
    var days= Math.floor(seconds / 3600 / 24);
    seconds -= days * 24 * 3600;
    var hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    var output =[];
    if(days > 0) output.push(days + " jour" + (days > 1 ? "s" : ""));
    if(hours > 0) output.push(hours + " heure"+ (hours > 1 ? "s" : ""));
    if(minutes > 0) output.push(minutes + " minute"+ (minutes > 1 ? "s" : ""));
    if(seconds > 0) output.push(seconds + " seconde"+ (seconds > 1 ? "s" : ""));
    //return days + " jours " + hours + " heures " + minutes + " minutes " + seconds + " secondes";
    return output.join(" ");
}

let seconds = prompt("Entrez le nombre de secondes : ");
console.log(hjms(seconds));