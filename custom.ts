/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

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
namespace Mission5 {
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