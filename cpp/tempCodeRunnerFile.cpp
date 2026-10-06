int arr[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    for (auto x : arr)
    {
        for (auto y : x)
        {
            cout << y<<" ";
        }
        cout << endl;
    }