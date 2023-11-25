/*In this example we have a algorithm with Big O: O(n2 + n)

    lets imagina n = 100
    soo n2 = 10 000
    and n = 100

    The part that is really affect is not n is n2

    So we can drop the non dominat BigO = O(n2)

*/

function logItems(n) {
     for(let i = 0; i < n; i++) {
         for(let j = 0; j < n; j++) {
             console.log(i, j) 
         }       
     } 
 
     for(let k = 0; k < n; k++) {
         console.log(k)
     }
 }
 
 logItems(10)