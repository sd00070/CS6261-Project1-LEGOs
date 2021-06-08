var assert = require('assert')
var lego = require('../legos')
var bst = require('../bst')

const Brick = lego.Brick
const BST = bst.BST

describe('BST', function () {
    describe('insert', function () {
        it('should have a single Node at its root after calling on empty tree', function () {
            let testBrick = new Brick(4, "red")
            let testTree = new BST()
    
            testTree.insert(testBrick)
    
            assert.equal(testTree.root.data, testBrick)
        })
    })
})