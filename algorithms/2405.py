class Solution(object):
    def partitionString(self, s):
        ans = 1
        alpha = set()
        for ch in s:
            if ch not in alpha:
                alpha.add(ch)
                continue
            alpha.clear()
            alpha.add(ch)
            ans += 1
            
        return ans
        
