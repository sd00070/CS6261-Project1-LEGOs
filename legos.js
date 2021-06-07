module.exports.Brick = Brick

/**
 * Creates a new LEGO Brick with the given size and color
 * @param {Number} size the number of studs on the top of the brick
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