var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" }
  ];
//use the above JSON to iterate over all for loops (for, for in, for of, forEach)
for (var i=0;i<obj.length;i++)
{    
    console.log("for loop");
    console.log(obj[i]);
}

for (var j in obj) {
    console.log(" for in loop")
    console.log(obj[j]);
}

obj.forEach(function(k)
    {console.log("for each loop");

    console.log(k);
});

for (const p of obj) 
{   console.log(" for of loop");
    console.log(p);
    
}