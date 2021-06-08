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
    this.find = find
    this.count = count
}

/**
 * Inserts a Brick (or any other object with a comparable size field) into the BST.
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

/**
 * Searches for a Brick (or any other object with a comparable size field) and returns the Node that contains it.
 * If the value is not in the BST, it returns null.
 * @param {any} data the value to be searched for in the BST
 * @returns the matching Node if it exists, null otherwise
 */
function find(data) {
    var current = this.root

    if (current == null) {
        return null
    }

    while (current.data.size !== data.size) {
        if (data.size < current.data.size) {
            current = current.left
        } else {
            current = current.right
        }
        if (current == null) {
            return null
        }
    }

    return current
}

/**
 * Counts the total number of Nodes in the BST
 * @returns {number} the total count
 */
function count() {
    /**
     * Counts the Nodes in the tree from the given starting point
     * @param {Node} node the Node to start from
     * @returns {number} the number of Nodes in the subtree
     */
    const countNodes = function (node) {
        if (node === null || node === undefined) {
            return 0
        }

        return 1 + countNodes(node.left) + countNodes(node.right)
    }

    return countNodes(this.root)
}
