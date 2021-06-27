var xhr= new XMLHttpRequest();
//var data=""
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload= function () {
    var data = JSON.parse(this.response);
    console.log('::::asia countries::::::')
    var newdata=data.filter(function(x){
        return x['region']=='Asia';
    });
    console.log(newdata)
    console.log('::::less poputation countries::::::')
    var pop=data.filter(function(x){
        return x['population']<200000;
    }); 
    console.log(pop)
    console.log("::::::::::::for each loop:::::::::::")
        data.forEach(element => {
          console.log("name:",element["name"]);
        console.log("flag:",element["flag"]);
        console.log("population:",element["population"]);
        console.log("capital:",element["capital"]);
        console.log("region:",element["region"]);  
        });
    console.log("::::::::::::::total population::::::::::::::")
   var tpop=data.map(function(u)
   {
        return u.population;
   }).reduce(function(y,z){
       
        return y+z;
    },0);  
    console.log(tpop);

    console.log(":::::::::::USD:::::::::") 
    var cur=data.filter(function(x){
        var curr=x.currencies;
        for (var c of curr){
              
            if (c.code=="USD")
            {
               return x; 
            }
        }
    })
    console.log(cur) 
    
  };
  xhr.send();