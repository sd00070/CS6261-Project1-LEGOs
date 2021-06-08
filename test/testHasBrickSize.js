var assert = require('assert')
var lego = require('../legos')

const LegoPile = lego.LegoPile

describe('Lego Pile', function () {
    describe('hasBrick', function () {
        it('should return false if color is not in LegoPile', function () {
            let pile = new LegoPile()

            const result = pile.hasBrick(4, "pink")

            assert.equal(false, result)
        })

        it('should return false if the queried color pile is empty', function () {
            let pile = new LegoPile()

            const result = pile.hasBrick(4, "red")

            assert.equal(false, result)
        })

        it.skip('should return false if the queried size is not in the corresponding color pile', function () {

        })
    })
})