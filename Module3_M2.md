### @hideIteration true

```template
//
```

# Mission 2

## Introduction @showdialog

Guess the secret number twice in a row to open the door and beat the computer.

## Step 1

Our **Workspace** looks a little too empty. Let’s fix that by opening ``||input:Input||`` toolbox and dragging an ``||input:on button A pressed||`` block into the **Workspace**. Together with ``||basic:on start||`` block, they will serve as the foundation for our program. 

```blocks
input.onButtonPressed(Button.A, function () {
})
```

## Step 2

Next, let’s start by focusing on the ``||basic:on start||`` block. The ``||basic:on start||`` block is important because any instructions you place inside it will run when your program starts. Let’s open the ``||basic:Basic||`` toolbox again and drag out a ``||basic:show string||`` block. This block allows you to enter some text that will show up on your robot’s LCD screen. In the white space to the right, lets replace *Hello* by typing *Guess from 0 to 10*!

```blocks
// @highlight
basic.showString("Guess from 0 to 10")
```

## Step 3

You’re doing great! Now, when you start your program, players will know what to do. Next, open the ``||RotoyVariables:Variables||`` toolbox and drag a ``||RotoyVariables:set X to 0||`` block and place it inside the ``||input:on button A pressed||`` block. Next, open the ``||math:Math||`` toolbox, select a ``||math:pick a random 0 to 10||`` block, and place it in the ``||RotoyVariables:set X to 0||`` block. This should replace the 0 already there. Remember, you can always click on the hint button below if you are having trouble.  

```block
// @hide
let X = RotoyVariables.setX()
input.onButtonPressed(Button.A, function () {
    // @highlight
    X = randint(0, 10)
})
```

## Step 4

Before we move on, lets take a moment to review that last step.  First, you took a ``||RotoyVariables:variable||`` and named it ``||RotoyVariables:X||``. Then, you used a ``||math:Math||`` function to generate a random number from 0 to 10 and stored that number in the ``||RotoyVariables:X variable||``. Very cool! 

## Step 5

Now that we have a random number selected, we still need a way to display it for our game to work. We can do that by opening the ``||basic:Basic||`` toolbox, grabbing a ``||basic:show number||`` block and placing it below the variable ``||RotoyVariables:set X to||`` ``||math:pick a random 0 to 10||`` block. This will take the random number stored in variable X and show it on your robot’s screen. 

```block
// @hide
let X = RotoyVariables.setX()
input.onButtonPressed(Button.A, function () {
    x = randint(0, 10)
    // @highlight
    basic.showNumber(x)
})
```

## Step 6

You did it! Can you guess the random number twice in a row to beat the computer again and save the space station? Pick a random number between 0 and 10 and then press the A button to play. Good luck!