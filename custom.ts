/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

//% weight=100 color=#ca3142 icon="\uf00d" block="Variables"
//% groups="['Set Variables', 'Your Variables']"
namespace RotoyVariables {
    let turnOn: boolean

    //% weight=90
    //% block="set turnOn to true"
    //% group="Set Variables"
    export function setTurnOnTrue() {
        turnOn = true
    }

    //% weight=90
    //% block="set turnOn to false"
    //% group="Set Variables"
    export function setTurnOnFalse() {
        turnOn = false
    }

    //% weight=90
    //% block="turnOn"
    //% group="Your Variables"
    export function turnOnMethod(): boolean {
        return turnOn
    }
}


/**
 * Custom blocks
 */
//% weight=100 color=#43228e icon="\uf197" block="Mission 1"
namespace Module1_M1 {
    export let lineCrossed = false
    export let moveForwardVar = false

    function resetAll() {
        lineCrossed = false
        moveForwardVar = false
        maqueen.motorStop(maqueen.Motors.All)
    }

    //% weight=90
    //% block="move forward %on"
    export function moveForward(on: boolean) {
        if (on && !moveForwardVar) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
            moveForwardVar = true
        }
        if (!on) {
            resetAll()
        }
    }

    //% weight=90
    //% block="find black line %on"
    export function findBlackLine(on: boolean) {
        if (on && moveForwardVar) {
            lineCrossed = maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 || maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0
        }
        if (!on) {
            resetAll()
        }
    }

    //% weight=90
    //% block="reverse and turn %on"
    export function reverseAndTurn(on: boolean) {
        if (on && lineCrossed) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
            basic.pause(1000)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
            basic.pause(500)
            maqueen.motorStop(maqueen.Motors.All)
            lineCrossed = false
            moveForwardVar = false
        }
        if (!on) {
            resetAll()
        }
    }
}

/**
 * Custom blocks
 */
//% weight=100 color=#43228e icon="\uf197" block="Mission 2"
namespace Module1_M2 {
    export let led3: neopixel.Strip = null
    export let led2: neopixel.Strip = null
    export let led1: neopixel.Strip = null
    export let led0: neopixel.Strip = null
    export let strip: neopixel.Strip = null

    //% weight=90
    //% block="Cave lights %on"
    export function caveLights(on: boolean) {
        if (on) {
            led0.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(100)
            led1.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(100)
            led2.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(100)
            led3.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(100)
            led0.showColor(neopixel.colors(NeoPixelColors.Black))
            led1.showColor(neopixel.colors(NeoPixelColors.Black))
            led2.showColor(neopixel.colors(NeoPixelColors.Black))
            led3.showColor(neopixel.colors(NeoPixelColors.Black))
            basic.pause(100)
            for (let i = 0; i < 10; i++) {
                led0.showColor(neopixel.colors(NeoPixelColors.Red))
                led1.showColor(neopixel.colors(NeoPixelColors.Red))
                led2.showColor(neopixel.colors(NeoPixelColors.Red))
                led3.showColor(neopixel.colors(NeoPixelColors.Red))
                basic.pause(100)
                led0.showColor(neopixel.colors(NeoPixelColors.Black))
                led1.showColor(neopixel.colors(NeoPixelColors.Black))
                led2.showColor(neopixel.colors(NeoPixelColors.Black))
                led3.showColor(neopixel.colors(NeoPixelColors.Black))
            }
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        }
        else {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        }
    }
}

/**
 * Custom blocks
 */
//% weight=100 color=#3958D3 icon="\uf06b"
namespace Mission2 {
    //% weight=90
    //% block="dance with speed %speed"
    export function Dance(speed: number) {
        music.startMelody(music.builtInMelody(randint(1, 10)), MelodyOptions.Forever)
        for (let index = 0; index < 20; index++) {
            if (Math.randomBoolean()) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, speed)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
            } else {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, speed)
            }
            basic.pause(100 * randint(1, 10))
        }
        maqueen.motorStop(maqueen.Motors.All)
        music.stopAllSounds()
    }
}

/**
 * Custom blocks
 */
//% weight=100 color=#3958D3 icon="\uf06b"
namespace Mission6 {
    export let strip: neopixel.Strip = null

    //% block="go straight for %time ms"
    export function goStraight(time: number) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        basic.pause(time)
    }

    //% block="turn for %time ms"
    export function Turn(time: number) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        basic.pause(time)
    }

    //% weight=90
    //% block="flash lights %on"
    export function Flash(on: boolean) {
        if (on) {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        }
        else {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
        }
    }
}

/**
 * Custom blocks
 */
//% weight=100 color=#3958D3 icon="\uf06b"
namespace Mission7 {

    //% block="shake"
    export function Shake() {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
        basic.pause(100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        basic.pause(100)
    }
}

/**
 * Custom blocks
 */
//% weight=100 color=#3958D3 icon="\uf06b"
namespace Mission8 {
    export let index: number
    export let listTone: number[]
    export let listBeat: number[]

    //% weight=90
    //% block="play song"
    export function playSong() {
        index = 0
        basic.showIcon(IconNames.Heart)
        while (index < listTone.length) {
            music.playTone(listTone[index], listBeat[index])
            index += 1
        }
        basic.clearScreen()
    }
}

/**
 * Custom blocks
 */
//% weight=100 color=#3958D3 icon="\uf06b"
namespace Mission10 {
    export let led3: neopixel.Strip = null
    export let led2: neopixel.Strip = null
    export let led1: neopixel.Strip = null
    export let led0: neopixel.Strip = null
    export let strip: neopixel.Strip = null

    //% block="go straight for %time ms"
    export function goStraight(time: number) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        basic.pause(time)
    }

    //% block="go right for %time ms"
    export function goRight(time: number) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        basic.pause(time)
    }

    //% weight=90
    //% block="flash lights %on"
    export function Flash(on: boolean) {
        if (on) {
            if (Math.randomBoolean()) {
                led0.showColor(neopixel.colors(NeoPixelColors.Red))
                led2.showColor(neopixel.colors(NeoPixelColors.Red))
                led1.showColor(neopixel.colors(NeoPixelColors.Green))
                led3.showColor(neopixel.colors(NeoPixelColors.Green))
            } else {
                led1.showColor(neopixel.colors(NeoPixelColors.Red))
                led3.showColor(neopixel.colors(NeoPixelColors.Red))
                led0.showColor(neopixel.colors(NeoPixelColors.Green))
                led2.showColor(neopixel.colors(NeoPixelColors.Green))
            }
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        }
        else {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        }
    }
}