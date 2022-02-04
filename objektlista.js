// HTML-fil för länkning av programmet finns på
// https://github.com/nika-edu/JS-Template/blob/master/index.html
// Tillhörande CSS-fil finns på 
// https://github.com/nika-edu/JS-Template/blob/master/style.css

const avatar = {
    // Några egenskaper (properties) definieras nedan
    aName: "Ava",
    color: "Blue",
    strength: 8,
    results: [10, 12, 7, 5, 7],
    wins: 0,
  
    // Några metoder (funktioner i objektet) definieras nedan
    getSpeed: function () {
      let speed = 10 - this.strength;
      return speed;
    },
  
    getMeanResult: function () {
      // Denna funktion returnerar medelvärdet av
      // värdena i array:en results.
      let sum = 0;
      let numberOfResults = this.results.length;
      for (let i = 0; i < numberOfResults; i++) {
        sum += this.results[i];
      }
      return sum / numberOfResults;
    },
  
    getMaxResult: function () {
      // Här ska du skriva en egen metod som returnerar
      // det största talet i array:en results.
      // Du ska inte använda någon färdigdefinierad metod,
      // t ex Math.max(), för att få fram det största värdet.
      this.results.sort();
      maxResult = resluts[0];
      return maxResult;
    },

    incwins: function () {
        this.wins++;
        return this.wins;
    },
  };
  
  // --------HUVUDPROGRAM--------
  const theAvatar = avatar;
  const aName = theAvatar.aName;
  const speed = theAvatar.getSpeed();
  const mResult = theAvatar.getMeanResult();
  const wins = theAvatar.incwins();
  console.log(aName);
  console.log(speed);
  console.log(mResult);
  console.log(wins);
  
  // Övningar
  // --------------------------------------------------------------------------
  // 1. Karaktären behöver en egenskap som representerar antalet
  //    besegrade fiender. Lägg till egenskapen "wins" och initiera
  //    denna till 0.
  // --------------------------------------------------------------------------
  // 2. Lägg även till metoden "incWins()", som ökar antalet vinster
  //    med 1 varje gång den anropas.
  //    Pröva metoden genom att anropa den via "theAvatar" från
  //    huvudprogrammet, och skriv ut egenskapen "wins" på konsolen.
  // --------------------------------------------------------------------------
  // 3. Implementera metoden "getMaxResult()" enligt beskrivning i
  //    objektet.
  // --------------------------------------------------------------------------
  // 4. Gör en motsvarande metod som i (3) ovan, som heter
  //    "getMinResult".
  // --------------------------------------------------------------------------
  // 5. Skapa en metod "addResult(res)", som tar emot parametern
  //    "res" som innehåller ett numeriskt värde på ett nytt resultat.
  //    För att lägga till ett objekt längst bak i en array kan metoden
  //    "push()" användas på den aktuella array:en.
  // --------------------------------------------------------------------------
  // 6. Skapa en metod "clearResults()", som tömmer array:en "results".
  //    Ett sätt att tömma en array i JavaScript är genom att tilldela
  //    dess egenskap "length" till 0.