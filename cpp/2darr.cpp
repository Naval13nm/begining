#include <bits/stdc++.h>
using namespace std;
int main()
{
    // int arr[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
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

    // for (int i = 3; i >= 0; i--)
    // {
    //     // int sum=0;

    //     for (int j = 1; j <= 3 - i; j++)
    //     {
    //         cout << " ";
    //     }
    //     for (int j = 1; j <= i; j++)
    //     {
    //         cout << "*";
    //     }
    //     for (int j = 1; j <= 3; j++)
    //     {
    //         if(j<i){
    //             cout<<"*";
    //         }
    //     }
    //     cout << endl;
    // }

    int n = 3;

    for (int i = 0; i < n; i++)
    {
        // int sum=0;

        for (int j = 0; j < n * 2 - 1; j++)
        {
            if (i == n - 1 || j == n - 1)
                cout << "*";
            else if (i > j)
                cout << "*";
            else
                cout << " ";
        }

        cout << endl;
    }

    return 0;
}
