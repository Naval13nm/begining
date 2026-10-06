#include <bits/stdc++.h>
using namespace std;
int main()
{
    int arr[] = {1, 2, 3, 4};
    // int count = 0;
    // for (auto x : arr)
    // {
    //     count++;
    // }
    int i = 0;
    // int j = count - 1;
    int j = size(arr) - 1;
    while (i < j)
    {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j--;
        i++;
    }
    cout << arr;
    return 0;
}