class Solution {
public:
    int countSquares(vector<vector<int>>& matrix) {
        
        int n = matrix.size();  // rows
        int m = matrix[0].size(); // column
        
        int ans = 0;
        
        int min_side = min(n,m);
        
        for (int len = 1 ; len <= min_side ; len++) {
            ans += counter(matrix, len, n, m);
        }
        
        return ans;
    }
    
    int counter(vector<vector<int>>& matrix, int side, int n, int m) {
        
        int count = 0;
     
        for (int i = 0; i <= n - side ; i++) {
            for (int j = 0; j <= m - side ; j++) {
                if ( checker(matrix, i, j, side ) ){
                    count++;
                }
            }
        }
        
        return count;
    }
    
    bool checker(vector<vector<int>> & matrix, int i, int j , int side) {
        int temp = j;
        for (int a = 0; a < side ; a++) {
            j = temp;
            for (int b = 0 ; b < side ; b++) {
                if ( matrix[i][j] == 0) {
                    return false;
                }
                j += 1;
            }
            i += 1;
        }
        
        return true;
    }
};
