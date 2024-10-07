let arr = [2,5,1,3,4,6];
let n = arr.length;
for (let i=0; i<n; i++)
{
    for (let j=0; j<n; j++)
    {
        if (arr[j] > arr[j+1])
        {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr);