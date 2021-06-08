var assert = require('assert')
var lego = require('../legos')

const Brick = lego.Brick
const LegoPile = lego.LegoPile

describe('LegoPile', function () {
    describe('insert', function () {
        it('(one brick) should insert a Brick into the correct color in an empty LegoPile', function () {
            let pile = new LegoPile()

            const oneRedBrick = new Brick(4, "red")

            pile.insert(oneRedBrick)

            assert.equal(pile.colors.red.root.data, oneRedBrick)
        })
    })
})