#include <bits/stdc++.h>
using namespace std;
int main(){
    int n=10;
    string s;
    while (n>0)
    {
        int bits=n%2;
        if(bits){
            s=s+to_string(1);
        }
        else{
            s=s+to_string(0);

        }
        n=n/2;
    }
    reverse(s.begin(),s.end());
    cout<<s;
    
    return 0;
}