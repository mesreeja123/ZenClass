var arr=["asgard","thanos","hawk Eye","hiiih","piiiip" ];
findpalindrome(arr)
function findpalindrome(x){
    var pl=[]
    x.forEach(element => {
        if (palindrome(element))
        {
           pl.push(element); 
        }
    });
    console.log(pl);
}
function palindrome(string){
    var i=0;
    var j=string.length-1;
    var flag=0;
    for (i=0;i<((string.length)/2);i++)
    {
        if (string[i]!==string[j])
        {
            flag=1;
            return false;
        }
        else{
            j=j-1;
        }
    }
    return true;
}
//anonymous function
console.log("anonymous");
var loop=function(){
    var pl1=[]
    arr.forEach(element => {
        if (palindrome(element)){
           pl1.push(element); 
        }
    })
    return pl1;
    };

var res=function(){
    return (loop()); 
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