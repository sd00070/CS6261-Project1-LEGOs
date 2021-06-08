module.exports.Node = Node
module.exports.BST = BST

/**
 * Creates a new Node with the given data, left child, and right child.
 * @param {any} data the value to be stored in the tree
 * @param {Node} left the left child of the Node
 * @param {Node} right the right child of the Node
 */
function Node(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
    this.show = show
}

/**
 * Returns the information stored in the Node
 * @returns the information stored in the Node
 */
function show() {
    return this.data
}

/**
 * Creates a new Binary Search Tree
 */
function BST() {
    this.root = null
    this.insert = insert
}

/**
 * inserts some data into the BST
 * @param {any} data the information stored in the Node of the tree
 */
function insert(data) {
    var n = new Node(data, null, null)
    if (this.root == null) {
        this.root = n
    } else {
        var current = this.root
        var parent

        while (true) {
            parent = current

            if (data.size < current.data.size) {
                current = current.left

                if (current == null) {
                    parent.left = n
                    break
                }
            } else {
                current = current.right

                if (current == null) {
                    parent.right = n
                    break
                }
            }
        }
    }
}