/*
 * Complete the 'lilysHomework' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function swap(a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

function lilysHomework(arr) {   
    let a = arr.slice();
     
    let swaps = 0,
        locations = {},
        sortedValue = arr.slice().sort((a, b) => a - b);
        
    let swapsR = 0,
        locationsR = {},
        reverseValue = arr.slice().sort((a, b) => b - a);
        
    for(let i = 0; i < arr.length; i++) {
        locations[arr[i]] = i;
        locationsR[arr[i]] = i;
    }    
    
    for(let i = 0; i < arr.length; i++) {
        if (sortedValue[i] != a[i]) {
            swaps++;
            let swapIndex = locations[sortedValue[i]];
            locations[a[i]] = swapIndex;
            swap(a, i, swapIndex);
        }
        
        if(reverseValue[i] != arr[i]) {
            swapsR++;
            let swapIndex = locationsR[reverseValue[i]];
            locationsR[arr[i]] = swapIndex;
            swap(arr, i, swapIndex);
        }
    }
    return Math.min(swaps, swapsR);
}

/////////////////////////////////////////////////////////////////////////
// function lilysHomework(arr) {
//     let swaps = 0;
//     let swapsReverse = 0;
    
//     let arrCopy = arr.slice();
//     let arrSort = [...arrCopy].sort((a, b) => a - b);
//     let arrReverse = [...arrSort].reverse();
    
//     let arrMap = {};
//     let arrMapCopy = {};
//     arr.forEach((val, idx) => {
//         arrMap[val] = idx;
//         arrMapCopy[val] = idx;
//         }
//     );
    
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] !== arrSort[i]) {
//             const temp = arrCopy[i];
//             const indexTemp = arrMap[arrSort[i]];
//             arrCopy[i] = arrSort[i];
//             arrCopy[arrMap[arrSort[i]]] = temp;
//             arrMap[arrSort[i]] = i;
//             arrMap[temp] = indexTemp;
//             swaps++;
//         }
        
//         if(arr[i] !== arrReverse[i]) {
//             const temp = arr[i];
//             const indexTemp = arrMapCopy[arrReverse[i]];
//             arr[i] = arrReverse[i];
//             arr[arrMapCopy[arrReverse[i]]] = temp;
//             arrMapCopy[arrReverse[i]] = i;
//             arrMapCopy[temp] = indexTemp;
//             swapsReverse++;
//         }
//     }  
//     return Math.min(swaps, swapsReverse)
// }

/////////////////////////////////////////////////////////////////////////
// function lilysHomework(arr) {
//     const x = [...arr].sort((a, b) => a - b)
//     const s = (a) => {
//         const map = new Map()
//         a.forEach((v, i) => map.set(v, i))
//         let p = 0
//         for (let [i, e] of a.entries()) {
//             if (e !== x[i]) {
//                 p++
//                 const j = map.get(x[i])
//                 map.set(e, j)
//                 a[j] = e
//             }
//         }
//         return p
//     }
//     return Math.min(s([...arr]), s(arr.reverse()));
// }
