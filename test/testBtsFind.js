var assert = require('assert')
var bst = require('../bst')

const BST = bst.BST

describe('BST', function () {
    describe('find', function () {
        it('should return null if the tree is empty', function () {
            let tree = new BST()

            const result = tree.find({
                size: 0
            })

            assert.equal(null, result)
        })

        it('should return null if the value is not in the tree', function () {
            let tree = new BST()
            tree.insert({
                size: 0
            })
            tree.insert({
                size: -1
            })
            tree.insert({
                size: 1
            })

            const result = tree.find({
                size: 2
            })

            assert.equal(null, result)
        })

        it('should return the Node with the stored value if found', function () {
            let tree = new BST()

            const testData = {
                size: 4
            }

            tree.insert({
                size: 1
            })
            tree.insert({
                size: 7
            })
            tree.insert({
                size: 3
            })
            tree.insert({
                size: 5
            })
            tree.insert(testData)

            const foundNode = tree.find(testData)

            assert.equal(testData, foundNode.data)
        })
    })
})