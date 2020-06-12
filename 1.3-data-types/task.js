'use strict';

// function checkIfNumber (a) {
//   if (typeof a !== 'number') {
//     a = Number(a);
//   }
// }

function calculateTotalMortgage(percent, contribution, amount, date) {
    //код для задачи №1 писать здесь

    //***если параметр функции будет строкой, то попытайтесь преобразовать в число
    if (typeof percent !== 'number') {
      percent = Number(percent);
    }
    
    if (typeof contribution !== 'number') {
      contribution = Number(contribution);
    }
    
    if (typeof amount !== 'number') {
      amount = Number(amount);
    }
  
    //***Посчитайте тело кредита: сумма, которую необходимо вернуть банку. (сумма кредита минус первоначальный взнос)
    let body = amount - contribution;

    //***Посчитайте количество выплачиваемых месяцев

    // let dateToday = new Date();
    // let months;
    // months = (date.getFullYear() - dateToday.getFullYear()) * 12;
    // months -= dateToday.getMonth() + 1;
    // months += date.getMonth();
    // months <= 0 ? 0 : months;
    // console.log(`кол-во месяцев: ${months}`);

    let dateToday = new Date();
    let months = date.getMonth() - dateToday.getMonth() + (12 * (date.getFullYear() - dateToday.getFullYear()));

    //***Ежемесячная оплата
    let p = percent/100/12;
    let payEveryday = body * (p + p /(((1 + p)**months) - 1));

    //***Посчитайте общую сумму, которую придется заплатить клиенту.
    let payTotal = payEveryday * months;
    console.log(payTotal);
    return Math.round(payTotal * 100) / 100;
    // return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    let greeting ='';
    if (name === '' || name === undefined || name === null) {
      greeting = 'Привет, мир! Меня зовут Аноним';
    } else {
      greeting = `Привет, мир! Меня зовут ${name}`;
    }

    return greeting;
}