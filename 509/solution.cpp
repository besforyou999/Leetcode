class Solution {
public:
    int fib(int n) {
        int fib[31] = {0,};
        
        fib[0] = 0;
        fib[1] = 1;
        fib[2] = 1;
        fib[3] = 2;
        fib[4] = 3;
        
        if ( n <= 4 ) return fib[n];
        
        for (int i = 5; i <= n ; i++) 
            fib[i] = fib[i-1] + fib[i-2];
        
        return fib[n];
    }
};
