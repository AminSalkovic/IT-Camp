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

// unos=prompt("unesi operaciju koju zelis:+,-,*,/");
// while(unos !== "stop"){ 
//     unos2=parseInt(prompt("unesi prvi broj"))
//     unos3=parseInt(prompt("unesi drugi broj"))
//     if(unos === "+"){
//         console.log("rezultat vasih brojeva je",unos2+unos3)
//     }else if(unos === "-"){
//         console.log("rezultat vasih brojeva je",unos2-unos3)
//     }else if(unos === "*"){
//         console.log("rezultat vasih brojeva je",unos2*unos3)
//     }else if(unos === "/"){
//         console.log("rezultat vasih brojeva je",unos2/unos3)
//          } 
//     unos=prompt("unesi operaciju koju zelis");
//     }
    

// tezina=prompt("unesi tezinu")
// visina=prompt("unesi visinu")

// bmi=tezina/visina**2
// console.log(bmi)

// if(bmi<=18.5){
//     console.log("Underwight")
// }else if(bmi<=25){
//     console.log("Normal")
// }else if(bmi<= 30){
//     console.log("Overweight")
// }else if(bmi>30){
//     console.log("Obese")
// }


// unos=parseInt(prompt("unesi broj"));
// brojac=1
// while(brojac<=unos){
//     if(brojac%2 !==0){
//         console.log(brojac)
//     }
//     brojac++;
// }

// unos=prompt("unesi broj");

// while(unos !== "stop"){
//     if(unos>0){
//         console.log("positive")
//     }else if(unos<0){
//         console.log("negativ")
//     }else if(unos==0){
//         console.log("null")
//     }
//     unos=prompt("unesi broj");
// }

// unos=parseInt(prompt("unesi godinu"))
// brojac=0;
// while(brojac<=unos){
//     console.log(brojac)
//     brojac+=4
// }

// unos=parseInt(prompt("unesi godinu"))
// unos2=parseInt(prompt("unesi godinu"))

// for(i=unos;i<=unos2;i++){
//    if(i % 4===0){
//        console.log(i)
//    }
// }
////////////////////////////////////////////////////////faktorijal
// unos=parseInt(prompt("unesi broj"))
// brojac=1;
// fakt=1
// while(brojac<=unos){
//     fakt=fakt*brojac
//     console.log(fakt)
//     brojac++;
// }


// unos=prompt("unesi string")
// newString= unos.slice(1) + unos[0]
// console.log(newString)


// unos=parseInt(prompt("unesi broj"))

// h=Math.floor(unos/60)
// minuti=unos%60
// console.log(h+":"+minuti)

// unos=prompt("unesi string")
// novi=""
// for(i=0;i<unos.length-1;i++){
//     if(i===0){
//         novi+=unos[0].toUpperCase()

//     }
//     if(unos[i]===""){
//         novi+=unos[i+1].toUpperCase()

//     }else{
//         novi+=unos[i+1]
//     }
// }
// console.log(novi)


// ar=[7,"hello world",3]
// console.log(ar)



// unos=parseInt(prompt("koliko zelite stringova"))
// ar=[]
// for(i=0;i<unos;i++){
//     unos2=prompt("unesi string")
//     ar[i]=unos2

// }
// console.log(ar)

// unos=parseInt(prompt("koliko zelite stringova"))
// ar=[]
// for(i=0;i<unos;i++){
//     unos2=prompt("unesi string")
//     ar[i]=unos2
// }
// console.log(ar)

// for(i=ar.length -1;i>=0;i--){
//     console.log(ar[i])
// }

// unos=parseInt(prompt("unesi kolicinu"))
// ar=[]
// for(i=0;i<unos;i++){
//     unos2=parseInt( prompt("unesi broj"))
//     ar[i]=unos2
// }
// console.log(ar)

// sum=0;
// for(i=0;i<ar.length;i++){
//     sum+=ar[i]
// }
// console.log(sum)
//trazimo najveci broj

// arr=[1,2,34,5,,6]
// max=arr[0]
// for(i=0;i<arr.length;i++){
//    if(max<arr[i]){
//        max=arr[i]
//    }
// }
// console.log(max)


// unos=parseInt(prompt("koliko zelite stringova"))
// ar=[]
// for(i=0;i<unos;i++){
//     unos2=prompt("unesi string")
//     ar[i]=unos2

// }
// console.log(ar)


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// fruits=["amin","saki","salkan"]

// fruits.push("AM")
// console.log(fruits)

////////////////////////////////////////////////////
// fruits=["amin","saki","salkan"]

// a=fruits.push("AMIN")
// console.log("D",a)
////////////////////////////////////////////////////

// names=["amin","saki","salkan"]
// console.log(names)
// names.pop()
// console.log(names)

//////////////////////////////////////////////////// uzima sa kraja niza
// names=["amin","saki","salkan"]
// console.log(names)
// returnValue=names.pop()
// console.log(names)
// console.log("value",returnValue)
//////////////////////////////////////////////////////////////join

// names=["amin","saki","salkan"]
// strinfofNames=names.join("+")
// console.log(strinfofNames)
/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////uzima sa pocetka niza
// names=["amin","saki","salkan"]
// console.log(names)
// names.shift()
// console.log(names)
//////////////////////////////////////////////////////////////////dodaje na pocetak nesto

// names=["amin","saki","salkan"]
// console.log(names)
// names.unshift("AM")
// console.log(names)
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////pravi novi array ne dira one koji su napisani
// names=["amin","saki","salkan"]

// nesto=["gggfff","dsaaaaa","dsds"]
// noviAr=names.concat("hhhh")
// console.log(noviAr)
/////////////////////////////////////////////
// names=["amin","saki","salkan"]

// names.splice(1,2);
// console.log(names)

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// food1=["noodle","pasta","ice-cream"]
// food2=["fries","ice-cream","pizza"]
// ar=[]
// for(i=0;i<food1.length;i++){
//     for(j=0;j<food2.length;j++){
//         if(food1[i] === food2[j]){
//             ar.push(food1[i]);
//         }
//     }
// }
// console.log(ar)

// food1=["noodle","pasta","ice-cream"]
// for(el of food1){
//     console.log(el)
// }

// ar=[0,1,false,2,undefined,"",3,null]

// for(i=0;i<ar.length;i++){
//     if(!ar[i] || ar[i] === ""){
//         console.log(ar[i]);
//         ar.splice(i,1)
//     }
    
// }
// console.log(ar)  

// domaci

// brojevi=[1,2,3,1,2,3]

// for(i=0;i<brojevi.length;i++){
    //     if(brojevi[i]=== 1 && 2){
//         brojevi.splice(i,2)
//     }
// }
// console.log(brojevi)
//////////////////////////////==========================trazenje istih brojeva
// numbers=[1,2,3,45,6,66,74,34,23,5,7,9]
// numbers2=[2,3,65,7,88,43,5646,453,23,43]
// ar=[]

// for(i=0;i<numbers.length;i++){
    //     for(j=0;j<numbers2.length;j++){
        //         if(numbers[i]===numbers2[j]){
            
            //           ar.push(numbers[i])
//         }
//     }
// }
// console.log(ar)
//====================================================================================

// numbers=[1,2,3,4,5,6,7,8,9,10]

// for(i=0;i<numbers.length;i++){
    //     if(numbers[i]%2===0){
        //         console.log(numbers[i]," deljiv sa 2")
        //     }else{
            //         console.log(numbers[i]," nije deljiv sa 2")
            //     }
            // }
 ///////////////////////////////////domaci   
// brojevi=[1,2,3,1,2];

// for(i=0;i<brojevi.length;i++){
//     if(brojevi[i]=== 1 && 2){
//         brojevi.splice(i,2)
//     }
// }
// console.log(brojevi);


// brojevi=[1,3,2,4,6,7,8,6,5,4,4,5,4,5,43,5,54,45,4,45]
// brojevi2=[1,32,2,44,65,76,54,3,234]
// ar=[]

// for(i=0;i<brojevi.length;i++){
//     for(j=0;j<brojevi2.length;j++){
//         if(brojevi[i]===brojevi2[j]){
//            ar.push(brojevi[i])
//         }
//     }
// }
// console.log(ar)

// unos=parseInt(prompt("koliko zelis da uneses brojeva"))
// ar=[]
// for(i=0;i<=unos;i++){
//     unos2=parseInt(prompt("unesi broj"))
//     ar[i]=unos2
//     if(ar[i] %2===0){
//         console.log(ar[i],"je deljiv sa 2")
//      }
//      else{
//          console.log(ar[i],"nije deljiv sa 2")
//      }
// }


// unos=parseInt(prompt("koliko elemenata zelite da unesete"))
// ar=[]
// for(i=0;i<unos;i++){
//     unos2=prompt("unesi element");
//     ar[i]=unos2
// }
// console.log(ar)
// unos3=prompt("da li je vas unos ispravan")
// while(unos3!=="0"){
//     promena=prompt("unesite 1 da dodate ili 2 da maknete")
//     inx=parseInt(prompt("unesite index"))
//     if(promena === "1"){
//         noviel=prompt("unesite elemnet")
//         ar.splice(inx,0,noviel)
//     }else if(promena=== "2"){
//         ar.splice(inx,1)
//     }
//     console.log(ar)
//     unos3=prompt("da li je vas unos ispravan")
// }

// data=[3,21,32,36,37,56,8,12,16,18,20,68,69]
//  unos=parseInt(prompt("index kojeg broja zelite da znate"))
// for(i=0;i<data.length;i++){
//     if(data[i]=== unos){
//         console.log("vas broj je na idexu",i)
//     }
// }

// a=[3,6,23,9,44,14,83,22,5,1];
// sum=0;
// brojel=a.length
// for(i=0;i<a.length;i++){
//     sum=sum+a[i]
// }
// console.log(sum/a.length)
//======================================
// arr=[3,6,0,23,0,9,44,14,0,83,22,5,0,1];
// a=[]
// for(i=0;i<arr.length;i++){
//     if(arr[i]===0){
//         arr.splice(i,1)
//         arr.push(0)
//     }
// }

// console.log(arr)
//==================================
// arr=[3,6,0,23,0,9,44,14,0,83,22,5,0,1];
// max=arr[0]
// min=arr[0]
// for(el of arr){
//     if(el>max){
//         max=el
//     }else if(min>el){
//         min=el
//     }
// }

// console.log(max-min)

// arr=[3,6,0,23,0,9,44,14,0,83,22,5,0,1];
// for(i=0;i<arr.length;i++){
//     if(arr[i]===77 && 65){
//         console.log("da")
//     }else{
//         console.log("ne")
//     }
//  }


// arr=[3,6,0,23,0,9,44,14,0,83,22,5,0,1];
// for(i=0;i<arr.length;i++){
//     if(arr[i]===0){
//         arr.splice(i,1)
//         arr.push(0)
//     }
// console.log(arr)
// }
//=======================================================

// arr=[3,6,0,23,0,9,44,14,0,83,22,5,0,1];
// brojac=0;
// while(brojac<arr.length){
//     console.log(arr[brojac])
//     brojac++
// }
//========================================

// arr=[3,6,0,23,0,9,44,14,0,83,22,5,0,1];
// max=arr[0]
// min=arr[0]
// for(el of arr){
    //     if(el > max){
        //         max=el
        //     }else if(min > el){
            //         min=el
            //     }
            // }
// console.log(max,min)

//   arr=[1,0,1,0,1,0,1,0,1,0,1,0,1,0];
//  for(i=0;i<arr.length;i++){
//      if(arr[i]===1){
//          arr.splice(i,1)
//         arr.unshift(1)
//      }
//  }
//  console.log(arr);

//===================================
//  arr=[[1,2,3],2]
//  console.log(arr[0][2])
//=====================================

// function sayhello(){
//     console.log("nesto")
// }

// sayhello();

// function sum(){
//     unos=parseInt(prompt("unesi prvi broj"));
//     unos2=parseInt(prompt("unesi drugi broj"))
//     console.log("zbir ova dva broja je",unos+unos2)
// }

// sum();

// function sayhello(ime){
//     console.log("hello",ime)
// }
// sayhello("amin")
// sayhello("saki")
// //samo menjamo parametre

// function numbers(a,b){
//     console.log(a+b)
// }
// numbers(4,5)

// function mojaF(){
//     console.log("Asd")
//     console.log("ccc")
//     return "okay"
// }
// mojaF();

// function solution(str){
//     string=""
//     for(i=str.length-1;i>=0;i--){
//         string+=str[i]
//     }
//     return string
// }
// solution(str)

// function mojaF(){
//     console.log("Asd")
//     console.log("ccc")
//     return "okay"
// }
// mojaF();

// console.log(max,min)

function reverseLetter(str) {
  
    return str.split('')
                .reverse()
                .filter(val => /[a-zA-Z]/.test(val))
                .join('');  

    }
reverseLetter("amnsss")