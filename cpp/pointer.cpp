#include <bits/stdc++.h>
using namespace std;

void inc(int arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        arr[i] = arr[i] * 2;
    }
}

void str(string name)
{
    name = "rahul";
    cout << name;
}

int main()
{
    // int arr[] = {1, 2, 3, 4};
    // int n = size(arr);

    // inc(arr,n);

    // for (int i = 0; i < n; i++)
    // {
    //     cout << arr[i] << endl;
    // }

    // string name="naval";
    // cout<<name;
    // str(name);
    // cout<<name;

    // int x=10;
    // cout<<x<<endl;
    // cout<<&x<<endl;
    // int *y=&x;            //* called as a derefference operator
    // cout<<y<<endl;
    // cout<<*y<<endl;

    // string name="naval";
    // for(auto x:name){
    //     char y='o';
    //     x=y;
    //     cout<<x<<" ";
    // }
    // cout<<name<<endl;
    // for(auto x:name){

    //     cout<<x<<" ";
    // }

    // cout<<name[2];

    // int x=20;
    // int *y=&x;
    // cout<<x<<endl;

    // cout<<x<<endl;

    // *y=66;
    // cout<<x<<endl;

    // int arr[] = {1, 6, 4, 6};
    // cout<<arr<<endl;
    // cout<<arr[0]<<endl;
    // cout<<*arr<<endl;
    // cout<<*(arr+53);   //give zero

    // cout<<(arr+1)<<endl;   //adding 1 in address as arr stores address
    // cout<<(*arr+1)<<endl;     // adding 1 in *arr value which intially points to st element
    // cout<<*(arr+1)<<endl;     //give second element of arr = arr[1];

    // int n=10;
    // cout<<n<<endl;
    // int *y=&n;
    // cout<<*y<<endl;
    // cout<<*(y+1)<<endl;
    // cout<<*(y+2)<<endl;

    // *(y+1)=95;
    // cout<<*(y+1);

    // char array[]={'a','e','i','o','u'};    //int arr prints arr address while char arr prints elements inside it
    // cout<<array;
    // cout<<arr;

    
    // int arr[]={2,3,4,5};

    int arr[2]={5,5}; 
    
    // arr.push(6);  can'do this size is fixed it is arr 

    cout<<arr;

    return 0;
}