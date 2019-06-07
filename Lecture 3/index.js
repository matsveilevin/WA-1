function f1()
{
    console.log('1');
}
function f2()
{
    console.log('2');
}
setTimeout(f1,0);//через 1000мс будет запущена функция f1, если V8 будет свободен
setTimeout(f2,0);
setTimeout(f2,0);