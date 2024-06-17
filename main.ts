input.onGesture(Gesture.Shake, function () {
    Module5_M1.resetShakeCounter(3, startTime)
    startTime = input.runningTime()
    shakeCount += 1
    basic.showNumber(shakeCount)
})
let shakeCount = 0
let startTime = 0
startTime = 0
shakeCount = 0
