var arr=[1,2,4,6, 7, 89, 6,3, 45, 76 ,4, 6,54, 45,4,45];

duplicates(arr)
function duplicates(x){
    var obj={};
    var dup=[];
    x.forEach(element => {       
        if (obj[element]==1)
        {
            dup.push(element);
            obj[element]=2;
        }
        else{
            obj[element]=1;
        }
    });
    //console.log(obj)
    console.log(dup)
}
//anonymous function
console.log("anonymous");
var loop=function(){
    var obj={};
    var dup=[];
    arr.forEach(element => {
        if (obj[element]==1)
        {
            dup.push(element);
            obj[element]=2;
        }
        else{
            obj[element]=1;
        }
    })
    return dup;
    };

var res=function(){
    return loop(); 
}
var ans1=res();
console.log(ans1);
//iife
console.log("iife");
(function(){
console.log(loop());
})();

// arrow function
console.log("arrow function");
var p= () => loop();

console.log(p());