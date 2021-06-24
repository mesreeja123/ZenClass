var arr=[1,2,4,6, 7, 89, 3, 45, 76 ];
findsum(arr)
function findsum(x){
    var s=0;
    x.forEach(element => {
        s=s+element;
    });
   console.log(s); 
}
//anonymous function
console.log("anonymous");
var loop=function(){
    s=0;
    arr.forEach(element => {
        s=s+element;
    })
    return s;
    };

var res=function(){
   return loop(); 
}
var ans1=res();
console.log(ans1);

//iife
console.log("iife");
(function(){
var t=loop();
console.log(t);
})();

// arrow function
console.log("arrow function");
var p= () => loop();

var f=p();
console.log(f);