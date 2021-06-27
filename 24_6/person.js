class Person{
    constructor(x,y,name,occupation,age)
    {
        this.height=parseFloat(x);
        this.weight=parseFloat(y);
        this.name=name;
        this.occupation=occupation;
        this.age=parseInt(age)
    }
    getHeight(){
        return this.height;
    }
    getWeight(){
        return this.weight;
    }
    getAge(){
        return this.age;
    }
    getOccupation(){
        return this.occupation;
    }
    getName(){
        return this.name;
    }
    getBMI(){
        return (this.weight/((this.height)*(this.height)));
    }
   
    setName(x){
        this.name=(x);
    }
   

}
var c= new Person(1.6,60,'sreeja',"SE",25);
var c1=new Person()
c1.setName("sree")
console.log(c1.getName())
console.log(c.getBMI())