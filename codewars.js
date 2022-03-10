// function greet(name){
//   return `Hello, ${name} how are you doing today?`
// }
// console.log(greet("amin"));
//=====================================codewars

// function arrayPlusArray(arr1, arr2) {
//   let sum1=0;
//   for(i=0;i<arr1.length;i++){
//     sum1+=arr1[i]
//   }
//   let sum2=0;
//   for(i=0;i<arr2.length;i++){
//     sum2+=arr2[i]
//   }
//   return sum1+sum2
// }
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
//===========================================================sabiranje elemenata
// function getAverage(marks){
//   let sum=0
//     for(i=0;i<marks.length;i++){
//          sum+=marks[i]
//     }
//     return Math.floor(sum/marks.length)
// }
// console.log(getAverage([1,2,3,4,5,]));
//=====================================================mnozenje elemenata
// function grow(x){
//     sum=1
//     for(i=0;i<x.length;i++){
//        sum*=x[i]
//      }
//      return sum
//   }
//   console.log(grow([1, 2, 3, 4]));

// function getAverage(marks){
//   let sum=0
//     for(i=0;i<marks.length;i++){
//          sum+=marks[i]
//     }
//     return Math.floor(sum/marks.length)
// }
// console.log(getAverage([1,2,3,4,5,]));

function vaporcode(string) {
   return string.toUpperCase().split(" ").join("").split("").join("  ");
}
console.log(vaporcode("Lets go to the movies"));