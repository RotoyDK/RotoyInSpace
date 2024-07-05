### @hideIteration true

```template
//
```

# Mission 2

## Introduction @showdialog

Kan du hjælpe Lise og Søren med at få sonden under kontrol igen?

## Step 1

Åh nej! Det ser ud til, at Voyager-sonden snurrer hjælpeløst rundt i rummet. Lad os skrive et program, der kan hjælpe Lise og Søren med at få den under kontrol igen. Lad os starte med at åbne ``||basic:Basic||``-værktøjskassen og trække blokken ``||basic:forever||`` ud til dit **Arbejdsområde**. Denne blok vil sørge for, at dit program altid kører! 

```block
// @highlight
basic.forever(function () {
})
```

## Step 2

Da vores program skal træffe beslutninger baseret på, om en betingelse er sand eller ej, skal vi åbne  ``||logic:Logic||`` -værktøjskassen og tilføje en ``||logic:if then else||``-blok til vores  ``||basic:forever||`` blok. Lad os derefter klikke på ``||logic:+||`` +-tegnet under ``||logic:else||`` for at tilføje et ekstra mellemrum til vores betingede udsagn. Lagde du mærke til, hvad der skete med ``||logic:else||``? Det er rigtigt, det blev til ``||logic:else if||``!

```block
basic.forever(function () {
    // @highlight
    if (true) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
```

## Step 3

Et digitalt vaterpas fungerer ved at tjekke hældningen (eller vinklen) på x- og y-aksen. Det bliver vi nødt til at tilføje, hvis vores program skal fungere. Åbn værktøjskassen ``||math:Math||`` og træk **to** ``||math:absolute of 0||`` -blokke ind i dit **Arbejdsområde**. Åbn nu værktøjskassen``||variables:Variables||``, og skab to variabler - ``||variables:x||`` og ``||variables:y||``. Tag derefter ``||variables:x||`` -blokken, og føj den til en af dine ``||math:absolute of 0||`` blokke i stedet for 0. Gå nu tilbage til værktøjskassen ``||variables:Variables||``, og tilføj en ``||variables:y||``-blok til den anden ``||math:absolute of 0||`` blok.

```block
export let x = 0
export let y = 0
// @highlight
basic.showNumber(Math.abs(x))
// @highlight
basic.showNumber(Math.abs(y))
```

## Step 4

Lad os begynde at sammensætte vores betingede erklæring. Åbn ``||logic:Logic||`` værktøjskassen, og tilføj to ``||logic:0 = 0||`` blokke til dit **Arbejdsområde**.Brug derefter pilen til at ændre ``||logic:=||`` tegnet til et ``||logic:>||`` (større end) på begge blokke. Lad os nu tage vores ``||math:absolute of x||`` og ``||math:absolute of y||`` -blokke og tilføje dem til venstre side af ``||logic:0 > 0||`` blokkene. Glem ikke at bruge hintet, hvis du føler, at du sidder fast. Godt arbejde! 

```block
export let x = 0
export let y = 0
    // @highlight
    if (Math.abs(x) > 0) {
    } else if (Math.abs(y) > 0) {
    } else {
    }
```

## Step 5

I næste trin tilføjer vi vores to  ``||math:absolute of||`` -blokke til vores betingede udtryk. Tag ``||math:absolute of x||``-blokken og sæt den ind i ``||logic:if true then||`` arm replacing the word ``||logic:true||``. Now, grab the ``||math:absolute of y||`` block and drop it in the ``||logic:else if then||`` -armen i stedet for ordet true. Tag nu absolut af y-blokken, og sæt den ind i else if then-delen af den betingede sætning. Til sidst erstatter du de resterende ``||logic:0||``'er i din betingede udtryk ved at skrive tallet 32. 

```block
export let x = 0
export let y = 0
basic.forever(function () {
    // @highlight
    if (Math.abs(x) > 32) {
    } else if (Math.abs(y) > 32) {
    } else {
    }
})
```

## Step 6

Det går godt, men der er ikke tid til at hvile sig, når rumfærgen er ude af kontrol. Heldigvis kan vi spare lidt tid ved at bruge det accelerometer, der er indbygget i vores robot. Åbn værktøjskassen ``||variables:Variables||``, og tag **to** ``||variables:set y to 0||``-blokke og placer dem i din ``||basic:forever||`` -blok over din ``||logic:conditional statement||``. Brug pilene til at ændre et  ``||variables:y||`` til et ``||variables:x||``. For at afslutte dette trin skal du tilføje en ``||input:acceleration (mg) x||`` blok til både ``||variables:set y to||``- og ``||variables:set x to||`` -blokkene.

```block
export let x = 0
export let y = 0
basic.forever(function () {
    // @highlight
    x = input.acceleration(Dimension.X)
    // @highlight
    y = input.acceleration(Dimension.X)
    if (Math.abs(x) > 32) {
    } else if (Math.abs(y) > 32) {
    } else {
    }
})
```

## Step 7

Har du lagt mærke til noget i dit program indtil nu, som kan give problemer senere? Kig nøje på ``||variables:set x||`` og ``||variables:set y||`` -blokkene i toppen af din kodeblok. Kan du se det nu? Det er rigtigt, en af variablerne i vores accelerationsblokke matcher ikke den variabel, den er sat til. Godt, at vi opdagede det. Brug pilene og sørg for, at ``||variables:set x||`` matcher ``||input:acceleration (mg) x||``, og at ``||variables:set y||`` matcher  ``||input:acceleration (mg) y||``.

```block
export let x = 0
export let y = 0
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    // @highlight
    y = input.acceleration(Dimension.Y)
    if (Math.abs(x) > 32) {
    } else if (Math.abs(y) > 32) {
    } else {
    }
})
```

## Step 8

Vores niveau er næsten færdigt, men det ville være rart, hvis vores robot viste os billeder på skærmen, så vi kunne se, om den var i niveau eller ej. Åbn  ``||basic:Basic||`` -værktøjskassen, og tilføj tre``||basic:show icon||`` -blokke til din betingede udtryk, en under ``||logic:if||``, en under  ``||logic:else if||``, og en under  ``||logic:else||``. Brug pilene til at ændre hvert af ikonerne til det billede, du bedst kan lide. Bare sørg for, at de alle er forskellige. De forskellige billeder fortæller dig, hvad du skal gøre for at få din robot i niveau

```block
export let x = 0
export let y = 0
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    if (Math.abs(X) > 32) {
        basic.showIcon(IconNames.No)
    } else if (Math.abs(y) > 32) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
```

## Step 9

Utroligt! Du har brugt betingede udsagn, variabler og endda lidt matematik til at kode dit eget digitale niveau. Gå i gang med at downloade programmet til din robot og prøv det af. Men brug ikke for lang tid... Søren og Lise har stadig brug for din hjælp til at redde Voyager-sonden!



