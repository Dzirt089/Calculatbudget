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
    savings : true,
    chooseExpenses: function() {       //Функция для проверки ввода от пользователя по обязательным расходам. Цикл переложили в функцию.
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
    },
    detectDayBudget: function() {    //Вывод сообщением в браузере о среднем бюджете в день.
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {         //Проверяем условиями уровень достатка клиента, исходя из среднего бюджета за день
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {       // Функция, которая поможет нам расчитать накопления с дипозита, если он есть
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");
    
            appData.monthIncome = (save/100/12*percent).toFixed();
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {    //Функция для определения необязательных расходов
        for(let i = 1; i <= 3; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        let i = 1 ;
        while(i <= 1) {
            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
            if( typeof(items) === 'string' && typeof(items) != null && items != '') {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то ещё?'));
                appData.income.sort();
                appData.income.forEach(function(item, i) {
                    i++;
                    alert("Способы доп. заработка: " + i + ' - ' + item);
                });
            } else {
                i = i - 1;
            }
            i++;
        }
    }

};

for (let key in appData) {
    console.log("Наша программа включает в себя данные : " + key + "-" + appData[key]);
}



