var assert = require('assert')
var lego = require('../legos')

const Brick = lego.Brick

describe('Brick constructor', function () {
    it('should create a new Brick of size 1 when passed (1, "red")', function () {
        const size1Brick = new Brick(1, "red")

        assert.equal(size1Brick.size, 1)
    })

    it('should create a new Brick of size 3 when passed (3, "red")', function () {
        const size3Brick = new Brick(3, "red")

        assert.equal(size3Brick.size, 3)
    })

    it('should create a new Brick of color "red" when passed (1, "red")', function () {
        const redBrick = new Brick(1, "red")

        assert.equal(redBrick.color, "red")
    })

    it('should create a new Brick of color "blue" when passed (1, "blue")', function () {
        const blueBrick = new Brick(1, "blue")

        assert.equal(blueBrick.color, "blue")
    })

    it('should throw an Error if not provided a size', function () {
        assert.throws(function () {
            new Brick(undefined, "red")
        }, Error)
    })

    it('should throw an Error if not provided a color', function () {
        assert.throws(function () {
            new Brick(1)
        }, Error)
    })

    it('should throw an Error if the size is zero (0)', function () {
        assert.throws(function () {
            new Brick(0, "red")
        }, Error)
    })

    it('should throw an Error if the size is negative', function () {
        assert.throws(function () {
            new Brick(-2, "red")
        }, Error)
    })

    it('should throw an Error if the size is not a number', function () {
        assert.throws(function () {
            new Brick('1', "blue")
        }, Error)
    })

    it('should throw an Error if the color is not a String', function () {
        assert.throws(function () {
            new Brick(3, 42)
        }, Error)
    })
})
