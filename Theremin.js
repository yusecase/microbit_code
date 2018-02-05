basic.forever(() => {
    if (input.lightLevel() < 32) {
        music.ringTone(262)
    } else if (input.lightLevel() < 64) {
        music.ringTone(294)
    } else if (input.lightLevel() < 96) {
        music.ringTone(330)
    } else if (input.lightLevel() < 128) {
        music.ringTone(349)
    } else if (input.lightLevel() < 160) {
        music.ringTone(392)
    } else if (input.lightLevel() < 192) {
        music.ringTone(440)
    } else if (input.lightLevel() < 224) {
        music.ringTone(494)
    } else {
        music.ringTone(523)
    }
})
