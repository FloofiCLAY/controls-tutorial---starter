function playLevel () {
    game.splash("floor", convertToText(level))
    if (level == 1) {
        for (let index = 0; index < 1; index++) {
            twisted = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . 3 3 . . . . . 3 3 . . . . 
                . . 3 3 3 3 3 5 3 3 3 3 3 . . . 
                . . f 3 f 6 9 9 9 9 f 3 f . . . 
                . . f f 6 9 9 9 9 9 9 f f . . . 
                . . . f 6 2 2 9 2 2 9 f . . . . 
                . . . . 9 2 f 6 f 2 9 6 . . . . 
                . . . . 9 2 f 6 f 2 9 6 9 . . . 
                . . . . . 9 9 9 9 9 6 6 9 . . . 
                . . . . . 6 b b b 6 6 9 . . . . 
                . . . . . 9 b 3 3 9 . . . . . . 
                . . . . 9 9 b 3 3 9 9 . . . . . 
                . . . . . b 3 3 3 b . . . . . . 
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . . f . f . . . . . . . 
                . . . . . f f . f f . . . . . . 
                `, SpriteKind.Enemy)
            twisted.setPosition(0, 0)
            twisted.follow(glisten, 17)
            pause(10000)
        }
    } else if (level == 2) {
        for (let index = 0; index < 1; index++) {
            twisted = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . c c d d d c c . . . . . 
                . . . f f f f d f f f f . . . . 
                . . . f f f f f f f f f . . . . 
                . . f f f f a f f f a f f . . . 
                . . . . f 2 2 f 2 2 a . . . . . 
                . . . . a 2 f c f 2 a . . . . . 
                . . . . a 2 f c f 2 a . . . . . 
                . . . . a a a a a a a . . . . . 
                . . . . . c 6 6 6 c . . . . . . 
                . . . . . a c 9 c a . . . . . . 
                . . . . . a c c c a . . . . . . 
                . . . . a a 9 9 9 a a . . . . . 
                . . . . . . 6 . 6 . . . . . . . 
                . . . . . . f . f . . . . . . . 
                . . . . . f f . f f . . . . . . 
                `, SpriteKind.Enemy)
            twisted.setPosition(0, 0)
            twisted.follow(glisten, 17)
            pause(10000)
        }
    } else if (level == 3) {
        for (let index = 0; index < 1; index++) {
            twisted = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . c c c c c c c c c . . . . 
                . . . . c 2 2 c 2 2 c . . . . . 
                . . . . c 2 f c f 2 c . . . . . 
                . . . . c 2 f c f 2 c . . . . . 
                . . . . . c c c c c . . . . . . 
                . . . . . f e e e f . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . c c 4 4 4 c f . . . . . 
                . . . . f f f f f . . . . . . . 
                . . f f f f f f f . . . . . . . 
                `, SpriteKind.Enemy)
            twisted.setPosition(0, 0)
            twisted.follow(glisten, 10)
            pause(10000)
        }
    }
    level += 1
    if (level == 4) {
        game.gameOver(true)
    }
    game.setGameOverMessage(true, "YOU SURIVED!")
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    time = game.runtime()
    info.setScore(time / 100)
    info.setLife(0)
    game.setGameOverMessage(false, "YOU DIED.")
})
let time = 0
let twisted: Sprite = null
let level = 0
let glisten: Sprite = null
scene.setBackgroundColor(13)
glisten = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . 5 1 1 5 5 1 5 . . . . . 
    . . . . 5 1 f 1 f 1 5 . . . . . 
    . . . . 5 1 f 1 f 1 5 . . . . . 
    . . . . 5 3 1 1 1 3 5 . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . 3 f 3 3 3 f 3 . . . . . 
    . . . . 3 f 3 3 3 f 3 . . . . . 
    . . . . f f 5 5 5 f f . . . . . 
    . . . . . 3 1 . 1 3 . . . . . . 
    . . . . 3 . 1 . 1 . 3 . . . . . 
    . . . . . f f . f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(glisten, 26, 39)
glisten.setStayInScreen(true)
info.setLife(1)
level = 1
game.splash("RUN", "for 3 floors")
while (info.life() == 1) {
    playLevel()
}
