#include <bits/stdc++.h>
using namespace std;
int main()
{
    // int m=4-1;
    for (int i = 1; i <= 4; i++)
    {
        for (int j = 1; j <= 8 - i - 1; j++)
        {
            if (j <= 4 - i)
            {
                cout << " ";
            }
            else
            {
                if (i == 1 || j == 1 || i == 4 || j == 4)
                {
                    cout << "*";
                }
            }
        }
        cout << endl;
    }

    return 0;
}



// #include <bits/stdc++.h>
// using namespace std;
 
// int main()
// {
//     int n = 4;

//     for (int i = 1; i <= n; i++)
//     {
//         // spaces
//         for (int j = 1; j <= n - i; j++)
//         {
//             cout << " ";
//         }

//         // stars and inside spaces
//         for (int j = 1; j <= n; j++)
//         {
//             if (i == 1 || i == n || j == 1 || j == n)
//                 cout << "*";
//             else
//                 cout << " ";
//         }

//         cout << endl;
//     }

//     return 0;
// }