# bingo-generator
---

Ursprünglich habe ich diesen Code dafür geschrieben, um die Vielfalt deutscher Radiosender zu visualiseren. Ideal für lange Autofahrten oder Langeweile im Büro. Letzendlich kann der Code aber für so ziemlich alle Bingosachen genutzt werden.


## Wie?
1. Lade das gesamte Repository runter. 
2. Öffne die `index.html` und ändere den Wert in dem `value`-Attribut vom `<input>`. Die einzelnen Einträge werden mit einem Zeilenumbruch getrennt. 
3. Öffne den ganzen Spaß et voila


### Veränderung der Größe
Wenn du mit weniger oder mehr Einträgen spielen möchtest, muss das Netz vergrößert werden. Dies geschieht wie folgt:

1. Öffne `main.js`
2. In Zeile 34 wird basierend auf der Anzahl der Elemente entschieden, ob das Grid 7x7 oder 8x8 lang sein soll. Verändere diese Variablen, oder füge in der Zeile danach den folgenden Code ein: `var grid = X`
  X steht hierbei für die Seitenlänge, die das Feld haben soll. Beachte, dass dabei immer diese Formel gilt:
  `Einträge >= X²`


Dieses Projekt steht unter der **MIT-LICENSE**. Kurz gesagt: Mach damit was du willst, verlinke aber auf dieses Repository oder auf mich.
