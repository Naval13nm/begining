#include <bits/stdc++.h>
using namespace std;
int main()
{
    // long long f='ss';

    // cout<<sizeof(f);
    // int64_t a=33;
    // int32_t a=33;

    // use for loop when we know how many times we need to run loop or iterate loop
    //  int ans=0;
    //  for (int i = 1;  i<10;)
    //  {
    //      ans=ans+i;
    //  }
    //  cout<<ans;

    // while
    // int n = 10;
    // int i = 0;
    // int j = n;
    // int ans = 0;
    // while (j >= i)
    // {
    //     ans = ans + j;
    //     j--;
    // }
    // for (int j = n; j >=i; j--)
    // {
    //    ans = ans + j;
    // }

    // cout << ans;
    // int n=65;
    // int ans=n%10;
    // cout<<ans;
    // int i=0;
    // do{
    //     i++;
    //     cout<<i;
    // }while(i!=0);

    // cout<<i;

    // for (int i = 1; i <=3; i++)
    // {
    //     for (int j = 1; j <=i; j++)
    //     {
    //         cout<<j;
    //     }
    //     cout<<endl;
    // }

    // for (int i = 0; i <10; i++)
    // {
    //     for (int j = 1; j <11; j++)
    //     {
    //         if(j==10){
    //             cout<<i;
    //             cout<<'0';
    //         }
    //         cout << i;
    //         cout << j << endl;
    //     }

    //     cout << endl;
    // }

    // for (int i = 1; i <= 4; i++)
    // {
    //     // int ans=0;
    //     for (int j = i + 1; j < 5; j++)
    //     {
    //         cout << i + j << endl;
    //     }
    //     cout << endl;
    // }

    // for (int i = 5; i >= 1; i--)
    // {
    //     // int ans=0;
    //     for (int j = 1; j <= i; j++)
    //     {
    //         cout << " * ";
    //     }

    //     cout << endl;
    // }

    //     for (int i = 1; i<=3; i++)
    //     {
    //         // int ans=0;
    //         for (int j =3; j>=i; j--)
    //         {
    //             if(j>=i){cout << " * ";}
    //         }

    //         cout << endl;
    //     }
    //     return 0;
    // }

    for (int i = 1; i <= 3; i++)
    {

        for (int j = 3; j >= 1; j--)
        {
            if (i >= j)
                cout << "* ";
            else
                cout << "  ";
        }
        for(int j=2;j<=3;j++){
            if(i>=j) cout<<"* ";
            else cout<<"  ";
        }

        cout << endl;
    }
}