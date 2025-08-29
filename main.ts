basic.forever(function () {
    if (input.compassHeading() < 20 || input.compassHeading() > 340) {
        basic.showArrow(ArrowNames.North)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        basic.showIcon(IconNames.No)
    }
})
