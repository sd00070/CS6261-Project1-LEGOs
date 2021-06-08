var assert = require('assert')
var lego = require('../legos')

const LegoPile = lego.LegoPile
const Brick = lego.Brick

describe('LegoPile', function () {
    describe('count', function () {
        it('should return zero (0) if there are no Bricks in the LegoPile', function () {
            let pile = new LegoPile()

            const totalBricks = pile.count()

            assert.equal(0, totalBricks)
        })

        it('should return six (6) if there is one of every color', function () {
            let pile = new LegoPile()

            pile.insert(new Brick(4, "red"))
            pile.insert(new Brick(4, "green"))
            pile.insert(new Brick(4, "blue"))
            pile.insert(new Brick(4, "yellow"))
            pile.insert(new Brick(4, "black"))
            pile.insert(new Brick(4, "white"))

            const totalBricks = pile.count()

            assert.equal(6, totalBricks)
        })

        it('should return the number of Bricks in the entire LegoPile', function () {
            let pile = new LegoPile()

            pile.insert(new Brick(4, "red"))
            pile.insert(new Brick(1, "red"))
            pile.insert(new Brick(2, "red"))
            pile.insert(new Brick(3, "red"))
            pile.insert(new Brick(8, "red"))
            pile.insert(new Brick(4, "red"))
            pile.insert(new Brick(64, "green"))
            pile.insert(new Brick(6, "blue"))
            pile.insert(new Brick(8, "yellow"))
            pile.insert(new Brick(1, "black"))
            pile.insert(new Brick(4, "white"))

            const totalBricks = pile.count()

            assert.equal(11, totalBricks)
        })
    })
})