var Person = {
    name: '',
    lastName: '',
    age: 0,
    f1:function (){}
}


function Student() {
    var privateVar=2128506;
    this.course = 0;
    this.faculty = 'dfgdfg';
    this.specialization = 'tdf';
}

Student.prototype.breath = function () {
    console.log('Breathing...')
}
Student.prototype.displayInfo=function(){
    //console.log(privateVar);
    console.log(this.course);
    console.log(this.faculty);
    console.log(this.specialization);
    console.log(this);
}



student=new Student();
student.displayInfo();
console.log(Student.prototype);