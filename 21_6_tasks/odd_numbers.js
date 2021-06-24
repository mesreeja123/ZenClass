var arr=[1,2,4,6, 7, 89, 3, 45, 76 ];
findodd(arr)
function findodd(x){
    x.forEach(element => {
        if ((element%2)!=0){
            console.log(element);
        }
    });
}
//anonymous function
console.log("anonymous");
var loop=function(){
    arr.forEach(element => {
        if ((element%2)!=0){
            console.log(element);
        }
    })
    };

var res=function(){
    loop(); 
}
res();

//iife
console.log("iife");
(function(){
loop();
})();

// arrow function
console.log("arrow function");
var p= () => loop();

p();