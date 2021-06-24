var arr=[1,2,4,6, 7, 89, 3];
var n=3;
rotate(arr,n)
function rotate(arr,n)
{
    var l=arr.length;
    n=n%l;
    var nlist={};
    for (var i=0;i<l;i++)
    {
        var n1=i-n;
    //console.log(n1);
        var n2=n1;
        if (n1<0)
        {
            n2=n1+l;
        }    
    nlist[i]=arr[n2];    
    }
var l1=[];
for (var j=0;j<l;j++)
{
    l1.push(nlist[j]);
}
console.log(l1); 
}
//anonymous function
console.log("anonymous");
var loop=function()
{

   var l=arr.length;
    n=n%l;
    var nlist={};
    for (var i=0;i<l;i++)
    {
        var n1=i-n;
    //console.log(n1);
        var n2=n1;
        if (n1<0)
        {
            n2=n1+l;
        }    
    nlist[i]=arr[n2];    
    }
var l1=[];
for (var j=0;j<l;j++)
{
    l1.push(nlist[j]);
}
return l1;  
    
    
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