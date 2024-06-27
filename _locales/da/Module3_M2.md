### @hideIteration true

```template
//
```

# Mission 2

## Introduction @showdialog

Gæt det hemmelige tal to gange i træk for at åbne døren og slå computeren.

## Step 1

Vores **Værktøjkasse** ser lidt for tomt ud. Lad os rette op på det ved at åbne ``||input:Input||`` værktøjkassen og trække en ``||input:når der trykkes på knappen A||`` blok ind i **Værktøjkasse**. Sammen med ``||basic:når programmet starter||`` blokken vil de udgøre grundlaget for vores program.

```blocks
input.onButtonPressed(Button.A, function () {
})
```

## Step 2

Lad os nu starte med at fokusere på ``||basic:når programmet starter||`` blokken. ``||basic:når programmet starter||`` blokken er vigtig, fordi alle instruktioner, du placerer i den, vil køre, når dit program starter. Lad os åbne ``||basic:Grundlæggende||`` værktøjskassen igen og trække en ``||basic:vis streng||`` blok ud. Denne blok giver dig mulighed for at indtaste noget tekst, som vil blive vist på robottens LCD-skærm. I det hvide felt til højre kan du erstatte *Hello* med *Guess from 0 to 10*!

```blocks
// @highlight
basic.showString("Guess from 0 to 10")
```

## Step 3

Du gør det godt! Når du nu starter dit program, ved spillerne, hvad de skal gøre. Åbn derefter værktøjskassen ``||variable:Variabler||``, klik på ``||variable:Opret en variabel...||``, og kald den **X**. Træk derefter en set ``||variable:set X til 0||`` blok, og placer den i blokken ``||input:når der trykkes på knappen A||``. Åbn derefter værktøjskassen ``||math:Matematik||``, vælg en ``||math:vælg tilfældig fra 0 til 10||`` blok, og placer den i ``||variable:set X til 0||`` blokken. Den bør erstatte det 0, der allerede er der. Husk, at du altid kan klikke på hint-knappen nedenfor, hvis du har problemer.

```block
export let X = 0
input.onButtonPressed(Button.A, function () {
    // @highlight
    X = randint(0, 10)
})
```

## Step 4

Før vi går videre, skal vi lige gennemgå det sidste trin.  Først tog du en ``||variable:variabel||`` og kaldte den ``||variable:X||``. Derefter brugte du en ``||math:Matematik||`` funktion til at generere et tilfældigt tal fra 0 til 10 og gemte det tal i X-variablen. Meget sejt!

## Step 5

Nu, hvor vi har valgt et tilfældigt tal, mangler vi stadig en måde at vise det på, for at vores spil kan fungere. Det kan vi gøre ved at åbne ``||basic:Grundlæggende||`` værktøjskassen, tage en ``||basic:vis nummer||`` blok og placere den under variabelen ``||variable:set X til||`` ``||math:vælg tilfældig fra 0 til 10||`` blok. Åbn derefter ``||variable:Variabler||`` værktøjskassen, og træk ``||variable:X||`` ind på den tomme plads ved siden af ``||basic:vis nummer||`` blokken. Dette vil tage det tilfældige tal, der er gemt i variabel X, og vise det på din robots skærm.

```block
export let X = 0
input.onButtonPressed(Button.A, function () {
    X = randint(0, 10)
    // @highlight
    basic.showNumber(X)
})
```

## Step 6

Nu har du gjort det! Kan du gætte det tilfældige tal to gange i træk for at slå computeren igen og redde rumstationen? Vælg et tilfældigt tal mellem 0 og 10, og tryk derefter på A-knappen for at spille. Held og lykke med det!