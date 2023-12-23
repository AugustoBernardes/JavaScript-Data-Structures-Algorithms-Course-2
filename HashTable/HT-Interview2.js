function itemInCommon(arr1, arr2) {
  let obj = {}
  for(let i =0; i < arr1.length; i++){
    obj[arr1[i]] = true
  }

  for(k = 0; k < arr2.length; k++){
    if(obj[arr2[k]]) return true
  }
  return false
}


let array1 = [1, 3, 9]
let array2 = [2, 4, 5]


   
console.log(itemInCommon(array1, array2))