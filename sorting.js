function bubbleSort(n) {
  /* Sorts in O(n^2) time
  For each element in the array, if A[i] > A[i+1], swap them
  Repeat until each element is in its proper place in ascending order*/
  var A = [];
  var numSwaps = 0;
  fillArray(A, n);
  var steps = 0;
  for (var i=0;i<A.length-1;i++){
    if (A[i] > A[i+1]){
      swap(A, i, i+1);
      numSwaps++;
    }
    if (i === A.length-2 && numSwaps != 0){
      /*we have reached the last two elements and have swapped at least once
      which means we do not know for sure that bubbleSort has finished. We
      continue for another round until we do not swap at all*/
      i=-1;
      numSwaps=0;
    }
    steps++;
  }
  return(steps);
}

function insertionSort(n) {
  /* An in-place sorting algorithm where it is maintained that a section of the
  array remains sorted while elements are INSERTed into their appropriate
  positions. Runs in O(n^2).*/
  var A = [];
  fillArray(A, n);
  var steps = 0;
  var pivot;
  //printArray(B);
  for (var i =1; i<A.length;i++){
    pivot = i;
    while (pivot > 0 && A[pivot-1] > A[pivot]){
      swap(A, pivot, pivot-1)
      pivot = pivot -1;
      steps++;
    }
  }
  //printArray(B);
  return steps;
}

function selectionSort(n) {
  /* An in-place sorting algorithm where we divide the array into "sorted" and
  unsorted. We scan the list each time until we are able to swap our current
  value with the smallest value in the remainder of the array. Runs in O(n^2).*/
  var A = [];
  fillArray(A, n);
  var steps = 0;
  var min;
  var swapMe;
  //printArray(A);
  for (var i =0; i<A.length;i++){
    min = i; // select i as the minimum element
    for (var j = i; j<A.length;j++){ //scan the array for the smallest element
      if (A[j]<A[min]){
        min = j;
      }
      steps ++;
    }
    if (min != i){ //if we found an element smaller than A[i], swap
      swap(A, min, i);
    }
  }
  //printArray(A);
  return(steps);
}
function runMergeSort(n){
  var A = [];
  fillArray(A, n);
  printArray(A);
  A= mergeSort(A, 0, n);
  printArray(A);
}

function mergeSort(A) {
  /* Merge sort is a divide and conquer sorting algorithm with worst case
  complexity O(nlogn).
  Merge sort divides the array into equal halves until they are single elements,
  then combines them in a sorted manner recursively. */
  printArray(A);
  if (A.length < 2){
    return A;
  }
  var a1 = A.slice(0, Math.floor(A.length/2));
  var a2 = A.slice(Math.floor(A.length/2), A.length);
  a1= mergeSort(a1);
  a2 = mergeSort(a2);
  return merge(A, a1, a2);
}

function merge(A, a1, a2){
  console.log(A, a1.length, a2.length)
  var c = [];
  var i= 0;
  var j = 0;
  var k = 0;
  while (i <a1.length && j < a2.length){
    if (a1[i] > a2[j]){
      c[k] = a2[j];
      k++;
      j++;
    }
    else{
      c[k] = a1[i];
      i++;
      k++
    }
  }
  while (i< a1.length){
    c[k] = a1[i];
    k++;
    i++;
  }
  while (j < a2.length){
    c[k] = a2[j];
    j++;
    k++;
  }
  printArray(c);
  console.log(i, j, k, a1.length, a2.length, c.length);
  return c;
}

function quickSort() {

}

function linearSearch() {

}

function binarySearch() {

}

function fillArray(A, n) {
  /* Fills an array A[] with n random integers */
  for (var i= 0; i< n; i++){
    A[i] = Math.round(Math.random()*100);
  }
  return A;
}

function swap(A, i, j){
  /* Swap values in A[i], A[j] */
  //console.log("Swapping");
  var temp = A[i];
  A[i] = A[j];
  A[j] = temp;
  //printArray(A);
}

function printArray(A){
  /*A function to print an array, specifically for testing purposes*/
  var arrayString = "";
  for (var i=0;i<A.length;i++){
    arrayString = arrayString + parseInt(A[i]) +  ", " ;
  }
  console.log(arrayString);
}

//bubbleSort(15);
//insertionSort(15);
//selectionSort(15);
runMergeSort(15);
