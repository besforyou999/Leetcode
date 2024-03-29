class Solution(object):
    def fib(self, n):
        f = [0] * 31
        f[0] = 0
        f[1] = 1
        for i in range(2, 31):
            f[i] = f[i-1] + f[i-2]
        
        return f[n]

        
