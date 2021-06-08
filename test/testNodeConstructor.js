const assert = require('assert')
const BinaryTree = require('../bst')

describe('Node', function () {
    describe('constructor', function () {
        it('should create a new Node with data "foo" when called with ("foo")', function () {
            assert.equal(new BinaryTree.Node("foo").data, "foo")
        })
        it('should create a new Node with data "bar" when called with ("bar")', function () {
            assert.equal(new BinaryTree.Node("bar").data, "bar")
        })

        it('should create a new Node with left child Node("bar") when called with ("foo", new Node("bar"))', function () {
            let leftChild = new BinaryTree.Node("bar")
            assert.equal(new BinaryTree.Node("foo", leftChild).left, leftChild)
        })
        it('should create a new Node with left child Node("foo") when called with ("foo", new Node("foo"))', function () {
            let leftChild = new BinaryTree.Node("foo")
            assert.equal(new BinaryTree.Node("foo", leftChild).left, leftChild)
        })

        it('should create a new Node with right child Node("bar") when called with ("foo", null, new Node("bar"))', function () {
            let rightChild = new BinaryTree.Node("bar")
            assert.equal(new BinaryTree.Node("foo", null, rightChild).right, rightChild)
        })
        it('should create a new Node with right child Node("foo") when called with ("foo", null, new Node("foo"))', function () {
            let rightChild = new BinaryTree.Node("foo")
            assert.equal(new BinaryTree.Node("foo", null, rightChild).right, rightChild)
        })
    })
})