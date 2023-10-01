class Solution(object):
    def generate(self, numRows):
        n = numRows
        matrix = [[0] * (n+1) for _ in range(n+1)]
        matrix[1][1] = 1
        for c in range(2, n + 1):
            for r in range(1, c + 1):
                if r == 1:
                    matrix[r][c] = matrix[r][c-1]
                elif r == c:
                    matrix[r][c] = matrix[r-1][c-1]
                else:
                    matrix[r][c] = matrix[r][c-1] + matrix[r - 1][c - 1]
        
        ans = []

        for col in range(1, n + 1):
            tmp = []
            for row in range(1, col + 1):
                tmp.append(matrix[row][col])
            ans.append(tmp)

        return ans

