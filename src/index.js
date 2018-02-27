module.exports = function longestConsecutiveLength(array) {
  // your solution here
 let length = array.length;
if(length==0){
    return 0;
  }
if(length==1){
  return 1;
}

array = quickSort(array);
if(length<10){
  array.sort((left, right) => left - right);
  console.log(array);
}
var res = 0;
var tmp = 1;

for(i=1;i<length;i++){
  if(array[i]-array[i-1]==1){
    tmp++;
  }
else
  if(array[i]-array[i-1]>1){
    res = (tmp>res)? tmp : res ;
    tmp = 1;
  }
}



  return res;
}


function quickSort(arr, left, right){
  let len = arr.length; 
  let pivot;
  let partitionIndex;


 if(left < right){
   pivot = right;
   partitionIndex = partition(arr, pivot, left, right);
  quickSort(arr, left, partitionIndex - 1);
  quickSort(arr, partitionIndex + 1, right);
 }
 return arr;
}

function partition(arr, pivot, left, right){
  let pivotValue = arr[pivot],
      partitionIndex = left;
  for(let i = left; i < right; i++){
   if(arr[i] < pivotValue){
     swap(arr, i, partitionIndex);
     partitionIndex++;
   }
 }
 swap(arr, right, partitionIndex);
 return partitionIndex;
}
       

function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}