var assert = require('assert')
var lego = require('../legos')

const Brick = lego.Brick

describe('Brick', function () {
    describe('constructor', function () {
        it('should create a new Brick of size 1 when passed (1, "red")', function () {
            assert.equal(new Brick(1, "red").size, 1)
        })

        it('should create a new Brick of size 3 when passed (3, "red")', function () {
            assert.equal(new Brick(3, "red").size, 3)
        })

        it('should create a new Brick of color "red" when passed (1, "red")', function () {
            assert.equal(new Brick(1, "red").color, "red")
        })

        it('should create a new Brick of color "blue" when passed (1, "blue")', function () {
            assert.equal(new Brick(1, "blue").color, "blue")
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
            assert.throws(function() {
                new Brick(0, "red")
            }, Error)
        })

        it('should throw an Error if the size is negative', function () {
            assert.throws(function() {
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
})