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

