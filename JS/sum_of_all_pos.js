let arr = [1,2,3,4,5,-5,-2];
let sum =0;
for(let i=0;i<arr.length;i++){
    if(arr[i] > 0){
        sum += arr[i];
    }
}
console.log(sum);