let turnOn = false
input.onButtonPressed(Button.A, function () {
    turnOn = true
})
input.onButtonPressed(Button.B, function () {
    turnOn = false
})
basic.forever(function () {
    Module1_M1.moveForward(turnOn)
    Module1_M1.findBlackLine(turnOn)
    Module1_M1.reverseAndTurn(turnOn)
})
