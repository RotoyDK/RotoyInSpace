### @hideIteration true

# Mission 2

## Introduction @showdialog

Dodge the space rocks to help Lise land on the Lost Planet!

## Step 1

Landing on the lost planet is going to be tough. Let’s see if we can help Lise by building a program that will land her rocket safely on the surface.
We'll start with ``||basic:on start||`` block from your **Workspace**.

```blocks
```

## Step 2

Next, open the ``||variables:Variables||`` toolbox, and click the ``||variables:Make a Variable||`` button near the top. This should cause a box to appear on your screen asking you to name the new variable. Type in ``||variables:Lunar_module||`` and hit ok. Click on the ``||variables:Variables||`` toolbox again and you should now see a block called ``||variables:set Lunar_module to 0||``. Grab that block and place it under your ``||basic:on start||`` block. If you remember, variables are like boxes that hold things that the program can use later. We will use this variable to ‘hold’ the location of our space ship when the game starts. Move to the next step to see how we will do this.

```blocks
export let Lunar_module = 0
// @highlight
Lunar_module = 0
```

## Step 3

For this program, we need a visual way to represent the rocks and other bad things floating around the Lost Planet that could damage Lise’s ship. We can do this using ``||game:Sprites||``. In programming, ``||game:Sprites||`` are graphical or visual objects that can move and interact with other sprites. If you have ever played a video game, you have probably played with sprites!

## Step 4

Open the ``||game:Game||`` toolbox and find the ``||game:create sprite at x: 2 y: 2||``. Did you notice that this block has a number assigned to both X and Y? Those numbers are important because they tell your program where the sprite will appear on your screen. Ok, drag this block to your ``||variables:Lunar_module||`` variable replacing the 0. Finally, let’s change the start position of our rocket by changing the sprite’s ``||game:y value from 2 to 4||``.   

```blocks
export let Lunar_module: game.LedSprite = null
// @highlight
Lunar_module = game.createSprite(2, 4)
```

## Step 5

We are almost finished with the main part of our landing game. There is just one more special block that we need to add to the ``||basic:on start||`` block before it's complete. Open the ``||Module2_M2:Mission 2||`` toolbox, grab the ``||Module2_M2:play game with||`` block and drop it under your ``||variables:set Lunar_module to||`` variable. Next, drag ``||variables:Lunar_module||`` from ``||variables:Variables||`` toolbox and place it to the right of ``||Module2_M2:play game with||``. This block contains some advanced code for your program that we created for you. Don’t worry though, you will be programming more advanced code in no time!

```blocks
export let Lunar_module: game.LedSprite = null
Lunar_module = game.createSprite(2, 4)
// @highlight
Module2_M2.playGame(Lunar_module)
```

## Step 6

This seems like a good time to review what you have done so far. First, you used an ``||basic:on start||`` block to tell your robot when to start your program. You then used a ``||variables:variable||`` to store the starting location for your rocket when the game starts. To actually show your rocket on the screen, you used graphical elements called ``||game:sprites||``, which you set to the position x:2 and y:4. Finally, you added a special block that we created just for you called ``||Module2_M2:play game with||``. Very cool!

## Step 7

Our landing game is just about done, but we still need to add a way to move our rocket on the screen. Open the ``||input:Input||`` toolbox and drag both an ``||input:on button A pressed||`` and an ``||input:on button B pressed||`` to your **Workspace**. Next, open the ``||game:Game||`` toolbox and drag **two** ``||game:sprite change x by 1||`` blocks to your **Workspace**. We will use these blocks to move our rocket so change ``||variable:sprite||`` to ``||variable:Lunar_module||`` using the arrow to the right.

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

Let’s finish our program by dropping one of the  ``||game:Lunar_module change by 1||`` blocks into the ``||input:on button A||`` block. Repeat the step, but this time for the ``||input:on button B||`` block. Finally, change the ``||game:1||`` in the ``||input:on button A||`` block to a ``||game:-1||``. This will allow you to move your rocket left and right while playing your game. Alright, you did it! Great job!

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

Are you ready to help Lise land her rocket on the Lost Planet? Download the program into your robot and see if you can dodge the rocks by moving left and right using the A and B buttons. But be careful, those rocks will only get faster the longer you play! Your score will appear at the end of the game and you can start a new game by pressing the A and B buttons at the same time. Have fun!

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