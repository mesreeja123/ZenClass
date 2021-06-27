class Circle{
    constructor(x,y)
    {
        this.color=x;
        this.radius=parseFloat(y);
    }
    getRadius(){
        return this.radius;
    }
    getColor(){
        return this.color;
    }
    getArea(){
        return (3.14*this.radius*this.radius)
    }
    getCircumference(){
        return(2*3.14*this.radius)
    }
    setColor(x){
        this.color=x;
    }
    setRadius(y){
        this.radius=parseFloat(y);
    }

}
var c= new Circle('red',3);
var c1=new Circle()
c1.setColor("green")
console.log(c.getColor())
console.log(c1.getColor())