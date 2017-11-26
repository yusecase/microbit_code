basic.forever(() => {
    for (let x = 0; x <= 5 - 1; x++) {
        for (let y = 0; y <= 5 - 1; y++) {
            if (Math.random(3) > 1) {
                led.plot(x, y)
            }
        }
    }
    basic.pause(50)
    for (let z = 0; z <= 5 - 1; z++) {
        for (let a = 0; a <= 5 - 1; a++) {
            if (Math.random(3) > 1) {
                led.unplot(z, a)
            }
        }
    }
})
