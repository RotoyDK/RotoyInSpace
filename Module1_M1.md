### @hideIteration true

```template
basic.forever(function () {
})
```

```package
maqueen=github:dfrobot/pxt-maqueen#v1.7.2
```

# Mission 1

## Introduction @showdialog

Can you help Soren start the rover and begin the Mars experiments?

## Step 1

In the **Workspace** below, you should have an empty ``||basic:forever||`` block. If you don’t see a ``||basic:forever||`` block in your **Workspace**, you can click on the ``||basic:Basic||`` toolbox and add a ``||basic:forever||`` block that way. The ``||basic:forever||`` block tells your program how often to repeat the instructions placed inside it. In this case, those instructions will run (or loop) as long as the program is running.

```blocks
basic.forever(function () {
})
```

## Step 2

In order for Soren to start the rover’s experiments, he will need to tell the rover what to do and when to do it. Let’s start by telling the rover to move forward. Go to the ``||Module1_M1:Mission 1||`` toolbox and drag a ``||Module1_M1:move forward||`` block into your **Workspace**. Now let’s drop that ``||Module1_M1:move forward||`` block into the ``||basic:forever||`` block. 

```blocks
basic.forever(function () {
    // @highlight
    Module1_M1.moveForward(false)
})
```

## Step 3

Great job! Our rover is ready to move forward, but Mars is a rocky planet. What happens if a large rock is blocking the rover’s path? Well, let’s add another instruction so that the rover can detect anything blocking its way. Go to the ``||Module1_M1:Mission 1||`` toolbox and this time drag the ``||Module1_M1:find black line||`` block and place it under the ``||Module1_M1:move forward||`` block. Use the hint button if you need help.

```blocks
basic.forever(function () {
    Module1_M1.moveForward(false)
    // @highlight
    Module1_M1.findBlackLine(false)
})
```

## Step 4

Ok, now we need to tell the rover what to do when it detects something in its way. To do this, go to the ``||Module1_M1:Mission 1||`` toolbox and this time drag the ``||Module1_M1:reverse and turn||`` block into your **Workspace** and place it under the find ``||Module1_M1:find black line||`` block. 

```blocks
basic.forever(function () {
    Module1_M1.moveForward(false)
    Module1_M1.findBlackLine(false)
    // @highlight
    Module1_M1.reverseAndTurn(false)
})
```

## Step 5

Our rover now has all the instructions it needs to explore the surface of Mars, but those movements won’t work until we tell the program to turn them on. To do this, go to the ``||RotoyVariables:Variables||`` toolbox and drag a ``||RotoyVariables:turn on||`` block into the space to the right of your ``||Module1_M1:move forward||`` block. (This will replace the ``||logic:false||`` block thats already there). Now repeat the same step for the ``||Module1_M1:find black line||`` and ``||Module1_M1:reverse and turn||`` blocks. 

```blocks
basic.forever(function () {
    Module1_M1.moveForward(RotoyVariables.turnOnMethod())
    Module1_M1.findBlackLine(RotoyVariables.turnOnMethod())
    Module1_M1.reverseAndTurn(RotoyVariables.turnOnMethod())
})
```

## Step 6

Wow, you are doing great. Our rover is ready to explore, but we still need a way to start and stop it. We can use the A and B buttons to do that. Open the ``||input:Input||`` toolbox and drag two ``||input:on button A pressed||`` blocks to your **Workspace**. Next, use the drop down arrow next to the letter ``||input:A||`` on one of the blocks to change it to ``||input:on button B pressed||``.

```blocks
input.onButtonPressed(Button.A, function () {
})
input.onButtonPressed(Button.B, function () {
})
```

## Step 7

Just one more step to go. We need to tell the rover what to do when we press buttons A and B. Open the Variable toolbox and drag the set turnOn to true block to the button A block and the set turnOn to false block to the button B block. Remember that you have the hint button below if you need it.

Just one more step to go. We need to tell the rover what to do when we press buttons A and B. Open the ``||RotoyVariables:Variables||`` toolbox and drag the ``||RotoyVariables:set turnOn to true||`` block to the ``||input:button A||`` block and the set ``||RotoyVariables:set turnOn to false||`` block to the ``||input:button B||`` block. Remember that you have the hint button below if you need it. 

```blocks
input.onButtonPressed(Button.A, function () {
    // @highlight
    RotoyVariables.setTurnOnTrue()
})
input.onButtonPressed(Button.B, function () {
    // @highlight
    RotoyVariables.setTurnOnFalse()
})
```


## Step 8

Wow, you did it!. Not only will your robot move, but it will avoid any dangerous obstacles like rocks or, in this case, black lines. Before you test your code, you will probably want to place some dark tape or paper down on the floor for your robot to find. When you are ready, turn on your robot, connect it to your computer, and hit the purple ``|Download|`` button in the bottom left hand corner of the MakeCode screen. Time to explore!