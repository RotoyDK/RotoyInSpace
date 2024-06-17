### @hideIteration true

```template
let shakeCount = 0
let startTime = 0
```

# Mission 1

## Introduction @showdialog

Help Lise program a seismograph and record the moonquakes! 

## Step 1

Lise needs to record the number of moonquakes. Let's help her by programming a seismograph. Open the ``||input:Input||`` toolbox and add an ``||input:on shake||`` block to your **Workspace**. This block tells your robot to do something when you shake it. You can even make it do different things depending on how many times your robot is shaken. Neat, huh?

```block
// @highlight
input.onGesture(Gesture.Shake, function () {
})
```

## Step 2

Next, we are going to add a special code block that will reset our seismograph every 3 seconds. First, grab ``||variables:set shakeCount to 0||`` block from ``||variables:Variables||`` toolbox, and place it under the ``||input:on shake||`` block in your **Workspace**. Then open the ``||Module5_M1:Mission 1||`` toolbox, grab the ``||Module5_M1:reset shake counter every 0s at 0 with 0||`` block and place is instead 0 in ``||variables:set shakeCount to 0||``. Before you move on, change the 0s to 3s, place ``||variables:startTime||`` variable in the 2nd spot, ``||variables:shakeCount||`` variable in the 3rd spot from ``||variables:Variables||`` toolbox to complete our reset block.


```block
input.onGesture(Gesture.Shake, function () {
    export let startTime = 0
    export let shakeCount = 0
    // @highlight
    shakeCount = Module5_M1.resetShakeCounter(3, startTime, shakeCount)
})
```

## Step 3

Great job! That reset block is important because without it, your robot would just keep counting the earthquakes forever. That would be one tired robot!. Now, let's start working on the counting part of our program. Click the next button to move to the next step.

## Step 4

Ok, let's start by opening the ``||variables:Variables||`` toolbox! We are going to grab two blocks this time and place them under the special reset block we just added in the last step. First, add the ``||variables:set shakeCount to 0||`` block and change the ``||variables:shakeCount||`` variable to ``||variables:startTime||`` using the arrow to the right. Next, grab a ``||variables:change shakeCount by 1||`` block from the ``||variables:Variables||`` toolbox and place it below the ``||variables:startTime||`` variable. Be sure to click on the light bulb button below if you need a little help.

```block
input.onGesture(Gesture.Shake, function () {
    export let startTime = 0
    export let shakeCount = 0
    shakeCount = Module5_M1.resetShakeCounter(3, startTime, shakeCount)
    // @highlight
    startTime = 0
    // @highlight
    shakeCount += 1
})
```

## Step 5

Let's finish the ``||input:on shake||`` part of our program before taking a moment to review our program so far. Open the ``||input:Input||`` toolbox and grab the ``||input:running time (ms)||`` block. To find it, you will need to click on the ``||input:more||`` button that appears after you open the ``||input:Input||`` toolbox. Take the ``||input:running time (ms)||`` block and place it in the ``||variables:set startTime||`` block replacing the ``||variables:0||``.

```block
input.onGesture(Gesture.Shake, function () {
    export let startTime = 0
    export let shakeCount = 0
    shakeCount = Module5_M1.resetShakeCounter(3, startTime, shakeCount)
    // @highlight
    startTime = input.runningTime()
    shakeCount += 1
})
```

## Step 6

This seems like a good time to review what you have done so far. First, you used an ``||input:on shake||`` block to tell your robot to respond to any shaking it feels. You then used a special ``||Module5_M1:reset||`` block to restart your program every 3 seconds. Next, you used ``||variables:variables||`` to set the time to milliseconds and told the program to add one to the count every time it was shaken. So cool!

## Step 7

Our seismograph is almost done, but we still need to tell the robot what it should reset to every 3 seconds. We actually already have all the right blocks in our **Workspace**. Look at our ``||basic:on start||`` block. We have here one ``||variables:set startTime to 0||`` and one ``||variables:set shakeCount to 0||``.

```blocks
startTime = 0
shakeCount = 0
```

## Step 8

Did you notice that something is missing from our program? That's right! We still need to tell the program to show us the number of quakes that it has counted. To do this, open the ``||basic:Basic||`` toolbox, grab a ``||basic:show number 0||`` block and place it at the bottom of the ``||input:on shake||`` code block. Finally, open the ``||variables:Variables||`` toolbox, grab the ``||variables:shakeCount||`` variable and place it in the ``||basic:show number 0||`` block. Great job!

```blocks
input.onGesture(Gesture.Shake, function () {
    export let startTime = 0
    export let shakeCount = 0
    shakeCount = Module5_M1.resetShakeCounter(3, startTime, shakeCount)
    startTime = input.runningTime()
    shakeCount += 1
    // @highlight
    basic.showNumber(shakeCount)
})
startTime = 0
shakeCount = 0
```


## Step 9

Your seismograph is now ready to start counting moonquakes. Download the program into your robot and give it a few shakes! Did the number change? Awesome! Have fun, but don't forget that Lise is waiting.



