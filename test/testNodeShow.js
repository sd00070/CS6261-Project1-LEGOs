const assert = require('assert')
const BinaryTree = require('../bst')

describe('Node', function () {
    describe('show', function () {
        it('should return 1 when called on a Node with data as 1', function () {
            let testNode = new BinaryTree.Node(1)
            assert.equal(testNode.show(), 1)
        })
        it('should return "foo" when call on a Node with data as "foo"', function () {
            let testNode = new BinaryTree.Node("foo")
            assert.equal(testNode.show(), "foo")
        })
    })
})