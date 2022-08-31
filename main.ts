let 밝기 = pins.analogReadPin(AnalogPin.P0)
basic.forever(function () {
    if (밝기 > 200) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
