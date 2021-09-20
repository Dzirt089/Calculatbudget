let money = prompt ('Ваш бюджет на месяц?', '');
let time = prompt ('Введите дату в формате YYYY-MM-DD', '');



let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

let v1 = prompt ("Введите обязательную статью расходов в этом месяце", ""),
    v2 = prompt ("Во сколько обойдется?", ""),
    v3 = prompt ("Введите обязательную статью расходов в этом месяце", ""),
    v4 = prompt ("Во сколько обойдется?", "");
appData.expenses[v1] = v2;
appData.expenses[v3] = v4;


alert(appData.budget/30);


