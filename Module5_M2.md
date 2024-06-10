### @hideIteration true

```template
input.onGesture(Gesture.Shake, function () {
    Module5_M2.onShake()
})
Module5_M2.onStart()
```

# Mission 2

## Introduction @showdialog

Can you upgrade your seismograph and translate the secret message?

## Step 1

Let’s start by using some of the code we created earlier for our shakeCount program. In your **Workspace**, you should see the ``||input:on shake||`` block and the ``||basic:on start||`` block from your earlier program. 

```blocks
// @highlight
input.onGesture(Gesture.Shake, function () {
    Module5_M2.onShake()
})
// @highlight
Module5_M2.onStart()
```

## Step 2

Next, open the ``||basic:Basic||`` toolbox and drag a ``||basic:forever||`` block into your **Workspace**. Now, open the ``||logic:Logic||`` toolbox, grab a ``||logic:if else||`` block and drop that inside of your ``||basic:forever||`` block. Finally, click on the + at the bottom of your ``||logic:if else||`` block 3 times to get ready for the next step. 


```block
// @highlight
basic.forever(function () {
    if (true) {
    } else if (false) {
    } else if (false) {
    } else if (false) {
    } else {
    }
})
```

## Step 3

Now, lets tell our program what to do when you shake your robot. Open the ``||logic:Logic||`` toolbox and drag 4 ``||logic:0 = 0||`` blocks to your **Workspace**. Next, open the ``||Module5_M2:Mission 2||`` toolbox and add 4 ``||Module5_M2:shakeCount||`` variables to your **Workspace**. Now take your 4 ``||Module5_M2:shakeCount||`` variables and place them in your 4 ``||logic:0 = 0||`` blocks replacing the 0 on the left.   

## Step 4

You are doing great! Let’s continue building our conditional statement. Take the first ``||Module5_M2:shakeCount||`` ``||logic: = 0||`` block and drop it to the right of ``||logic:if||`` on the first line of your conditional statement (replacing ``||logic:true||``). Now, repeat these steps for the next 3 ``||logic:else if||`` arms placing them in the blank boxes to the right.

```block
if (Module5_M2.getShakeCount() == 0) {
} else if (Module5_M2.getShakeCount() == 0) {
} else if (Module5_M2.getShakeCount() == 0) {
} else if (Module5_M2.getShakeCount() == 0) {
} else {
}
```

## Step 5

Let’s take a moment to review what we have done so far. First, we borrowed the blocks from our first program to count the number of times your robot is shaken. That number is stored in the ``||Module5_M2:shakeCount||`` variable. We then placed that variable in a conditional statement, which will allow us to do something with that number later. Pretty cool, huh?

## Step 6

Now lets add the secret code to our conditional statement by opening the ``||basic:Basic||`` toolbox and drag 5 ``||basic:show string||`` blocks into your **Workspace**. Next, place a ``||basic:show string||`` block under each arm of your conditional statement starting from ``||logic:if||`` and working your way down to ``||logic:else||``. The ``||basic:show string||`` blocks are great because anything you place in them will be shown on your robot’s screen.

```block
if (Module5_M2.getShakeCount() == 0) {
    basic.showString("Hello!")
} else if (Module5_M2.getShakeCount() == 0) {
    basic.showString("Hello!")
} else if (Module5_M2.getShakeCount() == 0) {
    basic.showString("Hello!")
} else if (Module5_M2.getShakeCount() == 0) {
    basic.showString("Hello!")
} else {
    basic.showString("Hello!")
}
```

## Step 7

You are almost done. Starting from the top, replace the **Hello!** in the ``||basic:show string||`` block with an **H**. Then go down to the next ``||basic:show string||`` block and replace the **Hello!** with an **E**. Keep moving down, adding an **L**, an **O** and a **?** in the remaining ``||basic:show string||`` blocks. Finally, replace the remaining 0s in the ``||logic:if||`` and ``||logic:else if||`` blocks with a **2**, **3**, **4** and a **5**.

```block
if (Module5_M2.getShakeCount() == 2) {
    basic.showString("H")
} else if (Module5_M2.getShakeCount() == 3) {
    basic.showString("E")
} else if (Module5_M2.getShakeCount() == 4) {
    basic.showString("L")
} else if (Module5_M2.getShakeCount() == 5) {
    basic.showString("O")
} else {
    basic.showString("?")
}
```

## Step 8

Incredible! Let’s review what you did. First, you used the ``||input:on shake||`` block to record the number of times your robot was shaken. That number was stored in the variable ``||Module5_M2:shakeCount||``. You then used that variable in a conditional statement that will show a specific letter depending on the number stored. Great Job!

## Step 9

It's time to find the secret code. Shake your robot the following number of times, waiting 5 seconds in between each turn

Turn 1 - 2 shakes;
Turn 2 - 3 shakes;
Turn 3 - 4 shakes;
Turn 4 - 4 shakes;
Turn 5 - 5 shakes;

**Remember to wait 5 seconds between each turn!**



