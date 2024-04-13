let hand: RockPaperScissors = null
input.onGesture(Gesture.Shake, function () {
    hand = Module1_M5.setRandomHand()
    if (hand == Module1_M5.getHand(RockPaperScissors.Rock)) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (hand == Module1_M5.getHand(RockPaperScissors.Paper)) {
        basic.showLeds(`
            . . . . .
            . # # # #
            # # # # #
            # # # # .
            . # # # .
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 500, 500, 255, 0, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    }
})
