var assert = require('assert')
var lego = require('../legos')
var bst = require('../bst')

const Brick = lego.Brick
const BST = bst.BST

describe('BST', function () {
    describe('insert', function () {
        it('(single node) should have a single Node at its root after calling on empty tree', function () {
            let tree = new BST()

            let rootBrick = new Brick(4, "red")

            tree.insert(rootBrick)

            assert.equal(tree.root.data, rootBrick)
        })

        it('(root + left) should add a Node to the left when the size is less than the root', function () {
            let tree = new BST()

            let leftBrick = new Brick(1, "red")

            tree.insert(new Brick(4, "red"))
            tree.insert(leftBrick)

            assert.equal(tree.root.left.data, leftBrick)
        })

        it('(root + right) should add a Node to the right when the size is greater than the root', function () {
            let tree = new BST()

            let rightBrick = new Brick(8, "red")

            tree.insert(new Brick(4, "red"))
            tree.insert(rightBrick)

            assert.equal(tree.root.right.data, rightBrick)
        })

        it('(root + (left & right)) should support adding children to both sides of the tree', function () {
            let tree = new BST()

            let leftBrick = new Brick(1, "red")
            let rightBrick = new Brick(8, "red")

            tree.insert(new Brick(4, "red"))
            tree.insert(leftBrick)
            tree.insert(rightBrick)

            assert.equal(tree.root.left.data, leftBrick)
            assert.equal(tree.root.right.data, rightBrick)
        })

        it('(general) should support adding outside left grandchildren', function () {
            let tree = new BST()

            let outsideLeftGrandchildBrick = new Brick(1, "gold")

            tree.insert(new Brick(4, "red"))
            tree.insert(new Brick(3, "blue"))
            tree.insert(outsideLeftGrandchildBrick)

            assert.equal(tree.root.left.left.data, outsideLeftGrandchildBrick)
        })

        it('(general) should support adding outside right grandchildren', function () {
            let tree = new BST()

            let outsideRightGrandchildBrick = new Brick(64, "green")

            tree.insert(new Brick(4, "red"))
            tree.insert(new Brick(8, "grey"))
            tree.insert(outsideRightGrandchildBrick)

            assert.equal(tree.root.right.right.data, outsideRightGrandchildBrick)
        })

        it('(general) should support adding inside left grandchildren', function () {
            let tree = new BST()

            let insideLeftGrandchild = new Brick(3, "blue")

            tree.insert(new Brick(4, "red"))
            tree.insert(new Brick(1, "red"))
            tree.insert(insideLeftGrandchild)

            assert.equal(tree.root.left.right.data, insideLeftGrandchild)
        })

        it('(general) should support adding inside right grandchildren', function () {
            let tree = new BST()

            let insideRightGrandchild = new Brick(8, "grey")

            tree.insert(new Brick(1, "red"))
            tree.insert(new Brick(64, "green"))
            tree.insert(insideRightGrandchild)

            assert.equal(tree.root.right.left.data, insideRightGrandchild)
        })

        it('(general) should support adding nodes deep into the structure', function () {
            let tree = new BST()

            let deepAncestorBrick = new Brick(13, "black")

            tree.insert(new Brick(4, "red"))
            tree.insert(new Brick(20, "green"))
            tree.insert(new Brick(18, "gold"))
            tree.insert(new Brick(6, "yellow"))
            tree.insert(new Brick(14, "pink"))
            tree.insert(new Brick(10, "blue"))
            tree.insert(new Brick(12, "purple"))
            tree.insert(deepAncestorBrick)

            assert.equal(tree.root.right.left.left.right.left.right.right.data, deepAncestorBrick)
        })
    })
})