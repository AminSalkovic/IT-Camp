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

unos=parseInt(prompt("unesi"))
for(i=1;i<unos;i++){
    for(j=1;j<i;j++){
        console.log(i)
    }
}