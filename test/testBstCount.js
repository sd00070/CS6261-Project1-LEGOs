var assert = require('assert')
var bst = require('../bst')

const BST = bst.BST

describe('BST', function () {
    describe('count', function () {
        it('should return zero (0) on an empty BST', function () {
            let tree = new BST()

            const count = tree.count()

            assert.equal(0, count)
        })

        it('should return one (1) if it only has a root', function () {
            let tree = new BST()
            tree.insert({ size: 42 })

            const count = tree.count()

            assert.equal(1, count)
        })

        it('should return the number of nodes in the BST', function () {
            let tree = new BST()
            tree.insert({ size: 1 })
            tree.insert({ size: 43 })
            tree.insert({ size: 62 })
            tree.insert({ size: 2 })
            tree.insert({ size: 64 })
            tree.insert({ size: 18 })
            tree.insert({ size: 29 })

            const count = tree.count()

            assert.equal(7, count)
        })
    })
})