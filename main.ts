input.onButtonPressed(Button.A, function () {
    music.playMelody("C C5 D B E A F G ", 120)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 C B D A E G F ", 120)
})
radio.setGroup(255)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 700) {
        radio.sendString("forward")
    }
    if (pins.analogReadPin(AnalogPin.P1) < 300) {
        radio.sendString("backward")
    }
    if (pins.analogReadPin(AnalogPin.P2) < 300) {
        radio.sendString("left")
    }
    if (pins.analogReadPin(AnalogPin.P2) > 800) {
        radio.sendString("right")
    }
    if (pins.digitalReadPin(DigitalPin.P12) == 0) {
        radio.sendString("red")
    }
    if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        radio.sendString("blue")
    }
    if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        radio.sendString("yellow")
    }
    if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        radio.sendString("green")
    }
    if (pins.digitalReadPin(DigitalPin.P11) == 0) {
        radio.sendString("middle")
    }
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        radio.sendString("high")
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        radio.sendString("rainbow")
    }
})
