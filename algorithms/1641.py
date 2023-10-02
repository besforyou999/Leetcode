class Solution(object):
    def countVowelStrings(self, n):
        dp = [[0] * 5 for _ in range(n + 1)]

        for i in range(5):
            dp[0][i] = 1
        
        for row in range(1, n + 1):
            for col in range(5):
                for i in range(col, 5):
                    dp[row][col] += dp[row - 1][i]
        
        return sum(dp[n - 1])
        
