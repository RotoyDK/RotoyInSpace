```customts
Mission5.strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
```

```package
maqueen=github:dfrobot/pxt-maqueen#v1.7.2
```

# Mission 5

## Introduction @showdialog

Learn to use Rotoy's eyes. Do your best to save Rotoy from the toads!

## Step 1

Rotoy has a lot of superpowers - and one of them is his ultrasonic sensor! Using this sensor, Rotoy can see (or rather detect) objects that are in front of him. And he can even tell you how far away they are!

## Step 2

To use it, you need  ``||Maqueen:reas ultrasonic sensor [cm]||``, place it in ``||basic:show number||`` block.

## Step 3

In your **Workspace**, you see 2 blocks: ``||basic:on start||`` and ``||basic:forever||``, and you've probably seen them before. Let's talk about them!

## Step 4 @showhint

When we put stuff in ``||basic:on start||``, the blocks that are inside will be active only when you turn on Rotoy and only once.

So the code below will show distance to the nearest object in front of Rotoy - speaking of which, take out from the box and asseble **Toad** figurine, and place in front of Rotoy. ``|Download|`` the code and try it.

```blocks
basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
```

## Step 5 @showhint

On the other hand, if we put stuff in ``||basic:forever||``, the blocks that are inside will be active...well, as the name suggests...forever. Or at least all the time that Rotoy is turned on.

Code below will be showing distance (and updating it) all the time. Once ``||basic:show number||`` is completed, micro:bit will start over. ``|Download|`` the code and try moving the **Toad** to see if the value changes.

```block
basic.forever(function () {
    basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
})
```

## Step 6

``||basic:forever||`` is quite special because it is called a loop, because it loops over and over. micro:bit has other loops that we will talk about in different missions.

## Step 7 @showhint

Now, let's get to work. Rotoy should alert you and run away when the **Toad** is near. Let's say 10cm. To do that, we also need ``||Logic:if () else ()||`` condition. So how it will work is:
- ``||Logic:if||`` **Toad** is further away than 10cm, don't do anaything - so you don't have to put anything there,
- ``||Logic:else||`` **Toad** is closer than 10cm, Rotoy needs to turn on his lights, turn around and run away.
The empty ``||Logic:if () else ()||`` will look something like that:

```block
if (maqueen.Ultrasonic(PingUnit.Centimeters) > 10) {
	
} else {
	
}
```

## Step 8

Now, we need to figure how to make Rotoy to turn by 180 degrees (turn around). You know how to move each motor by now, but it's a bit more difficult to program Rotoy to make perfect 180° turn. That's because micro:bit can only use time, not degrees, so we cannot tell Rotoy to turn by 180 degrees. Instead we have to tell Rotoy to turn for certain amount of time in milliseconds, and than number will change from Rotoy to Rotoy and battery levels, so you need to experiment with it.

To make things easier, micro:bit prepared for you block ``||Mission5:turn for [] ms||``, so you just need to fill it out, ``|Download|`` the code and test it until you get nice 180° turn. Remember to place ``||maqueen:motor [all] stop||`` at the end.

```blocks
Mission5.Turn(100)
maqueen.motorStop(maqueen.Motors.All)
```

## Step 9

Then, you just need to add ``||Mission5:go straight for [] ms||`` and also fill it out - let's say we want Rotoy to run away for 1000 ms.

The last bit is to tell Rotoy to turn on it's lights when **Toad** is detected - use ``||Mission5:flash lights []||`` and set it to ``||Logic:true||`` when **Toad** is near and ``||Logic:false||`` otherwise.

Place everything in forever loop, so that Rotoy constantly checks if **Toad** is nearby!

## Step 10

Here's some hint if you need it.

```block
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 10) {
    	Mission5.Flash(false)
    } else {
        Mission5.Flash(true)
        Mission5.Turn(100)
        Mission5.goStraight(1000)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
```

## Step 11
``|Download|`` the code and test it. Could Rotoy escape from the toad? Come back to the chapter!