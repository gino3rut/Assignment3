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
    let hasilAkhir = 0;
    let maxTemp = 0;
    let arrHasil = [[],];
    let arrTest = [];
    let arrTemp = [];
    let index = 0;
    for (let i = 0; i < arr.length; i++){        
        maxTemp = arr[i]; 
        arrTemp.push(arr[i]);   
        for (let j = i; j < arr.length; j++){
            if (j != i){
                maxTemp += arr[j]; 
                if (hasilAkhir < maxTemp){
                    hasilAkhir = maxTemp;
                }                  
                arrHasil = [[],];  
                //------------                                 
                arrTemp.push(arr[j]); 
                arrTest[index] = arrTemp;              
                index++;      
            }          
        }
        arrTemp = [];                              
    }
    arrHasil[0] = arrTest[16];
    arrHasil.splice(1,0,hasilAkhir);
    arrHasil[0].pop();
    return arrHasil;
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(subArray(input)) // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
