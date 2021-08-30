class Solution {
public:
    int numSplits(string s) {
        
        int len = s.size();
        
        vector<int> v1(len), v2(len);
        unordered_set<int> m1, m2;
        
        for (int i = 0; i < len ; i++) {
            m1.insert(s[i]);
            m2.insert(s[len - 1 - i]);
            
            v1[i] = m1.size();
            v2[len - 1 - i] = m2.size();
        }
        int count = 0;
        for (int i = 1; i < len ; i++) {
            if ( v1[i -1] == v2[i] )
                count++;
        }
        
        return count;
    }
};
