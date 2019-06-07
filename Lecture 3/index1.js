function Pup(y,x){
    //создание пустого объекта
    this._x=x;
     _y=y;
    this.getY=function (){ return _y;}
}
var res= Pup(2,3);
console.log(res);
console.log(window.getY());