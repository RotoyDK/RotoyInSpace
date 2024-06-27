### @hideIteration true

```template
basic.forever(function () {
})
```

# Mission 1

## Introduction @showdialog

Slå computeren i et spil sten, saks, papir!

## Step 1

For at komme i gang skal du åbne ``||input:Input||`` værktøjskassen og tilføje en on ``||input:på ryst||`` blok til din **Værktøjkasse**. Denne blok fungerer ligesom ``||input:A||`` og ``||input:B||`` knapperne, som du brugte i andre missioner, men i stedet for at trykke på en knap for at starte dit program, vil du her give din robot en blid rystetur.

```block
// @highlight
input.onGesture(Gesture.Shake, function () {
})
```


## Step 2

Lad os nu åbne ``||Module3_M1:Mission 1||`` værktøjskassen, tage blokken ``||Module3_M1:sæt hand til tilfældig sten, papir eller saks||`` og trække den ind i blokken ``||input:på ryst||``, som allerede er i din **Værktøjkasse**. Denne blok bruger lidt matematik til tilfældigt at vælge en ny spillebrik, hver gang du ryster din robot.

```block
let hand: number = 0
input.onGesture(Gesture.Shake, function () {
    // @highlight
    hand = Module3_M1.setRandomHand()
})
```

## Step 3

Okay, nu skal vi fortælle programmet, hvad det skal gøre, når det tilfældigt vælger en spillebrik. Til det formål bruger vi en betinget erklæring. Klik på værktøjskassen ``||logic:Logik||``, og placer en ``||logic:hvis sand så ellers||`` blok lige under ``||Module3_M1:sæt hand til tilfældig sten, papir eller saks||`` blokken, som du tilføjede tidligere. For at afslutte dette trin skal du klikke på + knappen i bunden af den betingede sætning for at tilføje ``||logic:ellers hvis||``. Du bør nu have 3 mellemrum i din betingede sætning, ``||logic:hvis||``, ``||logic:ellers hvis||`` og ``||logic:ellers||``. Hvad tror du, vi kan placere på hvert af disse steder?

```block
let hand: number = 0
hand = Module3_M1.setRandomHand()
// @highlight
if (true) {
    
} else if (false) {
    
} else {
    
}
```

## Step 4

Du gør det så godt! Lad os bruge et øjeblik på at gennemgå dit program indtil videre. Først tilføjede du en ``||input:på ryst||`` blok for at starte dit program. Derefter brugte du lidt matematik til tilfældigt at vælge en spillebrik, som du gemte i en variabel ved navn ``||variable:hand||``. Til sidst tilføjede du en ``||logic:betingede||`` udsagn, som fortæller dit program, hvad det skal gøre med hånd-variablen. Det er godt gået!

```block
let hand: number = 0
input.onGesture(Gesture.Shake, function () {
    hand = Module3_M1.setRandomHand()
    // @highlight
    if (true) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
```

## Step 5

Nu er det tid til at tilføje de tre spillebrikker til din betingede sætning. Åbn værktøjskassen ``||logic:Logik||``, tag 2 ``||logic:0 = 0||`` blokke, og placer dem i **Værktøjkasse**. Sæt 1 af blokkene i feltet til højre for ``||logic:hvis||`` (erstatter ``||logic:sand||``). Tag den anden ``||logic:0 = 0||`` blok, og sæt den på pladsen til højre for ``||logic:ellers hvis||`` blokken.  Åbn derefter værktøjskassen ``||variable:Variabler||``, og tag 2 ``||variable:hand||`` variabler, og læg dem i **Værktøjkasse**. Placer den ene ``||variable:hand||`` variabel i det første nulrum til højre for ``||logic:hvis||`` og den anden i det første nulrum på ``||logic:ellers hvis||`` linjen.

```block
export let hand: number = 0
input.onGesture(Gesture.Shake, function () {
    hand = Module3_M1.setRandomHand()
    // @highlight
    if (hand == 0) {

    } else if (hand == 0) {

    } else {

    }
})
```

## Step 6

Åbn nu ``||Module3_M1:Mission 1||``værktøjskassen, tag ``||Module3_M1:Sten||`` blokken, og sæt den til højre for ``||variable:hand||`` variablen øverst i din betingede sætning (i stedet for 0). Åbn derefter ``||Module3_M1:Mission 1||`` værktøjskassen igen, men tag denne gang ``||Module3_M1:Papir||`` blokken og sæt den i 0 i ``||logic:ellers hvis||`` i din betingede sætning. Brug hint-knappen, hvis du har brug for det. 

```block
export let hand: number = 0
input.onGesture(Gesture.Shake, function () {
    hand = Module3_M1.setRandomHand()
    // @highlight
    if (hand == Module3_M1.getRock()) {
    	
    } else if (hand == Module3_M1.getPaper()) {
    	
    } else {
    	
    }
})
```

```ghost
Module3_M1.getScissors()
```

## Step 7

Det er tid til at tilføje vores tre spillebrikker! Åbn ``||basic:Grundlæggende||`` værktøjskassen, og træk en ``||basic:vis LED'er||`` blok ind under ``||logic:hvis||`` armen i din betingede sætning. Gør derefter det samme med ``||logic:ellers hvis||`` og ``||logic:ellers||`` armene, indtil du har i alt tre ``||basic:vis LED'er||`` blokke i din betingede sætning.

```block
export let hand: number = 0
input.onGesture(Gesture.Shake, function () {
    hand = Module3_M1.setRandomHand()
    if (hand == Module3_M1.getRock()) {
        // @highlight
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (hand == Module3_M1.getPaper()) {
        // @highlight
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        // @highlight
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
```

## Step 8

Er du klar til at være kreativ? Godt, for det er tid til at tegne vores spillebrikker digitalt. Gå til den første ``||basic:vis LED'er||`` blok (under ``||Module3_M1:Sten||``), og klik på de små firkanter for at "tegne" din **sten**-spillebrik. Når du er færdig, skal du gå til den næste ``||basic:vis LED'er||`` blok (under ``||Module3_M1:Papir||``) og denne gang 'tegne' din **papirbrik**. Til sidst skal du i den sidste ``||basic:vis LED'er||`` blok (``||logic:ellers||``) tegne din **saksespilbrik**. Vi opfordrer dig til at være så kreativ, som du vil, men vi har lagt nogle eksempler i hintet, hvis du har brug for dem.

```block
export let hand: number = 0
input.onGesture(Gesture.Shake, function () {
    hand = Module3_M1.setRandomHand()
    if (hand == Module3_M1.getRock()) {
        // @highlight
        basic.showLeds(`
            . . . . .
            . # # # #
            # # # # #
            # # # # .
            . # # # .
            `)
    } else if (hand == Module3_M1.getPaper()) {
        // @highlight
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        // @highlight
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
```

## Step 9

Før vi går videre, så lad os se nærmere på, hvad du har gjort. Først bruger vi en ``||input:på ryst||`` blok til at starte vores program. Dernæst bruger vi lidt matematik til at vælge en tilfældig sten, saks eller papir-brik og gemme den i en ``||variable:variable||``, der hedder ``||variable:hand||``. En ``||logic:betingede udsagn||`` vil derefter se på den lagrede spillebrik og vise den ``||basic:LED||``, der matcher den, på din robots skærm. Utroligt! Du har brugt input, variabler, betingede udsagn og en smule matematik til at bygge dit eget computerspil!

```block
export let hand: number = 0
input.onGesture(Gesture.Shake, function () {
    hand = Module3_M1.setRandomHand()
    if (hand == Module3_M1.getRock()) {
        // @highlight
        basic.showLeds(`
            . . . . .
            . # # # #
            # # # # #
            # # # # .
            . # # # .
            `)
    } else if (hand == Module3_M1.getPaper()) {
        // @highlight
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        // @highlight
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
```

## Step 10

Det er tid til at udfordre computeren. Vind 2 ud af 3 spil sten, saks og papir for at fuldføre missionen og fortsætte Lise og Sørens Jupiter-udfordring. Du kan ryste din robot forsigtigt efter hvert spil for at nulstille den. Held og lykke med opgaven!