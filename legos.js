module.exports.Brick = Brick
module.exports.LegoPile = LegoPile

var bst = require("./bst")

const BST = bst.BST

/**
 * Creates a new LEGO Brick with the given size and color
 * @param {Number} size the number of studs on the top of the Brick
 * @param {String} color the color of the Brick
 */
function Brick(size, color) {
    if (size === undefined || size === null || typeof size !== 'number' || size <= 0) {
        throw new Error('Size must be an integer greater than 0')
    }
    if (color === undefined || color === null || typeof color !== 'string') {
        throw new Error('Color must be a String')
    }
    this.size = size
    this.color = color
}

/**
 * Creates a new pile of LEGOs, storing each color in its own BST.
 */
function LegoPile() {
    this.colors = {
        red: new BST(),
        green: new BST(),
        blue: new BST(),
        yellow: new BST(),
        black: new BST(),
        white: new BST()
    }
    this.insert = insert
    this.hasBrick = hasBrick
}

/**
 * Inserts a Brick into the correct color of the LegoPile.
 * @param {Brick} brick the LEGO brick to add to the LegoPile
 * @returns nothing
 */
function insert(brick) {
    if (!(brick.color in this.colors)) {
        console.error('Invalid Brick color')
        return
    }
    this.colors[brick.color].insert(brick)
}

/**
 * Searches through the LegoPile for a Brick of the given size and color.
 * Returns whether or not one exists.
 * 
 * @param {number} size the number of studs on the top of the queried Brick
 * @param {string} color the color of the queried Brick
 * @returns true if brick is in LegoPile, false otherwise
 */
function hasBrick(size, color) {
    if (!(color in this.colors)) {
        return false
    }
    if (this.colors[color].root === null) {
        return false
    }
}