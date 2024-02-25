```package
maqueen=github:dfrobot/pxt-maqueen#v1.7.2
```

# Mission 1

## Introduction @showdialog

Help Soren finish his programs and start the rover experiments!

## Step 1

Everything that Rotoy does is through micro:bit - Rotoy's brain! And micro:bit does everything you tell it to do by programming it! So let me tell you how to do stuff with micro:bit.

## Step 2

First, there is a main **Workspace** - that's this large area under this text, where you have to place all the code for micro:bit.
The colorful table on your left is your **Toolbox**, all necessary code for each mission will be sitting here. You'll see that different missions will have different rows here.
Then on the left, you can see a virtual version of micro:bit - once you make your code, you can click play to test it (except any stuff related to moving Rotoy will not be possible to test virtually).

## Step 3

That should be enough information for the beginning!

Let's start with the mission!!!

## Step 4

Rotoy has 2 buttons - ``||input:A||`` and ``||input:B||``. You can find them in the category ``||input:Input||``.

## Step 5

Put 2 buttons (1 for button ``||input:A||`` and 1 for button ``||input:B||``) in the **Workspace**. You can check how it should look in the hint!

```blocks
input.onButtonPressed(Button.A, function () {
})
input.onButtonPressed(Button.B, function () {
})
```

## Step 6

Great! Now - we know that Soren can control the rover. He uses 2 different commands: ``||Module1_M1:start rover||`` to move the rover, and ``||Module1_M1:stop rover||`` to stop the rover.

You can check them out in ``||Module1_M1:Mission 1||`` in the **Toolbox**.

## Step 7 @showhint

To connect it with the buttons, we have to put commands under the correct buttons. For example, if you want to start the rover when pressing button A, the code will look like this:

```block
input.onButtonPressed(Button.A, function () {
    Module1_M1.startRover()
})
```

## Step 8

Ok, so now Soren can turn on the rover with button A, we also need to help him stop it. Let's set button B to stop the rover!

## Step 6

Once you are ready, ``|Download|`` your code and return to Rotoy PLAY!