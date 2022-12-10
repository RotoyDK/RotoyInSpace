```template
for (let index = 0; index < 2; index++) {
    music.playTone(494, music.beat(BeatFraction.Whole))
}
```

```package
maqueen=github:dfrobot/pxt-maqueen#v1.7.2
```

# Mission 2

## Introduction @showdialog

Make Rotoy dance. Make some code!

## Step 1

Everything that Rotoy does is through micro:bit - Rotoy's brain! And micro:bit does everything you tell it to do by programming it! So let me tell you how to do stuff with micro:bit.

## Step 2

First, there is a main **Workspace** - that's this large area under this text, that where you have to place all the code for micro:bit.
Those colorful table on your left is your **Toolbox**, all necessary code for each mission will be sitting here. You'll see that different missions will have different rows here.
Then on the left, you can see a virtual version of micro:bit - once you make your code, you can click play to test it (except any stuff related to moving Rotoy will not be possible to test virtually).

## Step 3

That should be enough information for the beginning!

Let's start with the mission!!!

## Step 4 @showhint

So in your **Workspace** you can already see a block called ``||Input:on button [A] pressed||``. It means that micro:bit will do any of the code that you place in here after button A on micro:bit is pressed!

Try it, place in this block ``||Basic:show icon []||`` and choose whatever icon you like. Now click ``|Download|`` button to move your code to micro:bit.

Here are the steps in case you need it:
1. Drag the file with the code to micro:bit
2. Place micro:bit in Rotoy and turn it on
3. Hit button A and see the result :)

```block
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
```

## Step 5

Awesome, now let's get back to our mission. So we want to make Rotoy dance, to do so micro:bit prepared for you this nice block ``||Mission2:dance with speed []||``.

You can delete ``||Basic:show icon []||`` and replace it with ``||Mission2:dance with speed []||``. Now, you just need to type a number that represents speed of Rotoy, and the number can be between **0-255**, with:
- **0** - Rotoy doesn't move at all,
- **255** - Rotoy is very fast.

Try experimenting with some values. In case you need help, click a lightbulb on the right side.

```block
input.onButtonPressed(Button.A, function () {
    Mission2.Dance(100)
})
```

## Step 6

Once you are ready, ``|Download|`` your code and return to the chapter!