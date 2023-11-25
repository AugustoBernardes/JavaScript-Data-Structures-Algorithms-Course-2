/*
    In this example we have a code nested , this represent the Big 0: 0(n*) (The character * means the number of operations)
*/

// Big 0: 0(n2)
function logItems(n) {
     for(let i = 0; i < n; i++) {
         for(let j = 0; j < n; j++) {
             console.log(i, j) 
         }       
     } 
 }
 
logItems(10)

// Big 0: 0(n3)
function logItems(n) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            for(let k = 0; k < n; k++) {
                console.log(i, j, k) 
            }       
        }       
    } 
}

logItems(10)