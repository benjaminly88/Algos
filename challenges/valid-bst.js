/* 
  Given a node representing the root of a binary tree, write a function to check if it is a valid binary *search* tree. 
  
  A binary tree is a valid binary search tree if it satisfies the following constraints:
    - For any given node, the value of ALL of the child nodes in its left branches must be less than its value.
    - For any given node, the value of ALL of the child nodes in its right branches must be greater than its value.
    - The tree contains no duplicate values.

  For example, this would be a valid BST:

         4
       /   \ 
     2      5
   /   \
  1     3

  whereas this would not be a valid BST:

         3
       /   \
     2      5
   /   \
  1    *4*

  because the node with value 4 on the left-hand side of the tree, but it's value is greater than the root node value 3.
  For this to be considered a valid BST the tree would need to look like this:
  
         3
       /   \
     2      5
   /      /
  1     *4*

*/

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

const validBST = (tree) => {
  const array = [];
  let i = 0;

  function treeToArray(tree) {
    if (!tree) return;

    treeToArray(tree.left);
    array.push(tree.value);
    treeToArray(tree.right);
  }

  treeToArray(tree);

  for (let j = 0; i < array.length; j++) {
    if (array[j] >= array[j + 1]) {
      return false;
    }
  }

  return true;
};

const validBST2 = (tree, min = -Infinity, max = Infinity) => {
  if (!tree) return true;
  if (tree.value < min || tree.value > max) return false;
  return (
    validBST2(tree.left, min, tree.value) &&
    validBST2(tree.right, tree.value, max)
  );
};
// check every value on the left of the first node to be less than the first value
// check every value on the right of the first node to be more than the first value
// if any do not satisfy, return false
// function process will check the first left and right to see if they satisfy the conditions
// afterwards, if they do, they will each invoke their own respective recursive functions to determine if every single value after satisfies the condition

module.exports = { BinaryTree, validBST };
