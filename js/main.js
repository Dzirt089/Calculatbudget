let startBtn = document.getElementById("start"),
    budgetValue = document.querySelector(".budget-value"),
    dayBudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    expensesValue = document.querySelector(".expenses-value"),
    optionalExpensesValue = document.querySelector(".optionalexpenses-value"),
    incomeValue = document.querySelector(".income-value"),
    monthSavingsValue = document.querySelector(".monthsavings-value"),
    yearSavingsValue = document.querySelector(".yearsavings-value"),
    inputExpensesItem = document.querySelectorAll(".expenses-item"),
    inputOptionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    btnExpensesItem = document.querySelector(".expenses-item-btn"),
    btnOptExpenses = document.querySelector(".optionalexpenses-btn"),
    btnCountBudget = document.querySelector(".count-budget-btn"),
    chooseIncome = document.querySelector(".choose-income"),
    checkSavings = document.querySelector("#savings"),
    sumValue = document.querySelector("#sum"),
    percentValue = document.querySelector("#percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

let money, time;

startBtn.addEventListener('click', function() {
    time = prompt ('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt ('Ваш бюджет на месяц?', '');
    
    while(isNaN(money) || money == "" || money == null){
        money = +prompt ('Ваш бюджет на месяц?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() +1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

btnExpensesItem.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < inputExpensesItem.length; i++) {

        let a = inputExpensesItem[i].value,
            b = inputExpensesItem[++i].value;
     
        if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
            && a != '' && b != '' && a.length < 50 ) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }   
    }
    expensesValue.textContent = sum;
});

btnOptExpenses.addEventListener('click', function(){
    for(let i = 0; i < inputOptionalExpensesItem.length; i++) {
        let opt = inputOptionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
    }
});

btnCountBudget.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget/30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if(appData.moneyPerDay < 100) {
            levelValue.textContent ="Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent ="Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent ="Высокий уровень достатка";
        } else {
            levelValue.textContent ="Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent.toFixed();
        appData.yearIncome = sum/100*percent.toFixed();

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent.toFixed();
        appData.yearIncome = sum/100*percent.toFixed();

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);        
    }
});

// Объект, где пока содержаться основные значения нашей программы
let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false,

};