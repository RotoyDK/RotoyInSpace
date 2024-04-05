### @hideIteration true

```template
basic.forever(function () {
})
```

```package
maqueen=github:dfrobot/pxt-maqueen#v1.7.2
```

# Mission 1

## Introduction @showdialog

Kan du hjælpe Soren med at starte roveren og begynde Mars-eksperimenterne?

## Step 1

I **Værktøjkasse** nedenfor bør du have en tom ``||basic:for altid||``-blok. Hvis du ikke kan se en ``||basic:for altid||``-blok i dit **Værktøjkasse**, kan du klikke på ``||basic:Grundlæggende||``-værktøjskassen og tilføje en ``||basic:for altid||``-blok på den måde. Blokken ``||basic:for altid||`` fortæller dit program, hvor ofte det skal gentage de instruktioner, der er placeret i den. I dette tilfælde vil disse instruktioner køre (eller loope), så længe programmet kører.

```blocks
basic.forever(function () {
})
```

## Step 2

For at Søren kan starte roverens eksperimenter, bliver han nødt til at fortælle roveren, hvad den skal gøre, og hvornår den skal gøre det. Lad os starte med at fortælle roveren, at den skal bevæge sig fremad. Gå til værktøjskassen ``||Module1_M1:Mission 1||``, og træk en ``||Module1_M1:gå fremad||``-blok ind i dit **Værktøjkasse**. Lad os nu slippe ``||Module1_M1:gå fremad||``-blokken ind i ``||basic:for altid||``-blokken. 

```blocks
basic.forever(function () {
    // @highlight
    Module1_M1.moveForward(false)
})
```

## Step 3

Godt arbejde! Vores rover er klar til at komme videre, men Mars er en stenet planet. Hvad sker der, hvis en stor sten blokerer roverens vej? Lad os tilføje endnu en instruktion, så roveren kan opdage alt, der blokerer dens vej. Gå til værktøjskassen ``||Module1_M1:Mission 1||``, og træk denne gang blokken ``||Module1_M1:find sort linje||`` og placer den under blokken ``||Module1_M1:gå fremad||``. Brug hint-knappen, hvis du har brug for hjælp.

```blocks
basic.forever(function () {
    Module1_M1.moveForward(false)
    // @highlight
    Module1_M1.findBlackLine(false)
})
```

## Step 4

Okay, nu skal vi fortælle roveren, hvad den skal gøre, når den opdager noget i vejen. For at gøre dette skal du gå til værktøjskassen ``|Module1_M1:Mission 1||`` og denne gang trække blokken ``|Module1_M1:bak og drej||`` ind i dit **Værktøjkasse** og placere den under blokken ``|Module1_M1:find sort linje||``. 

```blocks
basic.forever(function () {
    Module1_M1.moveForward(false)
    Module1_M1.findBlackLine(false)
    // @highlight
    Module1_M1.reverseAndTurn(false)
})
```

## Step 5

Vores rover har nu alle de instruktioner, den skal bruge for at udforske Mars' overflade, men bevægelserne vil ikke virke, før vi beder programmet om at slå dem til. For at gøre dette skal du gå til værktøjskassen ``||RotoyVariables:Variabler||`` og trække en ``||RotoyVariables:tændFor||``-blok ind i rummet til højre for din ``||Module1_M1:gå fremad||``-blok. (Dette vil erstatte ``||logic:falsk||``-blokken, der allerede er der). Gentag nu det samme trin for blokkene ``||Module1_M1:find sort linje||`` og ``||Module1_M1:bak og drej||``. 

```blocks
basic.forever(function () {
    Module1_M1.moveForward(RotoyVariables.turnOnMethod())
    Module1_M1.findBlackLine(RotoyVariables.turnOnMethod())
    Module1_M1.reverseAndTurn(RotoyVariables.turnOnMethod())
})
```

## Step 6

Wow, du gør det godt. Vores rover er klar til at gå på opdagelse, men vi mangler stadig en måde at starte og stoppe den på. Det kan vi bruge knapperne A og B til. Åbn værktøjskassen ``||input:Input||``, og træk to ``||input:når der trykkes på knappen A||``-blokke til dit **Værktøjkasse**. Brug derefter drop down-pilen ved siden af bogstavet ``||input:A||`` på en af blokkene til at ændre det til ``||input:når der trykkes på knappen B||``.

```blocks
input.onButtonPressed(Button.A, function () {
})
input.onButtonPressed(Button.B, function () {
})
```

## Step 7

Så mangler vi bare et skridt mere. Vi skal fortælle roveren, hvad den skal gøre, når vi trykker på knapperne A og B. Åbn værktøjskassen ``||RotoyVariables:Variabler||``, og træk blokken ``||RotoyVariables:sæt tændFor til sand||`` hen til blokken ``||input:knappen A||`` og blokken ``||RotoyVariables:sæt tændFor til falsk||`` hen til blokken ``||input:knappen B||``. Husk, at du har hint-knappen nedenfor, hvis du får brug for den. 

```blocks
input.onButtonPressed(Button.A, function () {
    // @highlight
    RotoyVariables.setTurnOnTrue()
})
input.onButtonPressed(Button.B, function () {
    // @highlight
    RotoyVariables.setTurnOnFalse()
})
```


## Step 8

Wow, du gjorde det! Ikke alene vil din robot bevæge sig, men den vil også undgå farlige forhindringer som sten eller, i dette tilfælde, sorte streger. Før du tester din kode, skal du nok lægge noget mørkt tape eller papir ned på gulvet, som din robot kan finde. Når du er klar, tænder du din robot, forbinder den til din computer og trykker på den lilla knap ``|Hent|`` i nederste venstre hjørne af MakeCode-skærmen. Tid til at gå på opdagelse!