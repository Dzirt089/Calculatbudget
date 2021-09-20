//Программа для расчета бюджета
let money, time;

// Функция для автоматизации вопросов. Выше две переменные в глобальной области.
function start() {
    money = +prompt ('Ваш бюджет на месяц?', '');
    time = prompt ('Введите дату в формате YYYY-MM-DD', '');
    
    while(isNaN(money) || money == "" || money == null){
        money = +prompt ('Ваш бюджет на месяц?', '');
    }
}
start();

// Объект, где пока содержаться основные значения нашей программы
let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true
};

//Функция для проверки ввода от пользователя по обязательным расходам. Цикл переложили в функцию.
function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");
     
        if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
            && a != '' && b != '' && a.length < 50 ) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }   
    }
}
chooseExpenses();

//Вывод сообщением в браузере о среднем бюджете в день.
function detectDayBudget() {
    appData.moneyPerDay = (appData.budget/30).toFixed();

    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

//Проверяем условиями уровень достатка клиента, исходя из среднего бюджета за день
function detectLevel(){
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

// Функция, которая поможет нам расчитать накопления с дипозита, если он есть
function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = (save/100/12*percent).toFixed();
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

//Функция для определения необязательных расходов
function chooseOptExpenses() {
    for(let i = 1; i <= 3; i++) {
        let a = prompt("Статья необязательных расходов?", "");
        if( typeof(a) === 'string' && typeof(a) != null && a != "" && a.length < 50) {
            console.log("Done chooseOptExpenses");
            appData.optionalExpenses[i] = a;
        } else {
            i = i - 1;
        }
    } 
}

chooseOptExpenses();


















// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");
        
//     if( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         console.log('bad result');
//         i--;
//     }

//     i++;
// }

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");
        
//     if( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
//      console.log('done');
//        appData.expenses[a] = b;
//     } else {
//         console.log('bad result');
//        i--;
//     }

//    i++;
// } while (i < 2);