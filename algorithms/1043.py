class Solution:
    def maxSumAfterPartitioning(self, arr: List[int], k: int) -> int:
        n = len(arr)
        dp = [0] * n

        for i in range(k):
            dp[i] = max(arr[:i+1]) * (i+1)
        
        for i in range(k, n):
            values = []
            for j in range(k):
                values.append(dp[i-j-1] + max(arr[i-j:i+1]) *(j+1))
            dp[i] = max(values)
        
        return dp[-1]
        
