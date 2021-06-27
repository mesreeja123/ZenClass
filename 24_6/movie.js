class Movie{
    constructor(title,studio,rating="PG")
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
       
    }
    getRating(){
        return this.rating;
    }
    getStudio(){
        return this.studio;
    }
    getTitle(){
        return this.title;
    }   
    
    setTitle(x){
        this.title=(x);
    }
   

}
var c= new Movie('Casino Royale','Eon Productions','PG­13');
var c1=new Movie('URI','Bollywood');
var c2=new Movie('3 idiots','Bollywood')
console.log(c1.getRating())
console.log(c.getRating())
var arr=[c1,c2,c];
//console.log(c2)
var p = () => {
    var na=[];
    //console.log(arr)
    for (each of arr){
    if (each.getRating()=='PG'){
        na.push(each)
    }
    }
    return na
};
console.log(p())

