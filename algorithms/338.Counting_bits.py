class Solution(object):
    def countBits(self, n):
        ans = [0] * (n + 1)
        for i in range(1, n + 1):
            if i % 2 == 1:
                ans[i] = ans[i//2] + 1
            else:
                ans[i] = ans[i//2]
        
        return ans
