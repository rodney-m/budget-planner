const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#button-cancel');
const confirmBtn = document.querySelector('#button-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('#alert');

let totalExpenses = 0;

const clear = () => {
    reasonInput.value ='';
    amountInput.value ='';
}

confirmBtn.addEventListener('click', ()=> {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if(enteredReason.trim().length <=0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0){
        const alertIon = document.createElement('ion-alert');
        alertIon.header = 'Invalid inputs';
        alertIon.message = 'Please enter valid name and amount';
        alertIon.buttons = ['Oh, ok'];
        alertCtrl.appendChild(alertIon);
        alertIon.present();
        return; // this is to avoid adding new line of ion-item
    }
    const newItem = document.createElement('ion-item')
    newItem.textContent= `${enteredReason} : $${enteredAmount}`;

    expensesList.appendChild(newItem)

    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent= totalExpenses

    clear();
})

cancelBtn.addEventListener('click', clear)