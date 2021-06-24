var arr=[1,2,4,6, 7, 89, 3, 45, 76 ];
findPrime(arr)
function findPrime(x){
    x.forEach(element => {
        var flag=0
        if (element==1){
            flag = 1;
            
        }
        else{
        for(var i=2 ; i <= element/2 ; i++) {
    
      if(element%i == 0) {       
         flag = 1;
         break;
      }
        }}
        if (flag==0){
            console.log(element);
        }
    });
}
//anonymous function
console.log("anonymous");
var loop=function(){
    var res1=[];
    arr.forEach(element => {
        var flag=0;       
        if (element==1){
            flag = 1;
            
        }
        else{
        for(var i=2 ; i <= element/2 ; i++) 
        {
    
      if(element%i == 0) {       
         flag = 1;
         break;
      }
        }
        }
        if (flag==0){
            res1.push(element);
        }
    
    })
    return res1;
    };

var res=function(){
   return loop(); 
}
console.log(res());

//iife
console.log("iife");
(function(){
console.log(loop());
})();

// arrow function
console.log("arrow function");
var p= () => loop();

console.log(p());