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

So the code below will show the distance to the nearest object in front of Rotoy - speaking of which, take out from the box and assemble the **Toad** figurine, and place it in front of Rotoy. ``|Download|`` the code and try it.

```blocks
basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
```

## Step 5 @showhint

On the other hand, if we put stuff in ``||basic:forever||``, the blocks that are inside will be active...well, as the name suggests...forever. Or at least all the time that Rotoy is turned on.

The code below will be showing distance (and updating it) all the time. Once ``||basic:show number||`` is completed, micro:bit will start over. ``|Download|`` the code and try moving the **Toad** to see if the value changes.

```block
basic.forever(function () {
    basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
})
```

## Step 6

``||basic:forever||`` is quite special because it is called a loop, because it loops over and over. micro:bit has other loops that we will talk about in different missions.

## Step 7

Ok, now one more new thing, let's say we want to display a sad or happy face when **Toad** is nearby. To do that, we need ``||Logic:if () else ()||`` condition. So how it will work is:
- ``||Logic:if||`` **Toad** is further away than 10cm, display a happy face,
- ``||Logic:else||`` **Toad** is closer than 10cm, display sad face.

## Step 8 @showhint

Inside of ``||Logic:if ()||``, you need to place a condition to check if **Toad** is already closed or not. For that, you'll need to check if the value ``||Maqueen:reas ultrasonic sensor [cm]||`` is greater or smaller than 10 cm.

Check out this empty code here:

```block
if (maqueen.Ultrasonic(PingUnit.Centimeters) > 10) {
    
} else {
    
}
```

## Step 9

Now just add displaying a sad or happy face. Place everything in ``||basic:forever||`` loop to continously check if **Toad** is nearby. ``|Download|`` the code and test it. Come back to the chapter!

```block
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 10) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
```