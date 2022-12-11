```customts
Mission8.listBeat = [
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Double),
        music.beat(BeatFraction.Half),
        music.beat(BeatFraction.Half),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Double),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Double),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Double),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Double),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Double),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Double),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Double),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Double),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Double),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Double),
        music.beat(BeatFraction.Double),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Double),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Double),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Double),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Whole),
        music.beat(BeatFraction.Double),
        music.beat(BeatFraction.Double)
    ]
Mission8.listTone = [
        294,
        494,
        440,
        392,
        294,
        294,
        294,
        294,
        494,
        440,
        392,
        330,
        330,
        523,
        494,
        440,
        370,
        587,
        587,
        523,
        440,
        494,
        294,
        494,
        440,
        392,
        294,
        294,
        494,
        440,
        392,
        330,
        330,
        330,
        523,
        494,
        440,
        587,
        587,
        587,
        587,
        659,
        587,
        523,
        440,
        392,
        494,
        494,
        494,
        494,
        494,
        494,
        494,
        587,
        392,
        440,
        494,
        523,
        523,
        523,
        523,
        523,
        494,
        494,
        494,
        494,
        494,
        440,
        440,
        494,
        440,
        587,
        494,
        494,
        494,
        494,
        494,
        494,
        494,
        587,
        392,
        440,
        494,
        523,
        523,
        523,
        523,
        523,
        494,
        494,
        494,
        494,
        494,
        440,
        440,
        494,
        440,
        587
    ]
```

# Mission 8

## Introduction @showdialog

Clap your hands and make Rotoy sing you a song!

## Step 1

You can ask Rotoy to sing you a song, but to activate it you have to clap 5 times! Rotoy has a microphone, so you can use it to catch your clapping! But first let's talk about something else - ``||variables:Variables||``

## Step 2

A variable is like a container, it can store a value that we can later change or use in a program elsewhere.
micro:bit uses red blocks ``||variables:Variables||``, to create a new variable, just pick ``||variables:Variables||`` in your **Toolbox**, and click "Make a variable...", then you just choose a name and that's it, you've created a variable.

## Step 3

Ok, let's try it with an example.

We want Rotoy to sing a song after you clap 5 times, so let's create new variable called ``||variables:clapNumber||``.

## Step 4 @showhint

We have a variable now, but it's empty, to give it some value, we need to use block ``||variables:set clapNumber to||``. Let's set it to 0, because at the beginning you didn't clap at all.

```blocks
let clapNumber = 0
```

## Step 5

Great! Now, let's check if Rotoy detected a clap! With ``||input:on loud sound||`` block, you can tell Rotoy what to do when a loud sound is detected.

## Step 6 @showhint

So if clap is detected our ``||variables:clapNumber||`` should increase by 1, we can achieve it by calling ``||variables:change clapNumber by [1]||``.

```block
input.onSound(DetectedSound.Loud, function () {
    clapNumber += 1
})
```

## Step 7

Awesome, now just throw ``||Logic:if||`` that checks if ``||variables:clapNumber||`` is equal to 5 in ``||Basic:forever||`` loop. And if it is - turn on the song - ``||Mission8:play song||``! You can also reset it after 5 back to 0 by setting ``||variables:set clapNumber to [0]||``

## Step 8

Here's some hint if you need it:

```blocks
input.onSound(DetectedSound.Loud, function () {
    clapNumber += 1
    basic.showNumber(clapNumber)
})
let clapNumber = 0
basic.forever(function () {
    if (clapNumber == 5) {
    	Mission8.playSong()
        clapNumber = 0
    }
})
```

## Step 5

Clap 5 times and lift everyone's spirit with the song. ``|Download|`` the code and return to the chapter!