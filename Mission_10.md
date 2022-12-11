```customts
Mission10.strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
Mission10.led0 = Mission10.strip.range(0, 1)
Mission10.led1 = Mission10.strip.range(1, 1)
Mission10.led2 = Mission10.strip.range(2, 1)
Mission10.led3 = Mission10.strip.range(3, 1)
```

```package
maqueen=github:dfrobot/pxt-maqueen#v1.7.2
neopixel=github:microsoft/pxt-neopixel#v0.7.3
```

# Day 10

## Introduction @showdialog

Program Rotoy to dance around the wooden tree from the box!

## Step 1

micro:bit has already prepared for you blocks ``||Mission10:goRight||`` and ``||Mission10:goStraight||``.
Try to make a program that will make Alfie do a square around a Christmas tree. For that you need to change time in ms:
- in ``||Mission10:go right for [] ms||`` to make a 90° right turn,
- in ``||Mission10:go straight for [] ms||`` to set the length of going straight, take a tape measure and try to set that Rotoy goes 30 cm.

Remember to stop motors at the end - ``||maqueen:motor [all] stop||``.

Play and experiment until you have a nice square path around a Christmas tree. ``|Download|`` your code!

## Step 3

Have you noticed something? You needed to use ``||Mission10:go right for [] ms||`` and ``||Mission10:go straight for [] ms||`` 4 times. Do you think we can reduce it? Go next to find out!

## Step 4

Let's introduce something new, we talked already about ``||Basic:forever||`` loop. Do you remember? It would repeat inserted code... forever! But what if we want to repeat something for less than forever, like... for four times. Well, there is a handy block for that - ``||Loops:repeat [] times||``.

## Step 5

Place ``||Loops:repeat [] times||`` and put "4" inside. Now can you figure out what code do you need to put there to make a square path around a Christmas tree?

Remember to stop motors at the end - ``||maqueen:motor [all] stop||``.

## Step 6

Let's also turn on nice Christmas lights - use ``||Mission10:flash lights []||`` and switch them on at the beginning and turn them off at the end!

```ghost
Mission10.Flash()
for (let index = 0; index < 4; index++) {
    Mission10.goStraight()
    Mission10.goRight()
}
maqueen.motorStop(maqueen.Motors.All)
```

## Step 7

Woohoo! ``|Download|`` and transfer the code to micro:bit! And return to the chapter!