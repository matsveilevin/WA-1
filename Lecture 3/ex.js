function makeCounter(){
    //{}
  
    this.curentCounter=1;
    //{}
    this.upgrade= function(){
        return this.curentCounter++;
    }  
}
var c1=new makeCounter();
console.log(c1.upgrade());
console.log(c1.upgrade());
var c2=new makeCounter();
console.log(c2.upgrade());
console.log(c2.upgrade());
console.log(c1.makeCounter);
//ar c1=makeCoun
/* console.log(c1());//1
console.log(c1());//2
var c2=makeCounter();
console.log(c2());//1 */




(function shmakeCounter(){
   document.getElementById('id').click=function(){
       alert('hi');
   }
})();