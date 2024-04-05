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

# Mission 1

## Introduction @showdialog

Discover the cave's hidden secrets using your rover's lights.

## Step 1

Your robot has two button inputs, ``||input:A||`` and ``||input:B||``. You can find their programming blocks in the **Toolbox** under ``||input:Input||``. Clicking on ``||input:Input||`` toolbox will show you all the available programming blocks. Try it now!

## Step 2 @showhint

To start your program, drag two ``||input:on button A pressed||`` blocks into the **Workspace**. Right now, both blocks are assigned to the A button, but you can adjust that by pressing on the small arrow to the right of the letter ``||input:A||`` and changing it to ``||input:B||``. 

```blocks
input.onButtonPressed(Button.A, function () {
})
input.onButtonPressed(Button.B, function () {
})
```

## Step 3

You should now have ``||input:two input button||`` blocks in your **Workspace**, one for ``||input:A||`` and one for ``||input:B||``. You may have noticed that the space inside the button blocks look like a puzzle piece. This space allows you to add or remove blocks to build your program! Anything you add to the button block, will only run when you press that button. 

## Step 4

Now that we have our two button blocks, let's make them do something. Let's click on the ``||Module1_M2:Mission 1||`` toolbox and drag two of the ``||Module1_M2:Cave lights||`` blocks into our **Workspace**. This block will simulate your robot conducting experiments on Mars. 

## Step 5

Next, change one of the ``||Module1_M2:Cave lights||`` blocks in the space after the word 'to' to ``||logic:true||``. Now, do the same thing with the ``||logic:false||`` logic block in the other ``||Module1_M2:Cave lights||`` block. The ``||logic:true||`` block acts as an 'on' and the ``||logic:false||`` block acts like an 'off'. Click on the hint button if you get stuck.

```blocks
Module1_M2.caveLights(true)
Module1_M2.caveLights(false)
```

## Step 6

You've done a great job so far! Now grab the ``||logic:true||`` ``||Module1_M2:Cave lights||`` block and drop it in the button ``||input:A||`` block. With that done, do the same thing with the ``||logic:false||`` ``||Module1_M2:Cave lights||`` block and drop it in the button ``||input:B||`` block. 

## Step 7 @showhint

Wow, you did it! Let's take a moment to review what you have programmed so far. You took two ``||input:input||`` blocks and assigned them to buttons ``||input:A||`` and ``||input:B||``. You then assigned two variables called ``||Module1_M2:Cave lights||`` to those buttons, one ``||logic:true||`` and one ``||logic:false||``. Click on the hint button for the full code if you are feeling stuck.

```blocks
input.onButtonPressed(Button.A, function () {
    Module1_M2.caveLights(true)
})
input.onButtonPressed(Button.B, function () {
    Module1_M2.caveLights(false)
})
```

## Step 8

Great job! Its time to test your code. Turn on your robot, connect it to your computer, and hit the purple ``|Download|`` button in the bottom left hand corner of the MakeCode screen. Try pressing the ``||input:A||`` and ``||input:B||`` buttons and see if you can describe what is happening. When you are done, don't forget to go back and complete Soren's Epic Adventure.