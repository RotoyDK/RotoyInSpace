### @hideIteration true

```customts
Module1_M2.strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
Module1_M2.led0 = Module1_M2.strip.range(0, 1)
Module1_M2.led1 = Module1_M2.strip.range(1, 1)
Module1_M2.led2 = Module1_M2.strip.range(2, 1)
Module1_M2.led3 = Module1_M2.strip.range(3, 1)
```

```package
maqueen=github:dfrobot/pxt-maqueen#v1.7.2
neopixel=github:microsoft/pxt-neopixel#v0.7.3
```

# Mission 2

## Introduction @showdialog

Opdag hulens hemmeligheder ved at bruge din rovers lys.

## Step 1

<!-- Din robot har to knapindgange, ``||input:A||`` og ``||input:B||``. Du kan finde deres programmeringsblokke i **Værktøjkasse** under ``||input:Input||``. Hvis du klikker på værktøjskassen ``||input:Input||``, får du vist alle de tilgængelige programmeringsblokke. Prøv det nu! -->

Din robot har to input knapper, ``||input:A||`` og ``||input:B||``. Du kan finde deres programmeringsklodser i **Værktøjkasse** under ``||input:Input||``. Klik på ``||input:Input||`` og du vil se alle tilgængelige programmeringsklodser. Prøv det nu!

## Step 2 @showhint

<!-- For at starte dit program skal du trække to ``||input:når der trykkes på knappen A||``-blokke ind i **Værktøjkasse**. Lige nu er begge blokke tildelt A-knappen, men det kan du ændre ved at trykke på den lille pil til højre for bogstavet ``||input:A||`` og ændre det til ``||input:B||``. -->

Til at starte dit program træk to ``||input:når der trykkes på knappen A||`` klodser ind i **Værktøjkasse**. Lige nu er begge klodser tildelt til knappen A, men du kan justere det ved at trykke på den lille pil til højre for bogstavet ``||input:A||`` og ændre det til ``||input:B||``.

```blocks
input.onButtonPressed(Button.A, function () {
})
input.onButtonPressed(Button.B, function () {
})
```

## Step 3

<!-- Du skulle nu have ``||input:to input||``-knapblokke i din **Værktøjkasse**, en til ``||input:A||`` og en til ``||input:B||``. Du har måske bemærket, at pladsen inde i knapblokkene ligner en puslespilsbrik. Dette rum giver dig mulighed for at tilføje eller fjerne blokke for at bygge dit program! Alt, hvad du tilføjer til knapblokken, kører kun, når du trykker på den pågældende knap. -->

Du bør nu have ``||input:to input knap||`` klodser i dit **Værktøjkasse**, en for ``||input:A||`` og en for ``||input:B||``. Du har måske bemærket at hullet i klodsen ligner en puslespilsbrik. Dette hul tillader dig at tilføje eller fjerne klodser til at bygge dit program! Alt du tilføjer til denne knap klods vil kun køre når du trykker den knap.

## Step 4

<!-- Nu har vi vores to knapblokke, så lad os få dem til at gøre noget. Lad os klikke på værktøjskassen ``||Module1_M2:Mission 2||`` og trække to af ``||Module1_M2:Hulelys||``-blokkene ind i vores **Værktøjkasse**. Denne blok vil simulere din robot, der udfører eksperimenter på Mars. -->

Nu da vi har vores to knap klodser, lad os få dem til at gøre noget. Lad os klikke på ``||Module1_M2:Mission 2||`` værktøjskassen og trække to af ``||Module1_M2:Hule lys||`` klodserne ind i vores **Værktøjkasse**. Denne klods vil simulere din robot der laver et eksperiment på Mars.

## Step 5

<!-- Skift derefter en af ``||Module1_M2:Hulelys||``-blokkene til ``||logic:sand||``. Nu skal du gøre det samme med logikblokken ``||logic:falsk||`` i den anden ``||Module1_M2:Hulelys||``-blok. Blokken ``||logic:sand||`` fungerer som et 'on', og blokken ``||logic:falsk||`` fungerer som et 'off'. Klik på hint-knappen, hvis du sidder fast. -->

Herefter, ændr en af ``||Module1_M2:Hule lys||`` klodserne i feltet efter ordet ’lys’ til ``||logic:sand||``. Gør nu det samme ``||logic:falsk||`` logikklodsen in den anden ``||Module1_M2:Hule lys||`` klods. Klodsen med ``||logic:sand||`` opfører sig som en ’tænd’ og klodsen med ``||logic:falsk||`` opfører sig som en ’sluk’. Klik på hint knappen hvis du sidder fast.

```blocks
Module1_M2.caveLights(true)
Module1_M2.caveLights(false)
```

## Step 6

<!-- Du har gjort et godt stykke arbejde indtil nu! Tag nu ``||logic:sand||`` ``||Module1_M2:Hulelys||``-blokken, og læg den i knappen ``||input:A||``-blokken. Når det er gjort, gør du det samme med ``||logic:falsk||`` ``||Module1_M2:Hulelys||``-blokken og placerer den i knappen ``||input:B||``-blokken.  -->

Du har gjort et godt stykke arbejde ind til videre! Grib nu ``||logic:sand||`` ``||Module1_M2:Hule lys||`` klodsen og drop den i knap ``||input:A||`` klodsen. Når det er gjort, gør det samme med ``||logic:falsk||`` ``||Module1_M2:Hule lys||`` klodsen og drop den i knap ``||input:B||`` klodsen.

## Step 7

<!-- Wow, du gjorde det! Lad os tage et øjeblik til at gennemgå, hvad du har programmeret indtil nu. Du tog to ``||input:input||``-blokke og tildelte dem til knapperne ``||input:A||`` og ``||input:B||``. Du tildelte derefter to variabler kaldet ``||Module1_M2:Hulelys||`` til disse knapper, en ``||logic:sand||`` og en ``||logic:falsk||``. Klik på hint-knappen for at få den fulde kode, hvis du føler, at du sidder fast. -->

Fantastisk, du gjorder det! Lad os tage et øjeblik til at gennemgå, hvad du har programmet ind til nu. Du tog to ``||input:Input||`` klodser og tildelte dem knap ``||input:A||`` og ``||input:B||``. Du tildelte så to variabler kaldet ``||Module1_M2:Hule lys||`` til disse knapper, en ``||logic:sand||`` og en ``||logic:falsk||``. Klik på hint knappen for den fulde kode, hvis du synes du sidder fast.

```blocks
input.onButtonPressed(Button.A, function () {
    Module1_M2.caveLights(true)
})
input.onButtonPressed(Button.B, function () {
    Module1_M2.caveLights(false)
})
```

## Step 8

<!-- Godt gået! Det er tid til at teste din kode. Tænd for din robot, tilslut den til din computer, og tryk på den lilla knap ``|Hent|`` i nederste venstre hjørne af MakeCode-skærmen. Prøv at trykke på knapperne ``||input:A||`` og ``||input:B||`` og se, om du kan beskrive, hvad der sker. Når du er færdig, så glem ikke at gå tilbage og færdiggøre Soren's Epic Adventure. -->

Godt gjort! Det er tid til at teste din kode. Tænd din robot, tilslut den din computer og tryk på den lilla ``|Hent|`` knap i nederste venstre hjørne af MakeCode skærmen. Prøv at trykke ``||input:A||`` og ``||input:B||`` knapperne og se om du kan beskrive, hvad der sker. Når du er færdig så glem ikke at gå tilbage og færdiggør Sørens Episke Eventyr.