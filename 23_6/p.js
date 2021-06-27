//  function Person(x) 
 
//  { 
//     this.name1 = x;
//  }
//   var p1 = new Person("Venkat");
//    console.log(p1.name1);
//    console.log(Person.name)
//    console.log(Person.name1)


//    class Person 
//    {
//        constructor(x) 
//        {
//            this.name = x;
//         }
//         foo(){

//         }
//     }
//     var p = new Person("Abhisek");
//     console.log(p);console.log(p.name);


    // var person1 = {
    //     name: "John Doe",
    //     mobileCharge: 60,
    //     chargeMobile: function (x,y) {
    //         console.log(this.mobileCharge+x+y);
    //     },
    // };
    // var person2 = {name: "Ajeeth",mobileCharge: 50,};
    // person1.chargeMobile.call(person2,10,23);
    // person1.chargeMobile.apply(person2, [90,34]);

    let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname;
//alert( admin ); // "Guvi geek"

//let a = prompt("First number?");
//let b = prompt("Second number?");
//alert(+a + +b);

// var a = "1" > "12";//Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused")
// } 

//let a = prompt("Enter a number?");//Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }

// let value = prompt('How many runs you scored in this ball');
// if (value === 4) {
//       console.log("You hit a Four");
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("you scored  ",value, " runs");
// }

// let login = 'Employee';
// let message = (login == 'Employee') ||
//   (login == 'Director') ? 'Greetings' :'No login';
//   console.log(message);

  // You cant change the value of the msg
// let message;
// console.log(message);
// if (true)
// {
//  message = "welcome boss";
//  console.log(message);
// }
// else
// {
//  let message = "Go away";
// }
//   console.log(message);


// let message;
// let lock ;//Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);


//   let message;
// let lock = null;//Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);

//You can change only 2 characters
// let i = 0;
// while (i<10) {
//   console.log( i++ );
// }

//You are allowed to modify only one character 
// for (let num = 2; num <= 20; num += 2) {
//   console.log(num)
// }
// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) 
// {
//   console.log('Wrapped '+gifts[i]+' and added a bow!');
// }

// let countdown = 100;while (countdown > 0) {
//   countdown--;
//   if(countdown == -1)
//   {
//    console.log("bomb triggered");
//   }
// }

// var lemein = '0';
// var lemeout = 0;
// var msg = "";
// if (lemein) {
//  msg += 'hi';
//  }
//  if (lemeout) 
//  {
//  msg += 'Hello';
// }
// console.log(msg);


//  let n = 123;
//  console.log(add(n.toString()));
//  function add(n)
// {
// let sum = 0;

// for(var i=0;i<n.length;i++)
// {
   
//     sum+= +n[i];
//  }
//  return sum;
// }

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
 
// for (var i = 0; i < 10; i++) {
//  new_string += numsArr[i] + ','
// }
// new_string += numsArr[10]
// console.log(new_string);

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 == 0 )
//  {
//  numsArr[i] = 'even'
//  }
// }
// console.log(numsArr);

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=0;
// for (var i = 0; i <10; i++) {
//  if(numsArr[i]%2==0){;
//  sum += numsArr[i]
// }
// }
// console.log(sum);

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=100;
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i]%2==0)
//  {
//  sum += numsArr[i]
//  }
//  else
//  {
//  sum -= numsArr[i]
//  }
// }
// console.log(sum);

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// //console.log(numsArr.length)
// for (var i = 0; i <=1; i++)
//  {
//  console.log( numsArr[i]);
// }

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all="";
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;j++)
//  {
//     str_all +=inner_array[j];
// }
// }
// console.log(str_all);

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=0;for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;j++ )
//       if(j %2 == 0 )
//       {
//          numsArr[i][j] = "even"
//        }
// }
// console.log(numsArr);




// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all="";for (var i = numsArr.length-1; i >= 0; i--) 
// {
//  var inner_array = numsArr[i];
//  console.log(inner_array);
//  console.log(inner_array.length);
//  for(var j =inner_array.length-1;j >= 0;j--)
//  {

//      str_all +=" "+inner_array[j];
// }
// }
// console.log(str_all);

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var sum_odd=0;
// var sum_even=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;j++ ){
//  if(inner_array[j]%2!=0)
//  {
//  sum_odd += inner_array[j]
//  }
//  else
//  {
//  sum_even += inner_array[j]
//  }
// }
// }
// console.log(sum_odd);
// console.log(sum_even);

// aa = ((f,s,t) => {
//  //let f,s,t;
//  console.log(f,s,t);
//  if(f>s && f>t){
//  console.log(f)}
//  else if(s>f && s>t){
//  console.log(s)}
//  else{
//  console.log(t)}
// })(1,2,3);
// const arr = [9,8,5,6,4,3,2,1];(function() {
//  let sum = 0;
//  for (var i = 0; i < arr.length; i++){
//  sum += arr[i];
//  }
//  console.log(sum);
//  return sum;
// })();
// var arr = ['guvi', 'geek', 'zen', 'fullstack'];
// var ano = function() {
//  for (var i = 0; i < arr.length; i++) {
//  console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
//  }
// }
// ano();

// const newArray=[1,3,2,5,10,9,8,11,7];
// const myPrime=newArray.filter(num=>{
//  if (num===1){
// return false;
//  }
//  for(let i=2;i<=num/2;i++){
    
//  if(num%i===0)
//  {
//  return false;
//  }
//  }
//  return true;
// });
// console.log(myPrime);

// const num = [10, 20, 30, 40,50,60,70,80,90,100] 
// const sum = (a, b) =>{
//  return (a + b);
//  }
// const sum1 = num.reduce(sum,0)
// console.log(sum1);


// var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// k = arr.length % k;
// (function() {
//  out = arr.slice(k + 1, arr.length);
//  var count = out.length;
//  for (var i = 0; i < k + 1; i++) {
//  out[count] = arr[i];
//  count += 1;
//  }
//  console.log(out);
//  })();

// var arr=[1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var n=3;
// rotate(arr,n)
// function rotate(arr,n)
// {
//     var l=arr.length;
//     n=n%l;
//     var nlist={};
//     for (var i=0;i<l;i++)
//     {
//         var n1=i-n;
//     //console.log(n1);
//         var n2=n1;
//         if (n1<0)
//         {
//             n2=n1+l;
//         }    
//     nlist[i]=arr[n2];    
//     }
// var l1=[];
// for (var j=0;j<l;j++)
// {
//     l1.push(nlist[j]);
// }
// console.log(l1); 
// }

// var arr = ['guvi', 'geek', 'zen', 'fullstack'];
// (function() {
//  for (var i = 0; i < arr.length; i++) {
//  console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
//  }
// })();

// (function(str){
//  str1 = str.split("").reverse().join('');
//  console.log(str1); 
// })('abcd');


// var res = function(arr){
//     var newArr = [];
//  for(var i=0; i < arr.length; i++){
 
//  if(newArr.indexOf(arr[i]) == -1) 
//  {
//  newArr.push(arr[i]);
//  } 
//  }
//  console.log(newArr)
// };
// res(['guvi',"geek","guvi","duplicate","geeK"])


// var array =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
// var final=[]
// while(array.length!=0)
// { var new_object={} 
//  var outer_remove = array.shift();
//  //console.log(outer_remove);
//  while(outer_remove.length!=0)
//  {
//  var inner_remove = outer_remove.shift()
//  //console.log(inner_remove);
//  var key = inner_remove[0]
//  var value =inner_remove[1]
//  new_object[key]=value
//  }
//  final.push(new_object)
//  }
//  console.log(final)


// var as=[12,34,5,6,2,56,6,2,1];
// var s=as.reduce(function(a,c){
//  if(c%2!=0)
//  {
//  return a+c;
//  }
//  return a;},0);
// console.log(s);

aa = ((data)=>{
 var a=data;
 var l='';
for(i=0;i<a.length-1;i++){
 
 var s=a[i+1]
 var b=a[i]
 l+=s
 l+=b 
 i=i+1
}
if((a.length%2)!=0)
{
 l+=a[a.length-1]
}
console.log(l);
});
aa('1234');


















