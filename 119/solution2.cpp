class Solution {
public:
    vector<int> getRow(int rowIndex) {
        
        vector<int> ans;
        ans.push_back(1);
        
        if (rowIndex == 0)
            return ans;       
        
        ans.push_back(1);
        
        if (rowIndex == 1)
            return ans;
        
        
        
        for (int i = 2 ; i <= rowIndex ; i++) {
            
            int len = ans.size();
            
            vector<int> temp(len+1);
            
            temp[0] = 1;
            
            for (int j = 1 ; j < len ; j++) {
                temp[j] = ans[j-1] + ans[j];
            }
            
            temp[len] = 1;
            
            ans = temp;
            
            temp.clear();
        }
     
        return ans;
    }
};
