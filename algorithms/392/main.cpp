class Solution {
public:
  
    int comparison(string s, string l) {
        
        int len_s = s.size();
        int len_l = l.size();
        
        int dp[len_s+1][len_l+1];
        
        for (int i = 0; i <= len_s ; i++) {
            dp[i][0] = 0;
        }
        
        for (int j = 0; j <= len_l ; j++) {
            dp[0][j] = 0;
        }
        
        for (int i = 1; i <= len_s ; i++) {
            for (int j = 1; j <= len_l ; j++) {
                if (s[i-1] == l[j-1]) {
                    dp[i][j] = dp[i-1][j-1] +1;
                }
                else {
                    dp[i][j] = max(dp[i-1][j],dp[i][j-1]);
                }
            }
        }
        
        return dp[len_s][len_l];
    }
    
    bool isSubsequence(string s, string l) {

        int compare = comparison(s,l);
            
        if ( compare == s.size())
            return true;
        
        
            return false;
    }
};
