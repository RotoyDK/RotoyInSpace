### @hideIteration true

# Mission 1

## Introduction @showdialog

Hjælp Lise med at finde den klareste stjerne ved at programmere en lys detektor.

## Step 1

Til denne opgave vil du komme til at bruge variabler, betingede udsagn og din robots hardware til at bygge en sensor der kan måle lyset omkring dig. Er du klar til at starte med at programmere? Sejt, lad os starte.

## Step 2

Lad os starte med ``||basic:for altid||`` klodsen i din **Værktøjkasse**. Denne klods er fundamentet for mange af dine projekter og fortæller dit program, hvornår og hvordan det skal køre. Det betyder at alt du placerer i ``||basic:for altid||`` klodsen vil forsætte med at køre indtil du slukker din robot.

```block
// @highlight
basic.forever(function () {
})
```

## Step 3

Nu er vi nødt til at lave en variabel, som vil gemme niveauet af lys efter at dit program opdager det. For at gøre dette, åben ``||variables:Variabler||`` værktøjskassen og klik på ``||variables:Opret en variabel||`` knappen nær toppen. Dette skulle gerne få en boks til at vise sig på din skærm, som beder dig om at navngive den nye variabel. Skriv ``||variables:læser||`` og tryk ok. Klik på ``||variables:Variabler||`` værktøjskassen igen og du bør nu se en klods som hedder ``||variables:sæt læser til 0||``. Grib den klods og placer den under din ``||basic:for altid||`` klods. Godt gjort!

```block
export let reading = 0
basic.forever(function () {
    // @highlight
    reading = 0
})
```

## Step 4

Vores program har nu et sted at opbevare niveauet af lys, men den kan faktisk ikke opdage det endnu. Heldigvis er der en input til rådighed, som vil tillade dit program at gøre det. Åben ``||input:Input||`` værktøjskassen, grib ``||input:lysniveau||`` klodsen og brug den til at erstatte 0et i din ``||variables:sæt læser til||`` variabel klods. Husk at bruge hint hvis du har behov for det.

```block
export let reading = 0
basic.forever(function () {
    // @highlight
    reading = input.lightLevel()
})
```

## Step 5

Åben herefter ``||logic:Logik||`` værktøjskassen og tilføj ``||logic:hvis sandt så||`` klodsen til din **Værktøjkasse**. Åben så ``||input:Input||`` værktøjskassen og træk ``||input:der trykkes på knappen A||`` klods til pladsen mellem ``||logic:hvis||`` og ``||logic:så||`` i dit betingede udsagn. Slut dette trin med at placere ``||logic:hvis||`` ``||input:der trykkes på knappen A||`` ``||logic:så||`` klodsen under ``||variables:sæt læser til||`` ``||input:lysniveau||`` klodsen. Fantastisk gjort!

```block
export let reading = 0
basic.forever(function () {
    reading = input.lightLevel()
    // @highlight
    if (input.buttonIsPressed(Button.A)) {
    }
})
```

## Step 6

Nu har vi behov for at fortælle programmet, hvordan det viser styrken af lyset det måler. For at gøre dette, åben ``||basic:Grundlæggende||`` værktøjskassen, grib ``||basic:vis nummer||`` klodsen og placer den under din ``||logic:hvis||`` ``||input:der trykkes på knappen A||`` ``||logic:så||`` klods. Programmet har nu behov for at vide, hvilket nummer det skal vise. Heldigvis har vi allerede en variabel, der opbevarer lys niveauet som vi kan bruge. Åben ``||variables:Variabler||`` værktøjskassen, grib ``||variables:læser||`` klodsen og placer den til højre for ``||basic:vis nummer||``.

```block
export let reading = 0
if (input.buttonIsPressed(Button.A)) {
    // @highlight
    basic.showNumber(reading)
}
```

## Step 7

Lad os tage et øjeblik til at gennemgå, hvad du har gjort indtil nu. Først lavede du en variabel kaldet ``||variables:læser||`` til at opbevare opdaget ``||input:lysniveau||``. Du brugte så ``||logic:betingede udsagn||`` til at vise ``||input:lysniveau||`` når du ``||input:der trykkes på knappen An||`` på din robot. Til sidst placerede du alle disse klodser indeni en ``||basic:for altid||`` klods til at sikre at dit program konstant kører. Du er ved at blive god til dette!


## Step 8

Tillykke! Din robot kan nu opdage mængden af lys omkring den og vise dig et nummer der repræsenterer styrken af det lys. Hvis du har lyst, download programmet og afprøv det rundt om i dit hjem. The er virkelig sejt, men hvad hvis du ikke vil trykke A knappen hver gang for at få en aflæsning? **Heldigvis er der et trin mere vi kan bruge til at gøre din lysmåler bedre.**

## Step 9

Lad os bruge din robots LED skærm til visuelt at vise niveauet af lys omkring os. Åben ``||led:LED||`` værktøjskassen, grib ``||led:plot bar graph||`` klodsen og placer den lige under din ``||variables:sæt læser til||`` variabel. Grib nu din ``||variables:læser||`` klods fra ``||variables:Variabler||`` værktøjskassen og brug den til at erstatte det første ``||led:0||`` i din ``||led:plot bar graph||`` klods. For det andet ``||led:0||``, vælg det med din mus og skriv 255. Fantastisk! Download programmet igen og se om du kan finde noget der er anderledes ved det efter dette sidste trin. Du gjorder det!

```block
export let reading = 0
basic.forever(function () {
    reading = input.lightLevel()
    led.plotBarGraph(
    reading,
    255
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
})
```