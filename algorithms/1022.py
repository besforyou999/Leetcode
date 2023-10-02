# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def sumRootToLeaf(self, root):
        def dfs(root, res):
            if root == None:
                return 0
            res = (2 * res) + root.val
            if root.left == None and root.right == None:
                return res
            return dfs(root.left, res) + dfs(root.right, res)
        
        return dfs(root, 0)

