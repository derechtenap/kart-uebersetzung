function berechne() {
    let drehzahl = document.getElementById('drehzahl').value;
    let getriebe = document.getElementById('getriebe').value;
    let ritzel_m = document.getElementById('ritzel_m').value;
    let ritzel_r = document.getElementById('ritzel_r').value;
    let radumfang = document.getElementById('radumfang').value;

    let rad = drehzahl * getriebe * (ritzel_m / ritzel_r); // U/min am Rad
    let geschwindigkeit = Math.floor(((rad * radumfang) / 100000) * 60); // KM/H

    if (!isNaN(geschwindigkeit) && (geschwindigkeit > 0)) {
        document.getElementById('ausgabe').innerHTML = 'Geschwindigkeit bei diesen Eingaben: ' + geschwindigkeit + ' KM/H';
    }
}