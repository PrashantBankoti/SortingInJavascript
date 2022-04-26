// // var table = document.createElement('table');
// // for(var i=1;i<9;i++){
// //     var tr = document.createElement('tr');
// //     for(var j=1;j<9;j++){
// //         var td = document.createElement('td');
// //         if(i%2==j%2){
// //             td.classList.add("white");
// //         }else{
// //             td.classList.add("black");
// //         }
// //         tr.appendChild(td);
// //     }
// //     table.appendChild(tr);
// // }
// // document.body.appendChild(table);

// // const bubbleSort = function(arr){
// //     do{
// //         var value=false;
// //         for(var i=0;i<arr.length-1;i++){
// //             if(arr[i]>arr[i+1]){
// //                 var temp = arr[i];
// //                 arr[i]=arr[i+1];
// //                 arr[i+1]=temp;
// //                 value=true;
// //             }
// //         }
// //     }while(value)
// //     return arr;
// // }


//     // var insertionSort =function(arr){
//     //     for(var i=1;i<arr.length;i++){
//     //         var value = arr[i];

//     //         for(var j=i;arr[j-1]>value;j--){
//     //             arr[j]=arr[j-1];
//     //         }
//     //         arr[j]=value;
//     //     }
//     //     return arr;
//     // }



//     // var MergeSort = function(arr){
//     //     if(arr.length<2){
//     //         return arr;
//     //     }

//     // var midpoint = Math.floor(arr.length/2);
//     // var leftHalf = arr.slice(0,midpoint);
//     // var rightHalf = arr.slice(midpoint);


//     // return merge(MergeSort(leftHalf),MergeSort(rightHalf));
//     // }

//     // function merge(arr1,arr2){
//     //     var a=0;
//     //     var b=0;
//     //     var result=[];

//     //     while(a<arr1.length && b<arr2.length){
//     //         if(arr1[a]<arr2[b]){
//     //             result.push(arr1[a]);
//     //             a++;
//     //         }else{
//     //             result.push(arr2[b]);
//     //             b++;
//     //         }
//     //     }
//     //     return result.concat(arr1.slice(a)).concat(arr2.slice(b))
//     // }


//     // const mergeSort = function(arr){
//     //     if(arr.length<2){
//     //         return arr;
//     //     }


//     //     var midpoint = Math.floor(arr.length/2);
//     //     var leftSide = arr.slice(0,midpoint);
//     //     var rightSide = arr.slice(midpoint);

//     //     return merge(mergeSort(leftSide),mergeSort(rightSide));
//     // }

//     //  function merge(arr1,arr2){
//     //      var a=0;
//     //      var b=0;
//     //      var result =[];

//     //      while(a<arr1.length && b<arr2.length){
//     //          if(arr1[a]<arr2[b]){
//     //              result.push(arr1[a]);
//     //              a++;
//     //          }else{
//     //              result.push(arr2[b]);
//     //              b++;
//     //          }
//     //      }
//     //      return result.concat(arr1.slice(a)).concat(arr2.slice(b));
//     //  }




//     const mergeSort = function (arr){
//         if(arr.length<2){
//             return arr;
//         }


//         var midpoint = Math.floor(arr.length/2);
//         var leftHalf = arr.slice(0,midpoint);
//         var rightHalf = arr.slice(midpoint);

//         return merge(mergeSort(leftHalf),mergeSort(rightHalf));
//     }



//     function merge(arr1, arr2){
//         var a=0;
//         var b=0;
//         var result=[];
//         while(a<arr1.length && b<arr2.length){
//             if(arr1[a]<arr2[b]){
//                 result.push(arr1[a]);
//                 a++;
//             }else{
//                 result.push(arr2[b]);
//                 b++;
//             }
//         }
//         return [...result,...arr1.slice(a),...arr2.slice(b)]
//     }
    




function BubbleSort(arr){
    do{
        var value=false;
        for(var i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                var temp = arr[i+1];
                arr[i+1]=arr[i];
                arr[i]=temp;
                value=true;
            }
        }
    }while(value)
    return arr;
}


function InsertionSort(arr){
    for(var i=1;i<arr.length;i++){
        var value=arr[i];
        for(j=i;arr[j-1]>value;j--){
            arr[j]=arr[j-1];
        }
        arr[j]=value;
    }
    return arr;
}



function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }

    var midpoint = Math.floor(arr.length/2);
    var leftSide = arr.slice(0,midpoint);
    var rigthSide = arr.slice(midpoint);

    return Merge(mergeSort(leftSide),mergeSort(rigthSide));
}


function Merge(arr1,arr2){
    var a=0;
    var b=0;
    var result=[];

    while(a<arr1.length && b<arr2.length){

        if(arr1[a]<arr2[b]){
            result.push(arr1[a]);
            a++;
        }else{
            result.push(arr2[b]);
            b++;
        }
    }

    return [...result,...arr1.slice(a),...arr2.slice(b)]
}

























