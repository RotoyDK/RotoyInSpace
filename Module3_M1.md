### @hideIteration true

```ghost
export let hand: number = 0
```

```template
basic.forever(function () {
})
```

# Mission 3

## Introduction @showdialog

Beat the computer in a game of Rock, Paper, Scissors!

## Step 1

To start, open the ``||input:Input||`` toolbox and add an ``||input:on shake||`` block to your **Workspace**. This block works just like the ``||input:A||`` and ``||input:B||`` buttons that you used in other missions, but instead of pressing a button to start your program, here you will give your robot a gentle shake.

```block
// @highlight
input.onGesture(Gesture.Shake, function () {
})
```


## Step 2

Now, let's open the ``||Module3_M1:Mission 1||`` toolbox, grab the ``||Module3_M1:set hand to random rock, paper or scissors||`` block and drag it into the ``||input:on shake||`` block already in your **Workspace**. This block uses a bit of math to randomly choose a different game piece each time you shake your robot.

```block
let hand: number = 0
input.onGesture(Gesture.Shake, function () {
    // @highlight
    hand = Module3_M1.setRandomHand()
})
```

## Step 3

Ok, now we have to tell the program what to do when it randomly picks a game piece. To do this, we are going to use a conditional statement. Click on the ``||logic:Logic||`` toolbox and place a ``||logic:if true then else||`` block right under the ``||Module3_M1:set hand to random rock, paper or scissors||`` block you added earlier. To finish this step, click on + button at the bottom of the conditional statement to add ``||logic:else if||``. You should now have 3 spaces in your conditional statement, ``||logic:if||``, ``||logic:else if||``, and ``||logic:else||``. What do you think we might place in each of those places?

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

You are doing so well! Let's take a minute to review your program so far. First, you added an ``||input:on shake||`` block to start your program. You then used a bit of math to randomly choose a game piece, which you stored in a variable named ``||variable:hand||``. Finally, you added a ``||logic:conditional||`` statement, which tells your program what to do with the hand variable. Wow! 

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

Now its time to add the three game pieces to your conditional statement. Open the ``||logic:Logic||`` toolbox, grab 2 ``||logic:0 = 0||`` blocks and place them in the **Workspace**. Drop 1 of the blocks in the space to the right of ``||logic:if||`` (replacing ``||logic:true||``). Take the second ``||logic:0 = 0||`` block and drop it in the space to the right of the ``||logic:else if||`` block.  Next, open the ``||variable:Variables||`` toolbox and grab 2 ``||variable:hand||`` variables and drop it in the **Workspace**. Place one ``||variable:hand||`` variable in the first zero space to the right of ``||logic:if||`` and the second in the first zero space on the ``||logic:else if||`` line.

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

Now, open the ``||Module3_M1:Mission 1||`` toolbox, grab the ``||Module3_M1:Rock||`` block and drop it to the right of the ``||variable:hand||`` variable at the top of your conditional statement (replacing the 0). Next, open the ``||Module3_M1:Mission 1||`` toolbox again, but this time grab the ``||Module3_M1:Paper||`` block and drop it in the 0 of the ``||logic:else if||`` in your conditional statement. Use the hint button if you need it. 

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

It's time to add our three game pieces! Open the ``||basic:Basic||`` toolbox and drag a ``||basic:show leds||`` block under the ``||logic:if||`` arm of your conditional statement. Next, do the same thing for the ``||logic:else if||`` and ``||logic:else||`` arms until you have a total of three ``||basic:show leds||`` blocks in your conditional statement.

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

Are you ready to get creative? Great, because it's time to digitally draw our game pieces. Go to the first ``||basic:show leds||`` block (under ``||Module3_M1:Rock||``) and click on the small squares to 'draw' your **rock** game piece. When you're done, go to the next ``||basic:show leds||`` block (under ``||Module3_M1:Paper||``) and this time 'draw' your **paper** game piece. Finally, in the last ``||basic:show leds||`` block (``||logic:else||``) draw your scissors game piece. We encourage you to be as creative as you like, but we've placed some samples in the hint if you need them.

Are you ready to get creative? Great, because it's time to digitally draw our game pieces. Go to the first show leds block (under Rock) and click on the small squares to draw your rock game piece. When you're done, go to the next show leds block (under Paper ) and this time draw your paper game piece. Finally, in the last show leds block (else) draw your scissors game piece. We encourage you to be as creative as you like, but we've placed some samples in the hint if you need them. 

```block
export let hand: number = 0
input.onGesture(Gesture.Shake, function () {
    hand = Module3_M1.setRandomHand()
    if (hand == Module3_M1.getRock()) {
        // @highlight
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hand == Module3_M1.getPaper()) {
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
})
```

## Step 9

Before we move on, let's take a closer look at what you have done. First, we use an ``||input:on shake||`` block to start our program. Next, we use a bit of math to randomly pick the rock, paper or scissors game piece and store it in a ``||variable:variable||`` called ``||variable:hand||``. A ``||logic:conditional statement||`` will then look at the stored game piece and show the ``||basic:led||`` that matches it on your robot's screen. Incredible! You have used inputs, variables, conditional statements and a bit of math to build your own computer game!

```block
export let hand: number = 0
input.onGesture(Gesture.Shake, function () {
    hand = Module3_M1.setRandomHand()
    if (hand == Module3_M1.getRock()) {
        // @highlight
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hand == Module3_M1.getPaper()) {
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
})
```

## Step 10

It's time to challenge the computer. Win 2 out of 3 games of rock, paper, and scissors to complete the mission and continue Lise and Soren's Jupiter Challenge. You can shake your robot gently after each game to reset it. Good luck!