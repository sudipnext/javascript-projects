let input = 'turpentine'
const myArray = ['a', 'e', 'i', 'o', 'u']
let resultArray = []
for (i =0; i < input.length; i++){
   for (j = 0; j < myArray.length; j++){
     if (input[i] === myArray[j]){
       if (input[i] === 'e' ){
         resultArray.push('ee')
        } else if(input[i] === 'u'){
           resultArray.push('uu')
         }           

       else{
         resultArray.push(input[i])

       }
     }
   }
}



console.log(resultArray.join('').toUpperCase())
