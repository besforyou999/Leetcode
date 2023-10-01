class Solution {
public:
    int tribonacci(int n) {
        vector<int> ans(38);
        
        ans[0] = 0;
        ans[1] = 1;
        ans[2] = 1;
        ans[3] = 2;
        
        if ( n <= 3 ) {
            return ans[n];
        }
        
        for (int i = 4 ; i <= n ; i++) {
            ans[i] = ans[i-1] + ans[i-2] + ans[i-3];
        }
        
        return ans[n];
     }
};
