// a=parseInt(prompt("unesi prvi broj"));
// b=parseInt(prompt("unesi drugi broj"));

// for(i=a;i<b;i++){
//     if(i%2===0){
//         console.log(`broj ${i} je paran`)
//     }
//     else{
//         console.log(`broj ${i} je neparan`)
//     }
// }

//zadatak 2

// a=parseInt(prompt("koliko zelite ocena da unesete?"));
// kasa=0
// for(i=0;i<a;i++){
//     unos=parseInt(prompt("unesite ocenu"));
//     kasa=kasa+unos;
// }
// console.log("zbir vasih ocena je:",kasa);
// console.log("prosek vasih ocena je:",kasa/a)

//zadatak 3
// kutije=parseInt(prompt("koliko zelis da uneses kutija"));
// kasa=0
// for(i=0;i<kutije;i++){
//     unos=parseInt(prompt("koliko novca stavljate u kutiju"));
//     kasa=kasa+unos
// }
// console.log("uneli ste",kasa,"$")

// if(kasa<100){
//     console.log("vasa kasa je pri kraju;")
// }else if(kasa>100 && kasa<500){
//     console.log("vasa kasa je u solidnom stanju")
// }else if(kasa>500){
//     console.log("vasa kasa je puna")
// }

//zadatak 4
// many=parseInt(prompt("how much many you want"));
// casa=500

//    if(many<=casa){
//        console.log("you have enough many and you can get this.")
//    }else if(many>500){
//        console.log("you dont have enough many an you can't get this.")
// }
// console.log("thank you")

//excersise 5

// namee=prompt("input your name");
// if(namee !== "Amin"){
//  console.log("You can't get in.")
//  console.log("god bye")
// }else{
//     console.log("Get in");
//     console.log("welcome")
// }
// year=parseInt(prompt("how old are you"));
// switch(true){
//     case(year>18):
//     console.log("you have eniugh year");
//     break;
//     default:
//         console.log("you are child yet")
//         console.log("god bye")
// }
// subject=parseInt(prompt("how much subject you have"));
// sum=0
// for(a=0;a<subject;a++){
//     numberOfSubject=parseInt(prompt("input your point"));
//     sum+=numberOfSubject
// }
// console.log("Your sum of points is",sum)
// switch(true){
//     case(sum<=300):
//     console.log("you fall exame.Try again");
//     break;
//     case(sum>300 && sum<500):
//     console.log("you pass exame.");
//     console.log("your assessment is 3");
//     break;
//     case(sum>500 && sum<800):
//     console.log("you pass exame.");
//     console.log("your assessment is 4");
//     break;
//     default:
//         console.log("you pass exame.");
//     console.log("your assessment is 5");
// }

// unos=parseInt(prompt("unesi"))
// for(i=1;i<=unos;i++){
//     sum="";
//     for(j=1;j<=i;j++){
//         sum+=i;
//     }
//     console.log(sum)
// }

// unos=parseInt(prompt("unesi"))
// for(i=1;i<unos;i++){
//     for(j=1;j<i;j++){
//         console.log(i)
//     }
// }
// prvi=parseInt(prompt("unesi pocetnu vrednost"))
// drugi=parseInt(prompt("unesi krajnju vrednost"))
//  for(i=prvi;i<100;i++){
//      if(i % prvi ===0 && i % drugi===0){
//          console.log(i);
//          break;
//      }
     
//  }

// //ispis slova
// kolicina=parseInt(prompt("koliko zelite karaktera"))
// sum="";
// for(i=0;i<kolicina;i++){
//    unos= prompt(`unesi karakter`);
//    sum+=unos
// }
// console.log(sum)
/////////////////////////////////////////////////////////
// unos1=parseInt(prompt("unesi prvi broj"));
// unos2=parseInt(prompt("unesi prvi broj"));

// for(i=unos1;i<=unos2;i++){
//     for(j=unos1;j<=unos2;j++){
//         console.log(`${i},*,${j},=,`,i*j)
//     }
// }
//faktorijal
// unos=parseInt(prompt("unesi prvi broj"));
// fakt=1;
// for(j=1;j<=unos;j++){
//  fakt=fakt*i
// }
// console.log(fakt)

// unos=parseInt(prompt("unesi prvi broj"));
// for(i=1;i<=unos;i++){
//     fakt=1;
//     for(j=1;j<=i;j++){
//          fakt=fakt*j;
//         }
//     console.log(fakt)
// }

// for(i=1;i<=10;i++){
// red="";
// for(j=1;j<=10;j++){
//     red+=`${j*i}\t`
// }
// console.log(red)

// }



// unos1=parseInt(prompt("unesi prvi broj"));
// unos2=parseInt(prompt("unesi prvi broj"));
// for(i=unos1;i<=unos2;i++){
//     if(i%2===0){
//         console.log(i,"je dejiv sa dva")
//     }else{
//         console.log(i,"nije deljiv sa dva")
//     }
// }

//brojevi koji su deljvi sa 2 i 3

// unos1=parseInt(prompt("unesi prvi broj"));
// unos2=parseInt(prompt("unesi prvi broj"));
// for(i=unos1;i<=unos2;i++){
//     if(i % 2===0 && i % 3==0){
//         console.log(i)
//     }
// }

//bodovi i ocene

// unos1=parseInt(prompt("unesi bodove"));

// switch(true){
//     case(unos1<=30):
//     console.log("vasa ocena je 3")
//     break;
//     case(unos1<=60):
//     console.log("vasa ocena je 4")
//     break;
//     case(unos1<=100):
//     console.log("vasa ocena je 5")
//     break;
//     default:
//         console.log("pogresan unos")
    
// }



23
// for(i=unos1;i<=unos2;i++){
//     if(i % 2===0 && i%3===0){
//         console.log(`broj ${i} je deljiv sa 2 i sa 3`)
//     }else  {
//         console.log(i)
//     }
// }  




// for(i=unos1;i<=unos2;i++){
//     if(i % 2===0 && i%3===0){
//         console.log(`broj ${i} je deljiv sa 2 i sa 3`)
//     }else  {
//         console.log(i)
//     }
// }