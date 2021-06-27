class Uber{
    constructor(x,y)
    {
        this.distance=parseFloat(x);
        this.costPerKM=parseFloat(y);
    }
    getDistance(){
        return this.distance;
    }
    getCost(){
        return this.costPerKM;
    }
    getBill(){
        return (this.distance*this.costPerKM)
    }
   
    setCost(x){
        this.costPerKM=parseFloat(x);
    }
    setDistance(y){
        this.distance=parseFloat(y);
    }

}
var c= new Uber(3.5,30);
var c1=new Uber()
c1.setCost(45)
console.log(c1.getCost())
console.log(c.getBill())