const bubbleSort = function(array){
    let swaps;

    do{
        swaps= false;
        for(let i=0;i<array.length-1;i++){
            if(array[i]>array[i+1]){
                let temp = array[i];
                array[i]=array[i+1];
                array[i+1]=temp;
                swaps=true;
            }
        }
    }while(swaps);
    return array;
}

// Bubble Sort is based on the idea of repeatedly comparing pairs of adjacent
//  elements and then swapping their positions if they are in the wrong order. 
// Bubble sort is a stable, in-place sort algorithm.

// How it works:

// In an unsorted array of n elements, start with the 
// first two elements and sort them in ascending order. 
// (Compare the element to check which one is greater).
// Compare the second and third element to check which one is greater,
//  and sort them in ascending order.
// Compare the third and fourth element to check which one is greater, 
// and sort them in ascending order.
// ...
// Repeat steps 1–n until no more swaps are required.
/*

Complexity:
Time: O(n2) worst and average.
space: O(1).

*/



const Bubble =(arr)=>{
    var isTrue=false;
    do{
      for(var i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            var temp = arr[i];
            arr[i]= arr[i+1];
            arr[i+1]=temp;
            isTrue=true;
        }
      }

   }while(isTrue)
}