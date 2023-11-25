/*
   In this example we have two operation = n+n , this could be represented by 0(2n) , bit we don't care how many executions it have
   we can drop the constant and say, its a 0(n)
*/
function logItems(n) {
     for(let i = 0; i < n; i++) {
        console.log(i) 
     }
 
     for(let j = 0; j < n; j++) {
        console.log(j) 
     }       
 }
 
 logItems(3)