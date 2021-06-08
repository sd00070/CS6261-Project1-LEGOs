var assert = require('assert')
var lego = require('../legos')

const Brick = lego.Brick
const LegoPile = lego.LegoPile

describe('LegoPile', function () {
    describe('insert', function () {
        it('(one brick) should insert a Brick into the correct color in an empty LegoPile', function () {
            let pile = new LegoPile()

            const redBrick = new Brick(4, "red")

            pile.insert(redBrick)

            assert.equal(pile.colors.red.root.data, redBrick)
        })

        it('(one of each color) should allow inserting into all colors', function () {
            let pile = new LegoPile()

            const redBrick = new Brick(4, "red")
            const greenBrick = new Brick(64, "green")
            const blueBrick = new Brick(6, "blue")
            const yellowBrick = new Brick(8, "yellow")
            const blackBrick = new Brick(1, "black")
            const whiteBrick = new Brick(4, "white")

            pile.insert(redBrick)
            pile.insert(greenBrick)
            pile.insert(blueBrick)
            pile.insert(yellowBrick)
            pile.insert(blackBrick)
            pile.insert(whiteBrick)

            assert.equal(pile.colors.red.root.data, redBrick)
            assert.equal(pile.colors.green.root.data, greenBrick)
            assert.equal(pile.colors.blue.root.data, blueBrick)
            assert.equal(pile.colors.yellow.root.data, yellowBrick)
            assert.equal(pile.colors.black.root.data, blackBrick)
            assert.equal(pile.colors.white.root.data, whiteBrick)
        })
    })
})