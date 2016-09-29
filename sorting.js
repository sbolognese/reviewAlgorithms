function bubbleSort(n) {
  /* Sorts in O(n^2) time
  For each element in the array, if A[i] > A[i+1], swap them
  Repeat until each element is in its proper place in ascending order*/
  var A = [];
  var numSwaps = 0;
  A = fillArray(A, n);
  //console.log("Beginning with:");
  for (var i=0;i<A.length-1;i++){
    //printArray(A);
    if (A[i] > A[i+1]){
      A = swap(A, i, i+1);
      numSwaps++;
      //printArray(A);
    }
    if (i === A.length-2 && numSwaps != 0){
      /*we have reached the last two elements and have swapped at least once
      which means we do not know for sure that bubbleSort has finished. We
      continue for another round until we do not swap at all*/
      i=-1;
      numSwaps=0;
    }
  }
  //console.log("Finishing with:");
  printArray(A);
}

function insertionSort() {

}

function selectionSort() {

}

function mergeSort() {

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
  console.log("Swapping");
  var temp = A[i];
  A[i] = A[j];
  A[j] = temp;
  printArray(A);
  return A;
}

function printArray(A){
  var arrayString = "";
  for (var i=0;i<A.length;i++){
    arrayString = arrayString + parseInt(A[i]) +  ", " ;
  }
  console.log(arrayString);
}

bubbleSort(15);
