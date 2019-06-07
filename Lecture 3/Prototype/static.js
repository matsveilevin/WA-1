function Hamster() {
    //this.age = []
}

 Hamster.prototype = {
    age: 0, 
    setAge: function (value) {
        this.age=value
    }
} 



h1=new Hamster();



h2=new Hamster();
h1.setAge(99);
console.log(h2.age);//0

//____________________________________________________________________

function Worker() {
    //this.age = []e
}

Worker.prototype = {
    qualification: [], 
    addQualify: function (q) {
        this.qualification.push(q);
    }
}
w1=new Worker();
w2=new Worker();
w1.addQualify('programmer');
console.log(w2.qualification);//['programmer']