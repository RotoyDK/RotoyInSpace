```customts
Mission6.strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
```

```template
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 10) {
    } else {
    }
})
```

```package
maqueen=github:dfrobot/pxt-maqueen#v1.7.2
neopixel=github:microsoft/pxt-neopixel#v0.7.3
```

# Mission 6

## Introduction @showdialog

Use your skills to run away from the king toad!

## Step 1

We will pick up where we finished in the last mission. Your **Workspace** has already ``||Logic:if () else ()||`` condition.

## Step 2

So Rotoy should alert you and run away when ** King Toad** is near. Let's say 10cm. So how it will work is:
- ``||Logic:if||`` **King Toad** is further away than 10cm, don't do anaything - so you don't have to put anything there,
- ``||Logic:else||`` **King Toad** is closer than 10cm, Rotoy needs to turn on his lights, turn around and run away.

## Step 3 @showhint

Now, we need to figure how to make Rotoy to turn by 180 degrees (turn around). You know how to move each motor by now, but it's a bit more difficult to program Rotoy to make perfect 180° turn. That's because micro:bit can only use time, not degrees, so we cannot tell Rotoy to turn by 180 degrees. Instead we have to tell Rotoy to turn for certain amount of time in milliseconds, and than number will change from Rotoy to Rotoy and battery levels, so you need to experiment with it.

To make things easier, micro:bit prepared for you block ``||Mission6:turn for [] ms||``, so you just need to fill it out, ``|Download|`` the code and test it until you get nice 180° turn. Remember to place ``||maqueen:motor [all] stop||`` at the end.

```blocks
Mission6.Turn(100)
maqueen.motorStop(maqueen.Motors.All)
```

## Step 4

Then, you just need to add ``||Mission6:go straight for [] ms||`` and also fill it out - let's say we want Rotoy to run away for 1000 ms.

The last bit is to tell Rotoy to turn on it's lights when **Toad** is detected - use ``||Mission6:flash lights []||`` and set it to ``||Logic:true||`` when **King Toad** is near and ``||Logic:false||`` otherwise.

Place everything in forever loop, so that Rotoy constantly checks if **Toad** is nearby!

## Step 5

Here's some hint if you need it.

```block
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 10) {
    	Mission6.Flash(false)
    } else {
        Mission6.Flash(true)
        Mission6.Turn(100)
        Mission6.goStraight(1000)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
```

## Step 6
``|Download|`` the code and test it. Could Rotoy escape from the **King Toad**? Come back to the chapter!