sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
function projectile2 () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . 7 7 7 7 . . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . 7 f 1 7 7 7 . . . . . 
. . . . . 7 1 1 7 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . . 7 7 7 7 . . . . . . 
. . . . . . . 7 7 7 7 . d . . . 
. . . . . . . . . 7 d d d . . . 
. . . . . . . . 7 d d d 1 . . . 
. . . . . . . . . d d d 1 . . . 
. . . . . . . . . . 1 1 1 d . . 
. . . . . . . . . . . d . . . . 
`, 50, 0)
    projectile.setPosition(0, Math.randomRange(-50, 120))
}
function player () {
    Victim = sprites.create(img`
. . . . . . . . . . . . . 9 9 . 
. . . . . . . . . . . 9 9 f f 9 
. . . . . . . . . . 9 f f f f 9 
. . . . . . . . . 9 9 f 9 9 f 9 
. . . . . . . . 9 f f f f f f 9 
. . . . . . . 9 f f 1 1 f f f 9 
. . . . . . . 9 f f 1 1 f f f 9 
. . . . . . . 9 f f f f f f f 9 
. . . . . . . 9 9 f f f f f f 9 
. . . . . . . . . 9 f f f f f 9 
. . . . . . . . . 9 9 f f f f 9 
. . . . . . . . . 9 f 9 f f f 9 
. . . . . . . . . 9 f f 9 f f 9 
. . . . . . . . . 9 9 f f f f 9 
. . . . . . . . . . . 9 9 9 9 9 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    Victim.setPosition(74, 55)
    controller.moveSprite(Victim, 100, 100)
}
let Victim: Sprite = null
let projectile: Sprite = null
player()
game.onUpdate(function () {
    projectile()
})
