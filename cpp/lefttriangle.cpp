#include <bits/stdc++.h>
using namespace std;
int main()
{
    for (int i = 1; i <= 3; i++)
    {
    for (int j = 1; j <= 3; j++)
    {
        if (i >= j)
            cout << " * ";
        else
        {
            cout << "";
        }
    }
    //     for (int j = 3; j >= 1; j--)           //reverse half right triangle
    //     {
    //         if (j >= i)
    //             cout << "*";
    //         else
    //         {
    //             cout << " ";
    //         }
    //     }
        cout << endl;
    }

    // for (int i = 3; i >= 1; i--)                       //3rd quadrant triang
    // {
    //     for (int j = 1; j <= 3; j++)
    //     {
    //         if(i<=j) cout<<"*";
    //         else cout<<" "; 
    //     }
    //     cout<<endl;
    // }

    //   for (int i = 3; i >= 1; i--)                       //4th quadrant triang
    // {
    //     for (int j =3; j>=1; j--)
    //     {
    //         if(i>=j) cout<<"*";
    //         else cout<<" "; 
    //     }
    //     cout<<endl;
    // }
    return 0;
}