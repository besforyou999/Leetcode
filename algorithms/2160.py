class Solution(object):
    def minimumSum(self, num):
        """
        :type num: int
        :rtype: int
        """
        digits = list(str(num))
        digits.sort()
        first = int(digits[0] + digits[2])
        second = int(digits[1] + digits[3])
        return first + second
        
