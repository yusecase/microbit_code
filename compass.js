let deg = 0
basic.forever(() => {
    deg = input.compassHeading()
    if (deg >= 0 && deg < 45 || deg >= 315 && deg <= 0) {
        basic.showString("N")
    } else if (deg >= 45 && deg < 135) {
        basic.showString("E")
    } else if (deg >= 135 && deg < 225) {
        basic.showString("S")
    } else {
        basic.showString("W")
    }
})
