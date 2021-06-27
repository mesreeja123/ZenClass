//  function Person(x) 
 
//  { 
//     this.name1 = x;
//  }
//   var p1 = new Person("Venkat");
//    console.log(p1.name1);
//    console.log(Person.name)
//    console.log(Person.name1)


//    class Person 
//    {
//        constructor(x) 
//        {
//            this.name = x;
//         }
//         foo(){

//         }
//     }
//     var p = new Person("Abhisek");
//     console.log(p);console.log(p.name);


    var person1 = {
        name: "John Doe",
        mobileCharge: 60,
        chargeMobile: function (x,y) {
            console.log(this.mobileCharge+x+y);
        },
    };
    var person2 = {name: "Ajeeth",mobileCharge: 50,};
    person1.chargeMobile.call(person2,10,23);
    person1.chargeMobile.apply(person2, [90,34]);