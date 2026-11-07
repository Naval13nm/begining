#include <bits/stdc++.h>
using namespace std;
int main()
{
    vector<int> v = {3, 4, 2, 1, 9, 0};
    for (int i = 0; i < v.size(); i++)
    {
        for (int j = 0; j < v.size()-i-1; j++)
        {
            if (v[j] > v[j + 1])
                swap(v[j], v[j + 1]);
        }
    }
    for (auto x : v)
    {
        cout << x;
    }
    return 0;
}