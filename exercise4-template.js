/**
Diberikan satu buah input berupa array a.
Dari semua kemungkinan subarray yang berasal dari a, subarray manakah yang akan memberikan jumlah/sum terbesar apabila semua anggota subarray tersebut dijumlahkan?

Input:
a = [-2, -3, 4, -1, -2, 1, 5, -3]

Expected Output:
[[ 4, -1, -2, 1, 5] , 7]

Explanation:
Diantara semua kemungkinan subarray, [ 4, -1, -2, 1, 5]  merupakan subarray yang akan memberikan jumlah terbesar

Nilai 7  merupakan jumlah atau sum dari subarray  [ 4, -1, -2, 1, 5]
 */

function subArray(arr) {
    let hasilAkhir = 0; //value total final
    let maxTemp = 0; //value total temp
    let arrTest = []; //array 2d temp
    let arrTemp = []; //array single
    for (let i = 0; i < arr.length; i++){        
        maxTemp = arr[i]; 
        arrTemp.push(arr[i]);   
        for (let j = i; j < arr.length; j++){
            if (j != i){
                maxTemp += arr[j]; 
                // //------------                                 
                arrTemp.push(arr[j]); 
                let z = [...arrTemp];
                arrTest.push([z,maxTemp]);  
            }          
        }         
        arrTemp = [];                              
    }
    hasilAkhir = arrTest[0][1];
    var indexTemp = 0;
    for (let y = 1; y < arrTest.length; y++){
        if (arrTest[y][1] > hasilAkhir){
            hasilAkhir = arrTest[y][1];
            indexTemp = y;
        }
    }
    return arrTest[indexTemp];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(subArray(input)) // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
