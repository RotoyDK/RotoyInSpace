### @hideIteration true

# Mission 5

## Introduction @showdialog

Beat the computer in a game of Rock, Paper, Scissors!

## Step 1

To start, open the ``||input:Input||`` toolbox and add an ``||input:on shake||`` block to your **Workspace**. This block works just like the ``||input:A||`` and ``||input:B||`` buttons that you used in other missions, but instead of pressing a button to start your program, here you will give your robot a gentle shake.

```blocks
// @highlight
input.onGesture(Gesture.Shake, function () {
})
```


## Step 2

Now, let's open the ``||Module1_M5:Mission 5||`` toolbox, grab the ``||Module1_M5:set hand to random rock, paper or scissors||`` block and drag it into the ``||input:on shake||`` block already in your **Workspace**.

```blocks
let hand: Module1_M5.RockPaperScissors = null
input.onGesture(Gesture.Shake, function () {
    // @highlight
    hand = Module1_M5.setRandomHand()
})
```

## Step 3

You are doing really well! Let's take a minute to look at that last block you made in more detail. First, you added a ``||variable:variable||`` which acts like a storage box. Then, you added a ``||Module1_M5:function||`` that picks random hand.

## Step 4

Ok, now we have to tell the program what to do when it selects rock, paper or scissors. To do this, we are going to use a conditional statement. Click on the ``||logic:Logic||`` toolbox and place a ``||logic:if true then else||`` block right under the ``||Module1_M5:set hand to random rock, paper or scissors||`` block you added earlier, and click plus button under ``||logic:else||``. Did you notice that there are 3 places to insert blocks in your conditional statement? What do you think we might place in each of those places?

```blocks
let hand: Module1_M5.RockPaperScissors = null
input.onGesture(Gesture.Shake, function () {
    hand = Module1_M5.setRandomHand()
    // @highlight
    if (true) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
```

## Step 5

Now its time to add our three game pieces. Open the ``||logic:Logic||`` toolbox, drag ``||logic:0 = 0||`` block and place it next to ``||logic:if||`` in conditational statement. Then replace the 1st 0 with ``||variable:hand||`` variable from ``||variable:Variables||`` toolbox. Replace 2nd 0 with ``||Module1_M5:Rock||``. Repeat this process for ``||logic:else if||`` part, and use ``||Module1_M5:Paper||`` instead.

```block
let hand = 0
if (hand == Module1_M5.getHand(Module1_M5.RockPaperScissors.Rock)) {
} else if (hand == Module1_M5.getHand(Module1_M5.RockPaperScissors.Paper)) {
} else {
}
```

## Step 6

Open the ``||basic:Basic||`` toolbox and drag a ``||basic:show leds||`` block under the ``||logic:if||`` arm of your conditional statement. Next, do the same thing for the ``||logic:else if||`` and ``||logic:else||`` arms until you have a total of three ``||basic:show leds||`` blocks in your conditional statement.

```blocks
let hand: Module1_M5.RockPaperScissors = null
// @hide
hand = Module1_M5.setRandomHand()
if (hand == Module1_M5.getHand(Module1_M5.RockPaperScissors.Rock)) {
    // @highlight
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
} else if (hand == Module1_M5.getHand(Module1_M5.RockPaperScissors.Paper)) {
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
```

## Step 7

Are you ready to get creative? Great, because it's time to digitally draw our game pieces. Go to the first ``||basic:show leds||`` block and click on the small squares to 'draw' your *paper* game piece. When you're done, go to the next ``||basic:show leds||`` block (under ``||logic:else if||``) and this time 'draw' your *rock* game piece. Finally, in the last ``||basic:show leds||`` block (``||logic:else||``) click on the small square to 'draw' your *scissors* game piece. We encourage you to be as creative as you like, but we've placed some samples in the hint if you need them. 

```blocks
let hand: Module1_M5.RockPaperScissors = null
// @hide
hand = Module1_M5.setRandomHand()
if (hand == Module1_M5.getHand(Module1_M5.RockPaperScissors.Rock)) {
    // @highlight
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
} else if (hand == Module1_M5.getHand(Module1_M5.RockPaperScissors.Paper)) {
    // @highlight
    basic.showLeds(`
        . . . . .
        . # # # #
        # # # # #
        # # # # .
        . # # # .
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
```

## Step 8

Before we move on, let's take a closer look at our program so far. First, we have ``||input:on shake||`` block which starts our program. Next, we randomly pick a hand between rock, paper and scissors, which is stored in a ``||variable:variable||`` called ``||variable:hand||``. The ``||logic:conditional statement||`` will then look at the stored hand and show the ``||basic:led||`` game piece that matches it on your robot's screen. Incredible! You have used inputs, variables, conditional statements and a bit of logic to build your own computer game.

```blocks
let hand: Module1_M5.RockPaperScissors = null
input.onGesture(Gesture.Shake, function () {
    hand = Module1_M5.setRandomHand()
    if (hand == Module1_M5.getHand(Module1_M5.RockPaperScissors.Rock)) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (hand == Module1_M5.getHand(Module1_M5.RockPaperScissors.Paper)) {
        basic.showLeds(`
            . . . . .
            . # # # #
            # # # # #
            # # # # .
            . # # # .
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 500, 500, 255, 0, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    }
})
```

## Step 8

It's time to challenge the computer. Win 2 out of 3 games of rock, paper, and scissors to complete the mission and continue Lise and Soren's Jupiter Challenge. You can shake your robot gently after each game to reset it. Good luck!