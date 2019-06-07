function Animal(name) {
    this.name = name;
    this.speed = 0;
  }
  
 
  
  Animal.prototype.stop = function() {
    this.speed = 0;
    alert( this.name + ' стоит' );
  }
  
  Animal.prototype.run = function(speed) {
    this.speed += speed;
    alert( this.name + ' бежит, скорость ' + this.speed );
  };
  

  function Rabbit(name) {
    Animal.apply(this, arguments);
  }
  

  Rabbit.prototype = Object.create(Animal.prototype);

  Animal.prototype.die = function() {
    this.speed = 0;
    alert( this.name + ' помер' );
  }

  Rabbit.prototype.constructor = Rabbit;// Rabbit.prototype.constructor - refference to function - creator
  

  Rabbit.prototype.jump = function() {
    this.speed++;
    alert( this.name + ' jump with next speed: ' + this.speed );
  }

  Rabbit.prototype.run = function(speed) {
    this.speed++;
    this.jump();
  };

  Rabbit.prototype.run = function() {
    Animal.prototype.run.apply(this, arguments);// call parent method with arguments
    this.jump();
  }