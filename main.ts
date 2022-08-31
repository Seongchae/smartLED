/**
 * 아날로그 센서값을 이용한 LED 출력 제어가 어려울 경우 A,B버튼으로 대체해 보자!
 */
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
})
let 밝기 = pins.analogReadPin(AnalogPin.P1)
basic.forever(function () {
    if (밝기 < 300) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
