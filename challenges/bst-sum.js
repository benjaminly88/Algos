function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree, determine the sum of all the values.
Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

*/

// const bstSum = (r) => r ? r.value + bstSum(r.left) + bstSum(r.right) : 0;

const bstSum = (root) => {
  let sum = 0;

  function process(root) {
    sum += root.value;
    // console.log(sum);
    root.left ? process(root.left) : null;
    root.right ? process(root.right) : null;
  }

  process(root);
  return sum;
};

let bst = new BinarySearchTree(5);
bst.left = new BinarySearchTree(3);
bst.left.left = new BinarySearchTree(2);
bst.left.right = new BinarySearchTree(4);
bst.right = new BinarySearchTree(6);
console.log(bst);
console.log(bstSum(bst));

// assign sum to 0, add the value of root to sum
// if left node exists, call the function again on the left node
// if right node exists, call the function again
// return sum

/*

Extension:
Given the root of a binary search tree, reverse the binary search tree in-place
and return the root. Reverse the tree so that for each node, every number on the
left is greater and every number on the right is lesser.

For example, the original tree:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

reverses to:

     4
   /   \
  7     2
 /     / \
9     3   1
 \
  8

Do this in-place, so that we never use the BinarySearchTree constructor to
create any new nodes in memory.

Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

*/

const bstReverse = (root) => {
  if (!root) return null;
  [root.right, root.left] = [root.left, root.right];
  bstReverse(root.left);
  bstReverse(root.right);
  return root;
};

module.exports = { BinarySearchTree, bstSum, bstReverse };
