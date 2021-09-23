let start = document.getElementById("start");

let budget = document.querySelector(".budget-value"),
    dayBudget = document.querySelector(".daybudget-value"),
    level = document.querySelector(".level-value"),
    expenses = document.querySelector(".expenses-value"),
    optionalExpenses = document.querySelector(".optionalexpenses-value"),
    income = document.querySelector(".income-value"),
    monthSavings = document.querySelector(".monthsavings-value"),
    yearSavings = document.querySelector(".yearsavings-value");
    

let inputExpenses = document.querySelectorAll(".expenses-item"),
    inputOptionalExpenses = document.querySelectorAll(".optionalexpenses-item");

let btnExpenses = document.querySelector(".expenses-item-btn"),
    btnOptExpenses = document.querySelector(".optionalexpenses-btn"),
    btnCountBudget = document.querySelector(".count-budget-btn");

let chooseIncome = document.querySelector(".choose-income"),
    checkSavings = document.querySelector("#savings"),
    sum = document.querySelector("#sum"),
    percent = document.querySelector("#percent"),
    year = document.querySelector(".year-value"),
    month = document.querySelector(".month-value"),
    day = document.querySelector(".day-value");

console.log(percent);
console.log(year);
console.log(btnExpenses);
console.log(btnOptExpenses);
console.log(btnCountBudget);
console.log(chooseIncome);
console.log(checkSavings);
console.log(sum);
