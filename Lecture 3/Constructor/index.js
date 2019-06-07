var Person = function () {
    this.publicVar=1;
    this.publicMethod=function(){return 2;}
    var privateVar=3;
    var privateMethod=function(){return 4;}
    console.log('bubblegum');
    //return this;
}
Person.prototype.prototypeFunction=function(){
    console.log(this.publicVar);
    console.log(privateVar);
    return 5;
}

var person = new Person;
console.log(person.publicVar);
console.log(person.privateVar);

var Applictaion={
    
    Car:function(_type,_creationDate,){
        var type=_type;
        var date=_creationDate;
        this.getType=function (){
            return type;
        }
        this.setDate=function(_newDate){
            date=_newDate;
        }
    },
    Mercedes:function(_type,_creationDate,_model,_carClass){
        Applictaion.Car.apply(this,Array.prototype.slice.call(arguments,0,1));
        var model=_model;
        var carClass=_carClass;
        this.getModel=function (){
            return model;
        }
        this.setCarClass=function(_newCarClass){
            carClass=_newCarClass;
        }
    },
}
var myDream=new Applictaion.Mercedes('coupe','2018','c2380','E');
console.log(myDream.getModel());
console.log(myDream.getType());