```customts
control.inBackground(function () {
    while (true) {
        if (input.temperature() >= 23) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
        }
    }
})
```

```template
basic.forever(function () {
})
```

```package
maqueen=github:dfrobot/pxt-maqueen#v1.7.2
```

# Mission 7

## Introduction @showdialog

It's time to shake your robot! 

## Step 1

Did you know that micro:bit has a temperature sensor? It measures it by checking how warm (or cold) his processor is.

## Step 2

To use it, you need ``||input:temperature (°C)||``. To display it, use ``||basic:show number||``.
And perhaps use one of the button blocks to call it everytime you press it.

## Step 3

Here's a hint if you need it:

```block
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
```

## Step 5

Now, let's get to work. Rotoy is supposed to shake to warm up when the temperature is too low (under 23°C) - he gets cold very quickly. And anything above that is fine for him - so he can stop shaking.

Use ``||basic:forever||``, ``||logic:if else||`` and ``||input:temperature (°C)||``. Then fill it out with ``||Mission7:shake||`` and ``||Maqueen:stop [all] motors||``.

## Step 6

Are you stuck - here's a bit of help!

```block
basic.forever(function () {
    if (input.temperature() >= 23) {
        maqueen.motorStop(maqueen.Motors.All)
    } else {
        Mission7.Shake()
    }
})
```

## Step 7

``|Download|`` the code and ensure that Rotoy is warm enough!
Remember that you can warm Rotoy by blowing warm air on micro:bit [only with your mouth!!! ``|DO NOT USE|`` hair dryer, it might melt Rotoy :( ] Go back to the chapter!