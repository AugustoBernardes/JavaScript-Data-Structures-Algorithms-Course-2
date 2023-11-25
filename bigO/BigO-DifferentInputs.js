/*
   In this example , it looks similitar to a Big O: O(n)

   Bit its wrong, because we are receiving 2 different inputs , and we cant assume they are equal.

   So we have to call O(a + b) - It will variate depending of inputs
*/
function logItems(a, b) {
    for(let i = 0; i < a; i++) {
       console.log(i) 
    }

    for(let j = 0; j < b; j++) {
       console.log(j) 
    }       
}

logItems(10, 100)


// Here we have O(a * b)
function logItems(a, b) {
    for(let i = 0; i < a; i++) {
        for(let j = 0; j < b; j++) {
            console.log(i,j) 
         }  
    }
     
}

logItems(10, 100)