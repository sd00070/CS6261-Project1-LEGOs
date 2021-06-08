var assert = require('assert')
var lego = require('../legos')
var bst = require('../bst')

const Brick = lego.Brick
const BST = bst.BST

describe('BST', function () {
    describe('insert', function () {
        it('(single node) should have a single Node at its root after calling on empty tree', function () {
            let testTree = new BST()

            let testBrick = new Brick(4, "red")

            testTree.insert(testBrick)

            assert.equal(testTree.root.data, testBrick)
        })

        it('(root + left) should add a Node to the left when the size is less than the root', function () {
            let testTree = new BST()

            let testRootBrick = new Brick(4, "red")
            let testLeftBrick = new Brick(1, "red")

            testTree.insert(testRootBrick)
            testTree.insert(testLeftBrick)

            assert.equal(testTree.root.left.data, testLeftBrick)
        })

        it('(root + right) should add a Node to the right when the size is greater than the root', function () {
            let testTree = new BST()

            let testRootBrick = new Brick(4, "red")
            let testRightBrick = new Brick(8, "red")

            testTree.insert(testRootBrick)
            testTree.insert(testRightBrick)

            assert.equal(testTree.root.right.data, testRightBrick)
        })

        it('(root + (left & right)) should support adding children to both sides of the tree', function () {
            let testTree = new BST()

            let testRootBrick = new Brick(4, "red")
            let testLeftBrick = new Brick(1, "red")
            let testRightBrick = new Brick(8, "red")

            testTree.insert(testRootBrick)
            testTree.insert(testLeftBrick)
            testTree.insert(testRightBrick)

            assert.equal(testTree.root.left.data, testLeftBrick)
            assert.equal(testTree.root.right.data, testRightBrick)
        })
    })
})