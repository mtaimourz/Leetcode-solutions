/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {

    let node = root
    while(node!=null)
    {
        if(node.left!=null)
        {
            let right = node.right
            node.right = node.left
            node.left = null

            let walker = node.right

            while(walker.right!=null)
            {
                walker = walker.right
            }

            walker.right = right
        }


        node = node.right
    }

    
};