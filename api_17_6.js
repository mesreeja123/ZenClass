var xhr= new XMLHttpRequest();
//var data=""
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload= function () {
    var data = JSON.parse(this.response);
    for( var each1 in data){
        console.log("name:",data[each1]["name"]);
        console.log("flag:",data[each1]["flag"]);
        console.log("population:",data[each1]["population"]);
        console.log("region:",data[each1]["region"]);
        console.log("subregion:",data[each1]["subregion"]);
    }
    //console.log(data);
  };
  xhr.send();

  