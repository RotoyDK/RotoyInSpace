### @hideIteration true

```template
let score = 0
let player: game.LedSprite = null
player = game.createSprite(2, 4)
let speed = 1000
let maze = [game.createSprite(0, 0)]

input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})

basic.forever(function () {
    for (let wall of maze) {
    wall.change(LedSpriteProperty.Y, 1)
    }
    maze = Module4_M1.createMazeLine(maze)
    basic.pause(speed)
})
```

# Mission 1

## Introduktion @showdialog

Kan du hjælpe Lise og Søren med at få sonden under kontrol igen?

## Step 1

Voyager-sonden er på vej tilbage til Jorden. For at komme derhen skal den passere gennem en masse rumskrot! Vi vil simulere dette ved at programmere et labyrintspil! For at få dig i gang har vi tilføjet et par blokke til din  **Arbejdsområde**. Kan du se blokkene med knapperne ``||input:A||`` og ``||input:B||``? De giver dig mulighed for at flytte dit skib til venstre og højre, når du bevæger dig gennem labyrinten. På samme måde fortæller ``||basic:on start||`` blokken programmet, hvor dit skib skal placeres, når spillet begynder. Sejt, ikke sandt?

```blocks
export let score = 0
export let player: game.LedSprite = null
player = game.createSprite(2, 4)
export let speed = 1000
export let maze = [game.createSprite(0, 0)]

input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
```

## Step 2

Nu, hvor skibets bevægelse og startposition er på plads, vil vi fokusere på at få spillet til at fungere. 
1.  Først, åben ``||logic:Logic||``-værktøjskassen og placer en ``||logic:if true then||``-blok inde i ``||basic:forever||``-blokken, lige under``||game:wall change y by 1||`` blok. 
2.	Gå derefter tilbage til ``||logic:Logic||``-værktøjskassen og tag denne gang en ``||logic:if true then else||``-blok. . Placer den blok inde i den ``||logic:if true then||`` blok, du lige har tilføjet. . 

Du kan klikke på pæren, hvis du har brug for et hint.


```block
export let maze: game.LedSprite[] = 0
export let speed = 0

basic.forever(function () {
    for (let wall of maze) {
        wall.change(LedSpriteProperty.Y, 1)
        // @highlight
        if (true) {
            // @highlight
            if (true) {

            } else {

            }
        }
    }
    maze = Module4_M1.createMazeLine(maze)
    basic.pause(speed)
})
```

## Step 3

Vores spil går ud på at styre et rumskib gennem en labyrint, der hele tiden ændrer sig. Hvis rumskibet rører ved en væg i labyrinten, slutter spillet og viser dig en score. 
1.	Åben ``||logic:Logic||``-værktøjskassen, og slip en ``||logic:0 = 0||`` blok i dit **Arbejdsområde**. 
2.	Åben ``||game:Game||`` værktøjskassen, tag en ``||game:sprite x||`` blok, og læg den i det første 0 i din ``||logic:0 = 0||`` blok. 
3.	Skift derefter sprite til ``||variables:wall||`` variablen , og indstil den til``||game:y||``.
4.	Til sidst ændrer du det sidste nul til et 4.

```block
export let maze: game.LedSprite[] = 0
export let speed = 0

basic.forever(function () {
    for (let wall of maze) {
        wall.change(LedSpriteProperty.Y, 1)
        // @highlight
        if (wall.get(LedSpriteProperty.Y) == 4) {
            if (true) {

            } else {

            }
        }
    }
    maze = Module4_M1.createMazeLine(maze)
    basic.pause(speed)
})
```

## Step 4

Lad os fortsætte med at bygge vores bevægelige labyrintvægge.
1. Først tager du blokken ``||logic:wall y = 4||`` og indsætter den i din første betinget udtryk mellem ``||logic:if||`` og ``||logic:then||``. 
2. Nu, åben ``||game:Game||`` værktøjskassen, og træk blokken``||game:is sprite touching||`` ud. Indsæt den efter ``||logic:if||`` og ``||logic:then||`` i det andet betinget udtryk. 
3. Skift sprite-variablen til ``||variables:wall||`` ved hjælp af pull down-pilen.
4. Til sidst åbner du værktøjskassen ``||variables:Variables||``,tager ``||variables:player||``-blokken og placerer den på pladsen efter ``||game:is sprite touching||``. 


```block
export let maze: game.LedSprite[] = 0
export let speed = 0

basic.forever(function () {
    for (let wall of maze) {
        wall.change(LedSpriteProperty.Y, 1)
        // @highlight
        if (wall.get(LedSpriteProperty.Y) == 4) {
            // @highlight
            if (wall.isTouching(player)) {

            } else {

            }
        }
    }
    maze = Module4_M1.createMazeLine(maze)
    basic.pause(speed)
})
```

## Step 5

I dette trin fortæller vi programmet, hvad det skal gøre, når en spiller rører ved en væg.
1.	Åben ``||game:Game||`` værktøjskassen, tag en ``||game:set score 0||`` blok, og sæt den under ``||logic:if||`` ``||game:is wall touching player||`` blokken.
2.	Så åbner du ``||variables:Variables||`` værktøjskassen, og placer en  ``||variables:score||`` blok inde i``||game:set score||`` blokken. 
3.	Til sidst åbner du ``||game:Game||`` værktøjskassen igen and og trækker``||game:game over||`` blokken ud. Placer den under   ``||game:set score score||`` blokken du lige har tilføjet.

```block
export let maze: game.LedSprite[] = 0
export let speed = 0
export let score = 0

basic.forever(function () {
    for (let wall of maze) {
        wall.change(LedSpriteProperty.Y, 1)
        if (wall.get(LedSpriteProperty.Y) == 4) {
            if (wall.isTouching(player)) {
                // @highlight
                game.setScore(score)
                // @highlight
                game.gameOver()
            } else {

            }
        }
    }
    maze = Module4_M1.createMazeLine(maze)
    basic.pause(speed)
})
```

## Step 6

Lad os tage et øjeblik til at gennemgå vores fremskridt indtil nu. Først brugte du en ``||basic:forever||``-blok til at sikre, at koden altid ville køre. Derefter brugte du en kombination af ``||game:game||`` blokke og ``||logic:conditional statements||`` til at få labyrintens vægge til at bevæge sig. Du definerede også, hvad der skulle ske, hvis spillerens skib rørte en ``||variables:wall||`` - ``||game:spillet ville slutte||`` , og der ville blive vist en ``||game:score||``. Godt arbejde!

## Step 7

Så vi har fået labyrinten til at bevæge sig og besluttet, hvad der sker, når spilleren rører ved en væg. Nu skal vi beslutte, hvad der sker, hvis spilleren ikke rører en væg!
1. Åben ``||game:Game||``-værktøjskassen, og tag en ``||game:delete sprite||`` blok. Placer den blok under  ``||logic:else||`` i vores betingede udtryk. . 
2. Skift ``||variables:sprite||`` til ``||variables:wall||`` ved hjælp af pull down-pilen.
3. Åbn nu værktøjskassen ``||variables:Variables||``, og tag en ``||variables:change sprite by 1||``-blok. Placer den unnder blokken``||game:delete wall||``, som du lige har tilføjet. 
4. Afslut dette trin med at ændre ``||variables:sprite||`` til ``||variables:score||`` ved hjælp af pull down-pilen.

```block
export let maze: game.LedSprite[] = 0
export let speed = 0
export let score = 0

basic.forever(function () {
    for (let wall of maze) {
        wall.change(LedSpriteProperty.Y, 1)
        if (wall.get(LedSpriteProperty.Y) == 4) {
            if (wall.isTouching(player)) {
                game.setScore(score)
                game.gameOver()
            } else {
                // @highlight
                wall.delete()
                // @highlight
                score += 1
            }
        }
    }
    maze = Module4_M1.createMazeLine(maze)
    basic.pause(speed)
})
```

## Step 8

Vores labyrintspil er næsten færdigt, og du har gjort et fantastisk stykke arbejde indtil nu. Lad os afslutte stærkt! 
1.	Åbn værktøjskassen ``||arrays:Arrays||``, og tilføj  ``||arrays:list remove value at 0||`` blok under ``||variables:change sprite by 1||`` blok.
2.	Åbn derefter værktøjskassen ``||arrays:Arrays||`` igen, og tilføj denne gang ``||arrays:list find index of||``-blokken.
3.	Tilføj ``||arrays:list find index of||`` blok til ``||arrays:list remove value at||`` block ved at indsætte den, hvor 0 er.
4.	Åbn værktøjskassen ``||variables:Variables||``, og tag fat i ``||variables:wall||``-blokken. . Placer den i slutningen af  ``||arrays:list find index of||`` blok. 
5.	Til sidst, ændrer ``||variables:list||`` variablen til ``||variables:maze||`` ved hjælp af pilen.    

```block
export let maze: game.LedSprite[] = 0
export let speed = 0
export let score = 0

basic.forever(function () {
    for (let wall of maze) {
        wall.change(LedSpriteProperty.Y, 1)
        if (wall.get(LedSpriteProperty.Y) == 4) {
            if (wall.isTouching(player)) {
                game.setScore(score)
                game.gameOver()
            } else {
                wall.delete()
                score += 1
                // @highlight
                maze.removeAt(maze.indexOf(wall))
            }
        }
    }
    maze = Module4_M1.createMazeLine(maze)
    basic.pause(speed)
})
```

## Step 9

Wow, det var noget af en superkodning fra din side! Du har brugt betingede udsagn, variabler, spilelementer og endda arrays til at bygge et labyrintundgåelsesspil. Gå videre og download programmet til din robot, og se, om du kan flyve gennem rumskrottet. Dette var dit indtil nu sværeste program, og du gav aldrig op. Godt arbejde!


