### @hideIteration true

# Mission 2

## Introduction @showdialog

Undgå rumstenene og hjælp Lise med at lande på den Fortabte Planet!

## Step 1

At lande på den Fortabte Planet kommer til at blive svært. Lad os se om vi kan hjælpe Lise ved at bygge et program som vil lande hendes raket sikkert på overflade. Vi starter med ``||basic:når programmet starter||`` klodsen fra din **Værktøjkasse**.

```blocks
```

## Step 2

Som det næste skal du åbne ``||variables:Variabler||`` værktøjskassen og klik på ``||variables:Opret en variabel||`` knappen tæt ved toppen. Dette skulle gerne få en boks til at vise sig på din skærm, som beder dig om at navngive den nye variabel. Skriv ``||variables:Måne_modul||`` og tryk ok. Klik på ``||variables:Variabler||`` værktøjskassen igen og du bør nu se en klods som hedder ``||variables:sæt Måne_modul til 0||``. Grib klodsen og placer den under din ``||basic:når programmet starter||`` klods. Du husker måske at variabler er som bokse, der holder ting programmet kan bruge senere. Vi vil bruge denne variabel til at ’holde’ placeringen af rumskibet når spillet starter. Ryk til næste trin for at se, hvordan vi vil gøre dette.

```blocks
export let Lunar_module = 0
// @highlight
Lunar_module = 0
```

## Step 3

Til dette program har vi brug for en visuel måde at repræsentere stenene og andre farlige ting som svæver rundt om the Fortabte Planet som kan gøre skade på Lises skib. Vi kan gøre dette ved at bruge ``||game:Sprites||``. I programmering er ``||game:Sprites||`` grafiske eller visuelle objekter, som kan rykke og interagere med andre Sprites. Hvis du har spillet videospil, har du sikkert spillet med Sprites!

## Step 4

Åben ``||game:Spil||`` værktøjskassen og find ``||game:skab sprite på x: 2 y: 2||``. Bemærkede du at denne klods har et nummer tildelt til både X og Y? Disse numre er vigtige fordi de fortæller dit program, hvor spriten vil dukke op på din skærm. Ok, træk denne klods til din ``||variables:Måne_modul||`` variabel og erstat 0. Til sidst skal vi ændre start positionen af vores raket ved at ændre spritens ``||game:y værdi fra 2 til 4||``.

```blocks
export let Lunar_module: game.LedSprite = null
// @highlight
Lunar_module = game.createSprite(2, 4)
```

## Step 5

Vi er næsten færdig med hoveddelen af vores landings spil. Der er bare en speciel klods mere, som vi mangler at tilføje til ``||basic:når programmet starter||`` klodsen før det er færdigt. Åben ``||Module2_M2:Mission 2||`` værktøjskassen, grib ``||Module2_M2:spil spillet med||`` klodsen og træk den under din ``||variables:sæt Måne_modul til||`` variabel. Herefter, træk ``||variables:Måne_modul||`` fra ``||variables:Variabler||`` værktøjskassen og placer den til højre for ``||Module2_M2:spil spillet med||``. Denne kæde af klodser indeholder avanceret kode for dit program, som vi har lavet for dig. Bare roligt, du kommer til at programmere mere avanceret kode på ingen tid!

```blocks
export let Lunar_module: game.LedSprite = null
Lunar_module = game.createSprite(2, 4)
// @highlight
Module2_M2.playGame(Lunar_module)
```

## Step 6

Dette virker som et godt tidspunkt at gennemgå, hvad du have gjort indtil nu. Først brugte du en ``||basic:når programmet starter||`` klods til at fortælle din robot, hvornår den skal begynde programmet. Du brugte så en ``||variables:variabel||`` til at opbevare start positionen for din raket når spillet starter. For faktisk at vise din raket på skærmen brugte du grafiske elementer kaldet ``||game:sprites||``, som du satte til positionen x:2 og y:4. til sidst tilføjede du en speciel klods, vi har skabt til kaldet ``||Module2_M2:spil spillet med||``. Meget sejt!

## Step 7

Vores landingsspil er næsten færdigt, men vi mangler stadigvæk at tilføje en måde at flytte vores raket på skærmen. Åben ``||input:Input||`` værktøjskassen og træk både en ``||input:når der trykkes på knappen A||`` og en ``||input:når der trykkes på knappen B||`` til din **Værktøjkasse**. Åben herefter ``||game:Spil||`` værktøjskassen og træk **to** ``||game:sprite ændr x med 1||`` klods til din **Værktøjkasse**. Vi vil bruge disse klodser til at rykke vores raket så ændre ``||variable:sprite||`` til ``||variables:Måne_modul||`` ved at bruge pilen til højre.

```block
export let Lunar_module: game.LedSprite = null
// @highlight
input.onButtonPressed(Button.A, function () {
})
// @highlight
input.onButtonPressed(Button.B, function () {
})
// @highlight
Lunar_module.change(LedSpriteProperty.X, 1)
// @highlight
Lunar_module.change(LedSpriteProperty.X, 1)
```


## Step 8

Lad os afslutte vores program ved at droppe en af ``||game:Måne_modul ændr med 1||`` klods i ``||input:der trykkes på knappen A||`` klodsen. Gentag dette trin, men denne gang for ``||input:der trykkes på knappen B||`` klodsen. Til sidst, ændre ``||game:1||`` i ``||input:der trykkes på knappen A||`` klodsen til ``||game:-1||``. Dette vil tillade dig at rykke din raket til venstre og højre mens du spiller dit spil. Sådan du gjorder det! Godt arbejde!

```blocks
export let Lunar_module: game.LedSprite = null
// @highlight
input.onButtonPressed(Button.A, function () {
    Lunar_module.change(LedSpriteProperty.X, -1)
})
// @highlight
input.onButtonPressed(Button.B, function () {
    Lunar_module.change(LedSpriteProperty.X, 1)
})
Lunar_module = game.createSprite(2, 4)
Module2_M2.playGame(Lunar_module)
```

## Step 9

Er du klar til at hjælpe Lise med at lande hendes raket på den Fortabte Planet? Download programmet ned i din robot og se om du kan undvige stenene ved at rykke dig til venstre og højre med A og B knapperne. Men pas på disse sten vil kun blive hurtigere det længere du spiller! Din score vil komme til syne ved slutningen af spillet og du kan starte et nyt spil ved at trykke A og B knapperne samtidigt. Hyg dig!

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