### @hideIteration true

```template

```

# Mission 2

## Introduction @showdialog

Will you be able to help Lise and Soren bring the probe back under control?

## Step 1

Oh no! It looks like the Voyager probe is spinning helplessly in space. Let’s write a program that will help Lise and Soren bring it back under control. Let’s start by opening the ``||basic:Basic||`` toolbox and dragging out the ``||basic:forever||`` block to your **Workspace**. This block will make sure that your program is always running!

```block
// @highlight
basic.forever(function () {
})
```

## Step 2

Since our program will have to make decisions based on whether a condition is true or not, let’s open up the ``||logic:Logic||`` toolbox and add a ``||logic:if then else||`` block to our ``||basic:forever||`` block. Next, let’s click the ``||logic:+||`` sign below ``||logic:else||`` to add an extra space to our conditional statement. Hey, did you notice what happened to the ``||logic:else||``? That’s right, it became ``||logic:else if||``!


```block
basic.forever(function () {
    // @highlight
    if (true) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
```

## Step 3

A digital level works by checking the tilt (or angles) of the x and y axes. We will need to add that if we want our program to work. Open the ``||math:Math||`` toolbox and drag **two** ``||math:absolute of 0||`` blocks into your **Workspace**. Now, open the ``||variables:Variables||`` toolbox and create two variables - ``||variables:x||`` and ``||variables:y||``. Then, grab ``||variables:x||`` block and add it to one of your ``||math:absolute of 0||`` blocks replacing the 0. Now go back to the ``||variables:Variables||`` toolbox and add one ``||variables:y||`` block to the other ``||math:absolute of 0||`` block.

```block
export let x = 0
export let y = 0
// @highlight
Math.abs(x)
// @highlight
Math.abs(y)
```

## Step 4

Let’s start putting together our conditional statement. Open the ``||logic:Logic||`` toolbox and add two ``||logic:0 = 0||`` blocks to your **Workspace**. Next, using the arrow change the ``||logic:=||`` sign to a ``||logic:>||`` (greater than) on both blocks. Now, let’s take our ``||math:absolute of x||`` and ``||math:absolute of y||`` blocks and add them to the left-hand side of the ``||logic:0 > 0||`` blocks. Don’t forget to use the hint if you feel stuck. Great job!

```block
export let x = 0
export let y = 0
// @highlight
Math.abs(x) > 0
// @highlight
Math.abs(y) > 0
```

## Step 5

For the next step, lets add our two ``||math:absolute of||`` blocks to our conditional statement. Grab the ``||math:absolute of x||``block and drop it in the ``||logic:if true then||`` arm replacing the word ``||logic:true||``. Now, grab the ``||math:absolute of y||`` block and drop it in the ``||logic:else if then||`` arm of the conditional statement. Finally, replace the remaining ``||logic:0||``s in your conditional statement by typing the number 32.

```block
export let x = 0
export let y = 0
basic.forever(function () {
    // @highlight
    if (Math.abs(x) > 32) {
    } else if (Math.abs(y) > 32) {
    } else {
    }
})
```

## Step 6

You are doing great, but there is no time to rest with the shuttle spinning out of control. Fortunately, we can save a little time by using the accelerometer built into our robot. Open the ``||variables:Variables||`` toolbox, grab **two** ``||variables:set y to 0||`` blocks and place them in your ``||basic:forever||`` block above your ``||logic:conditional statement||``. Using the arrows, change one ``||variables:y||`` to an ``||variables:x||``. To finish this step, add one ``||input:acceleration (mg) x||`` block to both the ``||variables:set y to||`` and ``||variables:set x to||`` to blocks.

```block
export let x = 0
export let y = 0
basic.forever(function () {
    // @highlight
    x = input.acceleration(Dimension.X)
    // @highlight
    y = input.acceleration(Dimension.X)
    if (Math.abs(x) > 32) {
    } else if (Math.abs(y) > 32) {
    } else {
    }
})
```

## Step 7

Did you notice something with your program so far that might cause a problem later? Take a close look at the ``||variables:set x||`` and ``||variables:set y||`` blocks at the top of your code block. Do you see it now? Thats right, one of the variables in our acceleration blocks doesn’t match the variable it is set to. Good thing we caught that. Use the arrows and make sure that ``||variables:set x||`` matches ``||input:acceleration (mg) x||`` and that ``||variables:set y||`` matches ``||input:acceleration (mg) y||``.

```block
export let x = 0
export let y = 0
basic.forever(function () {
    // @highlight
    x = input.acceleration(Dimension.X)
    // @highlight
    y = input.acceleration(Dimension.Y)
    if (Math.abs(x) > 32) {
    } else if (Math.abs(y) > 32) {
    } else {
    }
})
```

## Step 8

Our level is nearly done but it would be nice if our robot showed us pictures on its screen so we could tell if it was level or not. Open the ``||basic:Basic||`` toolbox and three ``||basic:show icon||`` blocks to your conditional statement, one below the ``||logic:if||``, one below the ``||logic:else if||``, and one below ``||logic:else||``. Using the arrows, change each of the icons to whatever picture you like best. Just make sure they are all different. Having different pictures will tell you what you need to fix to make your robot level.

```block
export let x = 0
export let y = 0
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    if (Math.abs(X) > 32) {
        basic.showIcon(IconNames.No)
    } else if (Math.abs(y) > 32) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
```

## Step 9

Incredible! You used conditional statements, variables and even a little math to code your own digital level. Go ahead and download the program into your robot and try it out. But don’t take too long... Soren and Lise still need your help to save the Voyager probe!



