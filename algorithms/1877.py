class Solution(object):
    def minPairSum(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        nums.sort()
        n = len(nums)
        ans = -1
        for i in range(n // 2):
            tmp = nums[i] + nums[n - i - 1]
            if tmp > ans:
                ans = tmp
        
        return ans
        
