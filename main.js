// Bingo-Generator | Carsten Stephan 2021 //

var raw, grid, e, table;

function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

var initCreation = () => {
    raw = document.getElementById("raw").value.split('   ');
    table = document.getElementById("table");
    table.innerHTML = ""; // löscht den (evtl vorhandenen) alten Inhalt der Tabelle

    for (var i = 1; i < raw.length; i++) { // i = 1 weil das erste Lied passt lool
        raw[i] = raw[i].substring(1);
    } 
    shuffle(raw)
    console.log(raw)
    // Maths Stuff
    raw.length <= 64 ? grid = 7 : grid = 8;
    e = 0;
    
    for (var i = 0; i < grid; i++) {
        var tr = document.createElement("tr");
        if (!(e === Math.pow(grid, 2))) {    
            for (var a = 0; a < grid; a++) {
                var td = document.createElement("td");
                td.innerHTML = raw[e]
                tr.appendChild(td)
                e++
            }
        table.appendChild(tr)
        }
        console.log("next!")
    }


}



document.getElementById("regenerate").addEventListener("click", function () {
    initCreation();
})

document.getElementById("print").addEventListener("click", function () {
 window.print();
})

window.onload = initCreation();