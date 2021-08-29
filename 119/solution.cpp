class Solution {
public:
    vector<int> getRow(int rowIndex) {
        int mat[34][34];
      
        mat[0][0] = 1;
        mat[1][0] = 1;
        mat[1][1] = 1;
        
        vector<int> v1(1);
        v1[0] = 1;
        
        vector<int> v2(2);
        v2[0] = 1;
        v2[1] = 1;
        
        if (rowIndex == 0) 
            return v1;
        else if (rowIndex == 1)
            return v2;
        
        for (int i = 2; i <= rowIndex ; i++) {
            for (int j = 0; j <= i ; j++) {
                if (j == 0)
                    mat[i][j] = 1;
                else if ( j == i)
                    mat[i][j] = 1;
                else
                    mat[i][j] = (mat[i-1][j] + mat[i-1][j-1]);
            }
        }
        
        vector<int> ans(rowIndex+1);
        
        for (int i = 0 ; i <= rowIndex ; i++) {
            ans[i] = mat[rowIndex][i];
        }
        
        return ans;
    }
};
