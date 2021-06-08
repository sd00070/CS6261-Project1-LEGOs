var assert = require('assert')
var lego = require('../legos')

const LegoPile = lego.LegoPile
const Brick = lego.Brick

describe('LegoPile hasBrick', function () {
    it('should return false if color is not in LegoPile', function () {
        let pile = new LegoPile()

        const result = pile.hasBrick(4, "pink")

        assert.equal(result, false)
    })

    it('should return false if the queried color pile is empty', function () {
        let pile = new LegoPile()

        const result = pile.hasBrick(4, "red")

        assert.equal(result, false)
    })

    it('should return false if the queried size is not in the corresponding color pile', function () {
        let pile = new LegoPile()
        pile.insert(new Brick(4, "red"))
        pile.insert(new Brick(12, "red"))

        const result = pile.hasBrick(16, "red")

        assert.equal(result, false)
    })

    it('should return true if a Brick of the matching color and size exists in the LegoPile', function () {
        let pile = new LegoPile()
        pile.insert(new Brick(4, "red"))
        pile.insert(new Brick(4, "green"))
        pile.insert(new Brick(16, "red"))
        pile.insert(new Brick(12, "black"))

        const result = pile.hasBrick(16, "red")

        assert.equal(result, true)
    })
})
