let arr = [1,2,3,4,5];
let n = arr.length;
for (let i=0; i<n; i++)
{
    let bag = [];
    for (let j=i; j<n; j++)
    {
        bag.push(arr[j]);
        console.log(bag);
    }
}