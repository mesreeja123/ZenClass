var obj1 = { name: "Person 1", age:50 };
var obj2 = { age:5, name: "Person 1" };
var p=true
console.log(obj1["name"]==obj2["name"])
k1=Object.keys(obj1)
k2=Object.keys(obj1)
if (k1.length==k2.length){
    for (var i=1;i<=k1.length;i++){
        console.log(obj1[k1[i]]);
        console.log(obj2[k1[i]])
      if (obj1[k1[i]]===obj2[k1[i]]){
          continue;
      }
      else{
          p=false;
          break;
      }
    } 
}
else{
    p=false;
}
console.log(p)
