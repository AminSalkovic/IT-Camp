
// function vezba(ime){
//  return ime.split('').reverse().join('')

// }

// // console.log(vezba("")) 

// function vezba(ime){
//     const arr=ime.split('')
//     const f=arr[0][0].toUpperCase()
//     const p=arr[1][0].toUpperCase()
//     const newString=f+"."+p
//     return newString
//  }
// console.log(vezba("amin")) 



// function domaci(str){
//   for(i=0;i<str.length;i++){
//       if(str[i]!== ""){
//           str.splice(i,1)
//       }
//     }
//     return str.join(' ')
// }
// console.log(domaci(["Saki",1,"sasdad",2,"amin",4,"amco"]))


function numbers(a,b){
  ar=[]
   for(i=0;i<a.length;i++){
     for(j=0;j<b.length;j++){
       if(a[i]===b[j]){
         ar.push(a[i])
       }
     }
   }
   return "ovo su isti brojevi"+" "+ ar.join(' ')
 }
 let x=numbers([1,2,34,5465,5656,4443,223,4],[23,3232,422,2,3232,4,1])
 console.log(x)


// function sas(){
//    data=[3,21,32,36,37,56,8,12,16,18,20,68,69]
//   unos=parseInt(prompt("index kojeg broja zelite da znate"))
//   for(i=0;i<data.length;i++){
//     if(data[i]=== unos){
//       return a="vas broj je na indexu"+" "+i
//     }
//   }
// } 

// console.log(sas())