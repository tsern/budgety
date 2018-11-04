var arrIncome = [];
var arrExpenses = [];

function onAddBtnClicked() {
    let descEl = document.getElementsByClassName('add__description')[0];
    let descText = descEl.value;
    let valueEl = document.getElementsByClassName('add__value')[0];
    let putValue = +valueEl.value;
    let newObj = {
        desc: descText,
        value: putValue
    };
    
    let selEl = document.getElementsByClassName('add__type')[0];
    let selectedIndex = selEl.selectedIndex;
    let selectedOpt = selEl.options[selectedIndex].value;
    if (selectedOpt == 'income') {
        arrIncome.push(newObj);
    } else {
        arrExpenses.push(newObj);
    }

    updatePage();
}

function updatePage() {
    // calculate income, expences, sum
    let income = 0;
    for (let i = 0; i < arrIncome.length; i++) {
        income += arrIncome[i].value;
    }
    
    let expenses = 0;
    for (let i = 0; i < arrExpenses.length; i++) {
        expenses -= arrExpenses[i].value;
    }

    let sum = income + expenses;
    
    // update budget element
    let budgetEl = document.getElementsByClassName('budget__value')[0];
    budgetEl.innerHTML = +sum;
    
    // update income element
    let incomeEl = document.getElementsByClassName('budget__income--value')[0];
    incomeEl.innerHTML = +income;
    
    // update expenses element
    let expensesEl = document.getElementsByClassName('budget__expenses--value')[0];
    expensesEl.innerHTML = +expenses;

    // fill income list
    let incomeListEl = document.getElementsByClassName('income__list')[0];
    incomeListEl.innerHTML = '';
    for (let i = 0; i < arrIncome.length; i++) {
        // create clearfix element
        let itemClearfix = document.createElement('div');
        itemClearfix.className = 'item clearfix';
        itemClearfix.id = 'income-' + i;

        // create description element
        let itemDesc = document.createElement('div');
        itemDesc.className = 'item__description';
        itemDesc.innerText = arrIncome[i].desc;

        // create value element
        let itemValue = document.createElement('div');
        itemValue.className = 'right clearfix';
        itemValue.innerText = arrIncome[i].value;

        incomeListEl.appendChild(itemClearfix);
        itemClearfix.appendChild(itemDesc);
        itemClearfix.appendChild(itemValue);
    } 

    // fill expenses list
    let expensesListEl = document.getElementsByClassName('expenses__list')[0];
    expensesListEl.innerHTML = '';
    for (let i = 0; i < arrExpenses.length; i++) {
        // create clearfix element
        let itemClearfix = document.createElement('div');
        itemClearfix.className = 'item clearfix';
        itemClearfix.id = 'expense-' + i;
        expensesListEl.appendChild(itemClearfix);

        // create description element
        let itemDesc = document.createElement('div');
        itemDesc.className = 'item__description';
        itemDesc.innerText = arrExpenses[i].desc;
        itemClearfix.appendChild(itemDesc);

        // create right clearfix element
        let rightClearfixEl = document.createElement('div');
        rightClearfixEl.className = 'right clearfix';
        itemClearfix.appendChild(rightClearfixEl);

        // create value element
        let itemValue = document.createElement('div');
        itemValue.className = 'item__value';
        itemValue.innerText = arrExpenses[i].value;
        rightClearfixEl.appendChild(itemValue);

        // create buttom element
        let itemDeleteEl = document.createElement('div');
        itemDeleteEl.className = 'item__delete';
        rightClearfixEl.appendChild(itemDeleteEl);

        let buttonEl = document.createElement('button');
        buttonEl.className = 'item__delete--btn';
        budgetEl.tagName = i;
        budgetEl.addEventListener("click", (e) => {
            alert('onDeleteExpensesItemClicked');
        });
        // budgetEl.onclick = function(e){
        //     alert('onDeleteExpensesItemClicked');
        // };
        // budgetEl.addEventListener("click",function(e){
            
        //     alert('onDeleteExpensesItemClicked');
        //  },false);
        itemDeleteEl.appendChild(buttonEl);
        
        let iEl = document.createElement('i');
        iEl.className = 'ion-ios-close-outline';
        buttonEl.appendChild(iEl); 

        alert('onDeleteExpensesItemClicked');
    } 
}

function onDeleteExpensesItemClicked() {
    alert('onDeleteExpensesItemClicked');
}