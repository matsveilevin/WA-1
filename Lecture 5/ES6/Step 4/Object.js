const human={
    name:'Egor',
    lastname:'Bugor',
    gender:'male',
    age:'21'
}
let {lastname,name}=human;


console.log(lastname);


let{name:pogremuha}=human;


console.log(pogremuha);
let{status:workerStatus='Faired!'}=human;
console.log(workerStatus);
let valueName='age';
let{[valueName]:smth}=human;
console.log(smth);