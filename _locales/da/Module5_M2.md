### @hideIteration true

```template
input.onGesture(Gesture.Shake, function () {
    Module5_M2.onShake()
})
Module5_M2.onStart()
```

# Mission 2

## Introduction @showdialog

Kan du opgradere din seismograf og oversætte den hemmelige besked?

## Step 1

Lad os starte med at bruge noget af den kode, vi skabte tidligere til vores shakeCount-program. I din **Værktøjkasse** bør du se ``||input:på ryst||`` blokken og ``||basic:når programmet starter||`` blokken fra dit tidligere program.

```blocks
// @highlight
input.onGesture(Gesture.Shake, function () {
    Module5_M2.onShake()
})
// @highlight
Module5_M2.onStart()
```

## Step 2

Åbn derefter ``||basic:Grundlæggende||`` værktøjskassen, og træk en ``||basic:for altid||`` blok ind i din **Værktøjkasse**. Åbn nu ``||logic:Logik||`` værktøjskassen, tag en ``||logic:hvis ellers||`` blok, og sæt den ind i din ``||basic:for altid||`` blok. Klik til sidst på + i bunden af din ``||logic:hvis ellers||`` blok 3 gange for at gøre dig klar til næste trin.


```block
// @highlight
basic.forever(function () {
    if (true) {
    } else if (false) {
    } else if (false) {
    } else if (false) {
    } else {
    }
})
```

## Step 3

Lad os nu fortælle vores program, hvad det skal gøre, når du ryster din robot. Åbn ``||logic:Logik||`` værktøjskassen, og træk 4 ``||logic:0 = 0||`` blokke til din **Værktøjkasse**. Åbn derefter ``||Module5_M2:Mission 2||`` værktøjskassen, og tilføj 4 ``||Module5_M2:rysteTæller||`` variabler til din **Værktøjkasse**. Tag nu dine 4 ``||Module5_M2:rysteTæller||`` variabler, og placer dem i dine 4 ``||logic:0 = 0||`` blokke, så de erstatter 0'et til venstre.

## Step 4

Du gør det godt! Lad os fortsætte med at opbygge vores betingede udsagn. Tag den første ``||Module5_M2:rysteTæller||`` ``||logic: = 0||`` blok, og sæt den til højre for ``||logic:hvis||`` på den første linje i dit betingede udsagn (i stedet for ``||logic:sand||``). Gentag nu disse trin for de næste 3 ``||logic:ellers hvis||`` arme og placer dem i de tomme felter til højre.

```block
if (Module5_M2.getShakeCount() == 0) {
} else if (Module5_M2.getShakeCount() == 0) {
} else if (Module5_M2.getShakeCount() == 0) {
} else if (Module5_M2.getShakeCount() == 0) {
} else {
}
```

## Step 5

Lad os tage et øjeblik til at gennemgå, hvad vi har gjort indtil nu. Først lånte vi blokkene fra vores første program til at tælle, hvor mange gange din robot bliver rystet. Det tal gemmes i variablen ``||Module5_M2:rysteTæller||``. Derefter placerede vi variablen i en betinget erklæring, som giver os mulighed for at gøre noget med tallet senere. Ret sejt, ikke?

## Step 6

Lad os nu tilføje den hemmelige kode til vores betingede udsagn ved at åbne ``||basic:Grundlæggende||`` værktøjskassen og trække 5 ``||basic:vis streng||`` blokke ind i din **Værktøjkasse**. Placer derefter en ``||basic:vis streng||`` blok under hver del af din betingede sætning, begynd med ``||logic:hvis||`` og arbejd dig ned til ``||logic:ellers||``. ``||basic:vis streng||`` blokkene er gode, fordi alt, hvad du placerer i dem, vil blive vist på din robots skærm.

```block
if (Module5_M2.getShakeCount() == 0) {
    basic.showString("Hello!")
} else if (Module5_M2.getShakeCount() == 0) {
    basic.showString("Hello!")
} else if (Module5_M2.getShakeCount() == 0) {
    basic.showString("Hello!")
} else if (Module5_M2.getShakeCount() == 0) {
    basic.showString("Hello!")
} else {
    basic.showString("Hello!")
}
```

## Step 7

Du er næsten færdig. Start fra toppen og erstat **Hello!** i ``||basic:vis streng||`` blokken med et **H** . Gå derefter ned til den næste ``||basic:vis streng||`` blok, og erstat **Hello!** med et **E** . Fortsæt nedad, og tilføj et **L** , et **O** og et **?** i de resterende ``||basic:vis streng||`` blokke. Til sidst erstatter du de resterende 0'er i ``||logic:hvis||`` og ``||logic:ellers hvis||`` blokkene med en **2**'er, **3**'er, **4**'er og **5**'er.

```block
if (Module5_M2.getShakeCount() == 2) {
    basic.showString("H")
} else if (Module5_M2.getShakeCount() == 3) {
    basic.showString("E")
} else if (Module5_M2.getShakeCount() == 4) {
    basic.showString("L")
} else if (Module5_M2.getShakeCount() == 5) {
    basic.showString("O")
} else {
    basic.showString("?")
}
```

## Step 8

Incredible! Let’s review what you did. First, you used the ``||input:på ryst||`` block to record the number of times your robot was shaken. That number was stored in the variable ``||Module5_M2:rysteTæller||``. You then used that variable in a conditional statement that will show a specific letter depending on the number stored. Great Job!

## Step 9

Det er tid til at finde den hemmelige kode. Ryst din robot følgende antal gange, og vent 5 sekunder mellem hver tur 

Drej 1 - 2 rystelser;
Drej 2 - 3 rystelser;
Drej 3 - 4 rystelser;
Drej 4 - 4 rystelser;
Drej 5 - 5 rystelser;

**Husk at vente 5 sekunder mellem hver tur!**




