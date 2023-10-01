class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        
        vector<vector<int>> ans;
        
        int mat[31][31] = {0,};
        mat[0][0] = 1;
        mat[1][0] = 1;
        mat[1][1] = 1;
        
        for (int i = 2 ; i <= 30 ; i++ ) {
            for (int j = 0 ; j <= i ; j++) {
                if ( j == 0 ) 
                    mat[i][j] = 1;
                else if ( j == i ) 
                    mat[i][j] = 1;
                else 
                    mat[i][j] = mat[i-1][j] + mat[i-1][j-1];
            }
        }
        
        for (int i = 0 ; i < numRows ; i++) {
            vector<int> v(i+1);
            for (int j = 0; j <= i ; j++) v[j] = mat[i][j]; 
            ans.push_back(v);
        }
        
        return ans;
    }
};
