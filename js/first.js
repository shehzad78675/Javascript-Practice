// "use strict";
// alert("Hello");
// alert("world");

// let num = 5;
// while(num){
//     console.log(num--);
// }
// alert(num);

// let i = 0;
// while (i++ < 5) alert( i );

// for (let i = 0; i < 5; ++i) alert( i );

//prime number

// let num= Number(prompt("Enter the number"));
// // console.log(num, typeof num);


// for(let j=2; j<=num; j++){
//     let checkPrime=true;
//     for(let i=2; i<=Math.sqrt(j); i++){
//         if(j%i==0){
//             checkPrime=false;
//         }
//     }
//     if(checkPrime){
//         console.log(j);
//     }
// }

// let a = (7+3, 1+3);
// console.log(a);

// function fullName(firstName, lastName){
//     console.log(firstName + " " + lastName);
// }

// fullName("Muhammad");

// let a=2;
// let b=2;
// let result = (a + b < 4)? "Below" : "Over";
// console.log(result);

// let login='Director';
// let message= (login == 'Employee') ? 'Hello' : 
// (login == 'Director') ? 'Greetings' : 
// (login == '') ? 'No login' :'';
// console.log(message);

// function ask(question, yes, no){
//     if(confirm(question)) yes();
//     else no();
// }

// function yes() {
//     alert('you confirmed yes');
// }

// function no() {
//     alert('you confirmed no');
// }
// let aaa=[1,2,3,4,5,6,7,8,9];
// let bbb=aaa.map(()=>{
//     // if(){
//     //     si
//     }
// });

// ask('do you confirm?', yes, no);

// console.log(1+'1');

// 1+1
// 1+'1'

// let i= Boolean(prompt('Enter a boolean'));
// console.log(typeof i);
// let num = 0;
// terminated: while(num<10){
//     let num1=0;
//     while(num1<5){
//         if(num1==3){
//             break terminated;
//         }
//         console.log(num1);
//         num1++;
//     }
//     num++;
// }

// alert('20'%'5');

// let date=new Date();

// let dd=date.getDate();
// let mm=date.getMonth()+1;
// let yy=date.getFullYear();

// console.log(dd + '-' + mm + '-' + yy);

// let fname='shehzad';


// fname = fname[fname.length-1] + fname.substring(0, fname.length-1);
 

// console.log(fname);

let now = new Date();
let till = new Date(2022, 11, 25);

console.log(Math.floor((till - now)/(1000*3600*24)));