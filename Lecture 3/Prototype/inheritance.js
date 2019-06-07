var Person = function (_name, _age, ) {
    this.name = _name;
    this.age = _age;
    this.getName = function () {
        return this.name;
    }
    this.setName = function (_newName) {
        this.name = _newName;
    }
}

var Student = function (_course, _group) {
    this.course = _course;
    this.group = _group;
    this.getCourse = function () {
        return this.course;
    }
    this.setCourse = function (_newCourse) {
        this.course = _newCourse;
    }
}


var student=new Student;
student.birthday='12.08.1984'
Student.prototype.__proto__ = Person.prototype;//>IE10
Student.prototype = Object.create(Person.prototype);//
Student.prototype = new Person();//bad variant
