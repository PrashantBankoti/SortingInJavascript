var MergeSort = function(arr){
    if(arr.length<2){
        return arr;
    }


    let midpoint = arr.length/2;
    let leftHalf = arr.slice(0,midpoint);
    let rightHalf = arr.slice(midpoint);

    return merge(MergeSort(leftHalf),MergeSort(rightHalf));

    function merge(arrA,arrB){
        let a=0;
        let b=0;
        let result =[];
        while(a<arrA.length && b<arrB.length){
            if(arrA[a]<arrB[b]){
                result.push(arrA[a]);
                a++;
            }else{
                 result.push(aarB[b]);
                 b++;   
            }
        }
        return result.concat(arrA.slice(a).concat(arrB.slice(b)));
    }
}