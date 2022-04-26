let InsertionSort = function(arr){

    for(var i=1;i<arr.length;i++){
        var value =arr[i];

        for(var j=i;arr[j-1]>value;j--){
            arr[j]=arr[j-1];
        }
        arr[j]=value;
    }
    return arr;
}


/* 
Insertion Sort is an in-place, stable, comparison-based sorting algorithm. The idea is to maintain a sub-list which is always sorted. An element which is to be 'insert'ed in this sorted sub-list, has to find its appropriate place and then it has to be inserted there. Hence the name, insertion sort.

Steps on how it works:

If it is the first element, it is already sorted.
Pick the next element.
Compare with all the elements in sorted sub-list.
Shift all the the elements in sorted sub-list that is greater than the value to be sorted.
Insert the value.
Repeat until list is sorted.

Complexity:
time:O(n2): avg and worst , O(n):best
space:O(1)



*/