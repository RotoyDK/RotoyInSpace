### @hideIteration true

# Mission 1

## Introduction @showdialog

Help Lise find the brightest star by programming a light detector.

## Step 1

For this task, you will be using variables, conditional statements and your robot’s hardware to build a sensor that measures the light around you. Are you ready to start programming? Cool, let’s get started.

## Step 2

Let's start with ``||basic:forever||`` block in your **Workspace**. This block is the foundation for many of your projects and tells your program when and how often it should run. Basically, anything you place inside the ``||basic:forever||`` block will continue to run until you turn off your robot.  

```block
// @highlight
basic.forever(function () {
})
```

## Step 3

Now, we need to create a variable that will store the level of light after our program detects it. To do this, open the ``||variables:Variables||`` toolbox, and click the ``||variables:Make a Variable||`` button near the top. This should cause a box to appear on your screen asking you to name the new variable. Type in ``||variables:reading||`` and hit ok. Click on the ``||variables:Variables||`` toolbox again and you should now see a block called ``||variables:set reading to 0||``. Grab that block and place it under your ``||basic:forever||`` block. Great job!

```block
export let reading = 0
basic.forever(function () {
    // @highlight
    reading = 0
})
```

## Step 4

Our program now has a place to store the level of light, but it can’t actually detect it yet. Fortunately, there is an input available that will allow your program to do just that. Open the ``||input:Input||`` toolbox, grab the ``||input:light level||`` block and use it to replace the 0 in your ``||variables:set reading to||`` variable block.   Remember to use the hint if you need it.

```block
export let reading = 0
basic.forever(function () {
    // @highlight
    reading = input.lightLevel()
})
```

## Step 5

Next, open the ``||logic:Logic||`` toolbox and add a ``||logic:if true then||`` block to your **Workspace**. Then, open the ``||input:Input||`` toolbox and drag a ``||input:button A is pressed||`` block to the space between ``||logic:if||`` and ``||logic:then||`` of your conditional statement. Finish this step by placing the ``||logic:if||`` ``||input:button A is pressed||`` ``||logic:then||`` block under the ``||variables:set reading to||`` ``||input:light level||`` block. Awesome job so far!

```block
export let reading = 0
basic.forever(function () {
    reading = input.lightLevel()
    // @highlight
    if (input.buttonIsPressed(Button.A)) {
    }
})
```

## Step 6

Now, we need to tell the program how to show the strength of the light that it is measuring. To do this, open the ``||basic:Basic||`` toolbox, grab the ``||basic:show number||`` block and place it under your ``||logic:if||`` ``||input:button A is pressed||`` block. The program now needs to know what number it should show. Fortunately, we already have a variable storing the light level that we can use. Open the ``||variables:Variables||`` toolbox, grab the ``||variables:reading||`` block and place it to the right of ``||basic:show number||``. 

```block
export let reading = 0
if (input.buttonIsPressed(Button.A)) {
    // @highlight
    basic.showNumber(reading)
}
```

## Step 7

Let’s take a moment to review what you have done so far. First, you created a variable called ``||variables:reading||`` to store the ``||input:level of light||`` detected. You then used a ``||logic:conditional statement||`` to show that ``||input:light level||`` whenever you ``||input:pressed the A button||`` on your robot. Finally, you placed all of these blocks inside a ``||basic:forever||`` block to ensure that your program is constantly running. You are really getting good at this! 


## Step 8

Congratulations! Your robot is now able to detect the amount of light around it and show you a number to represent the strength of that light. Feel free to download the program and give it a try around your home. Its really cool, but what if you don’t want to press the A button every time to get a reading? **Fortunately, there is one more step we can take to make your light reader even better.**

## Step 9

Let’s use your robot’s LED screen to visually show the level of light around us. Open the ``||led:Led||`` toolbox, grab the ``||led:plot bar graph||`` block and place it right under your ``||variables:set reading to||`` variable. Now grab the ``||variables:reading||`` block from the ``||variables:Variables||`` toolbox and use it to replace the first ``||led:0||`` in your ``||led:plot bar graph||`` bar graph block. For the second ``||led:0||``, select it with your mouse and type 255. Wow! Download the program again and see if you can find anything different about it after this last step. You did it!

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