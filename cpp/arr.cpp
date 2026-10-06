#include <bits/stdc++.h>
using namespace std;
int main()
{
    int arr[] = {1, 3, 5, 1, 4};
    sort(begin(arr), end(arr));

    set<int> s;

    for (auto x : arr)
    {
        s.insert(x);
    }
    int i = 0;
    for (auto x : s)
    {
        if (arr[i] != x)
        {
            cout << arr[i];
            return 0;
        }
        else
        {
            i++;
        }
    }

    return 0;
}

// array<int, 5> arr = {1, 2, 3, 4, 5};  Modern C++ std::array This is a safer wrapper around C-style arrays. It does not grow dynamically, but it supports STL features like iterators and .size().

// int arr[5] = {10, 20, 30, 40, 50}; 1. Traditional C-Style Arrays (Fixed Size)These work exactly like standard C arrays. Their size must be known at compile time, and they cannot change size later.

// vector<int> vec(5, 99); // {99, 99, 99, 99, 99} 3. Dynamic C++ std::vector (Resizable)These are dynamic and can grow or shrink at runtime using functions like .push_back().