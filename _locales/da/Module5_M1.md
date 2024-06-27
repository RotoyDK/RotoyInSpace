### @hideIteration true

```template
let rysteTælle = 0
let startTid = 0
```

# Mission 1

## Introduction @showdialog

Hjælp Lise med at programmere en seismograf og registrere måneskælvene!

## Step 1

Lise skal registrere antallet af måneskælv. Lad os hjælpe hende ved at programmere en seismograf. Åbn ``||input:Input||`` værktøjskassen, og tilføj en ``||input:på ryst||`` blok til din **Værktøjkasse**. Denne blok fortæller din robot, at den skal gøre noget, når du ryster den. Du kan endda få den til at gøre forskellige ting afhængigt af, hvor mange gange den bliver rystet. Sejt, ikke?

```block
// @highlight
input.onGesture(Gesture.Shake, function () {
})
```

## Step 2

Nu skal vi tilføje en særlig kodeblok, som nulstiller vores seismograf hvert tredje sekund. Tag først blokken ``||variables:set rysteTæller til 0||`` fra ``||variables:Variabler||`` værktøjskassen, og placer den under blokken ``||input:på ryst||`` i din **Værktøjkasse**. Åbn derefter ``||Module5_M1:Mission 1||`` værktøjskassen, tag ``||Module5_M1:nultstil rysteTæller hver 0s ved 0 med 0||`` blokken og placer den i stedet for 0 i ``||variables:set rysteTæller til 0||``. Før du går videre, skal du ændre 0'erne til 3'ere, placere variablen ``||variables:startTid||`` på 2. plads, variablen ``||variables:rysteTæller||`` på 3. plads fra ``||variables:Variabler||`` værktøjskassen for at færdiggøre vores nulstillingsblok.


```block
input.onGesture(Gesture.Shake, function () {
    export let startTid = 0
    export let rysteTæller = 0
    // @highlight
    rysteTæller = Module5_M1.resetShakeCounter(3, startTid, rysteTæller)
})
```

## Step 3

Godt arbejde! Reset-blokken er vigtig, for uden den ville din robot bare blive ved med at tælle jordskælv i al evighed. Det ville være en træt robot! Lad os nu begynde at arbejde på tælle-delen af vores program. Klik på next-knappen for at gå videre til næste trin.

## Step 4

Okay, lad os starte med at åbne ``||variables:Variabler||`` værktøjskassen! Denne gang tager vi to blokke og placerer dem under den specielle nulstillingsblok, som vi tilføjede i sidste trin. Først tilføjer du ``||variables:set rysteTæller til 0||`` blok og ændre ``||variables:rysteTæller||`` variablen til ``||variables:startTid||`` ved hjælp af pilen til højre. Tag derefter en ``||variables:ændr rysteTæller af 1||`` blok fra ``||variables:Variabler||`` værktøjskassen, og placer den under ``||variables:startTid||`` variablen. Husk at klikke på lyspæreknappen nedenfor, hvis du har brug for lidt hjælp.


```block
input.onGesture(Gesture.Shake, function () {
    export let startTid = 0
    export let rysteTæller = 0
    rysteTæller = Module5_M1.resetShakeCounter(3, startTid, rysteTæller)
    // @highlight
    startTid = 0
    // @highlight
    rysteTæller += 1
})
```

## Step 5

Lad os afslutte ``||input:på ryst||`` del af vores program, før vi tager et øjeblik til at gennemgå vores program indtil videre. Åbn ``||input:Input||`` værktøjskassen, og tag fat i blokken med ``||input:køretid (ms)||``. For at finde den skal du klikke på knappen ``||input:mere||``, der vises, når du har åbnet ``||input:Input||`` værktøjskassen. Tag blokken med ``||input:køretid (ms)||``, og placer den i set ``||variables:startTid||`` blokken i stedet for ``||variables:0||``.

```block
input.onGesture(Gesture.Shake, function () {
    export let startTid = 0
    export let rysteTæller = 0
    rysteTæller = Module5_M1.resetShakeCounter(3, startTid, rysteTæller)
    // @highlight
    startTid = input.runningTime()
    rysteTæller += 1
})
```

## Step 6

Dette er et godt tidspunkt at gennemgå, hvad du har gjort indtil nu. Først brugte du en ``||input:på ryst||`` blok til at fortælle din robot, at den skal reagere på enhver rystelse, den mærker. Derefter brugte du en særlig ``||Module5_M1:nultstil||`` blok til at genstarte dit program hvert 3. sekund. Dernæst brugte du ``||variables:variabler||`` til at indstille tiden til millisekunder og fortalte programmet, at det skulle lægge en til tællingen, hver gang det blev rystet. Så sejt!

## Step 7

Vores seismograf er næsten færdig, men vi mangler stadig at fortælle robotten, hvad den skal nulstille til hvert 3. sekund. Vi har faktisk allerede alle de rigtige blokke i vores **Værktøjkasse**. Se på vores ``||basic:når programmet starter||`` blok. Her har vi en ``||variables:set startTid til 0||`` og en ``||variables:set rysteTæller til 0||``.

```blocks
startTid = 0
rysteTæller = 0
```

## Step 8

Har du bemærket, at der mangler noget i vores program? Det er helt rigtigt! Vi mangler stadig at fortælle programmet, at det skal vise os, hvor mange skælv det har talt. For at gøre det skal du åbne ``||basic:Grundlæggende||`` værktøjskassen, tage en ``||basic:vis nummer 0||`` blok og placere den i bunden af ``||input:på ryst||`` kodeblokken. Til sidst åbner du ``||variables:Variabler||`` værktøjskassen, tager ``||variables:rysteTæller||`` variablen og placerer den i ``||basic:vis nummer 0||`` blokken. Godt arbejde!

```blocks
input.onGesture(Gesture.Shake, function () {
    export let startTid = 0
    export let rysteTæller = 0
    rysteTæller = Module5_M1.resetShakeCounter(3, startTid, rysteTæller)
    startTid = input.runningTime()
    rysteTæller += 1
    // @highlight
    basic.showNumber(rysteTæller)
})
startTid = 0
rysteTæller = 0
```

## Step 9

Din seismograf er nu klar til at begynde at tælle måneskælv. Download programmet til din robot, og giv den et par rystelser! Har tallet ændret sig? Fedt nok! Hav det sjovt, men glem ikke, at Lise venter.



