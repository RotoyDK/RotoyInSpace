input.onButtonPressed(Button.A, function () {
    RotoyVariables.setTurnOnTrue()
})
input.onButtonPressed(Button.B, function () {
    RotoyVariables.setTurnOnFalse()
})
let strip = false
basic.forever(function () {
    Module1_M1.moveForward(RotoyVariables.turnOnMethod())
    Module1_M1.findBlackLine(RotoyVariables.turnOnMethod())
    Module1_M1.reverseAndTurn(RotoyVariables.turnOnMethod())
})
