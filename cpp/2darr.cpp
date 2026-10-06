#include <bits/stdc++.h>
using namespace std;
int main()
{
    int arr[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    // for (auto &x : arr)
    // {
    //     int sum = 0;
    //     for (auto &y : x)
    //     {
    //         // cout << y<<" ";
    //         sum = sum + y;
    //     }
    //     cout << sum << endl;
    // }
    
    for(int i=0;i<3;i++) {
        int sum=0;
        for(int j=0;j<3;j++)
            sum+= arr[j][i];

        cout << sum<<endl ;
    }

    return 0;
}
