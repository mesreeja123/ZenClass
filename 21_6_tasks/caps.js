var arr=["asgard","thanos","hawk Eye" ];
makecaps(arr)
function makecaps(x){
    x.forEach(element => {
        
            console.log(element.toUpperCase());
        
    });
}
//anonymous function
console.log("anonymous");
var loop=function(){
    arr.forEach(element => {
        console.log(element.toUpperCase());
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