# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def averageOfLevels(self, root):
        ans, queue = [], deque([root])
        while queue:
            tmp, n = 0, len(queue)
            for _ in range(n):
                node = queue.popleft()
                tmp += float(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            ans.append(tmp / n)
        return ans
                
