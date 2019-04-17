'use strict';
let money = prompt('Ваш бюджет на месяц?', 10000),
    time = prompt('Введите дату в формате YYYY-MM-DD', 'YYY-MM-DD'),
    st = prompt('Введите обязательную статью расходов в этом месяце', 'статья'),
    hm = prompt('Во сколько обойдется?', 10000);
var appData = {
    money:money,
    dateTime:time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false
};
appData.expenses.st=hm;
var oneDay = (appData.money - appData.expenses.st)/30;
alert('Расход на один день: '+oneDay);
let x = 2 && 1 && null && 0 && undefined; 
alert( !!(1 && 2 )); 
let y = [ ] + false - null + true;
console.log( y ); 
let q = 1; let w = q = 2; alert('третий вопрос '+ w);
let t=[ ] + 1 + 2; alert('четвертый вопрос '+ t);
alert( "1"[0] );
let a = [1, 2, 3], 
    b = [1, 2, 3];
    if ("Ёжик" > "яблоко"){
alert( 'true');}else{
    alert('false')
}
let p=0 || "" || 2 || undefined || true || falsе;
alert(p );