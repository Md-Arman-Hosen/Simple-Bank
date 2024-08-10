// For withdraw
document.getElementById('btn-withdraw').addEventListener('click',function (){

    const withdrawAmount = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawAmount.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat (previousWithdrawTotalString);
  
    //step-5
    
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalElementString);

    withdrawAmount.value = '';

    if (newWithdrawAmount > previousBalanceTotalAmount){
        alert('Can not withdraw more than you have in your account');
        return;
    }
    
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const AfterWithdrawCurrentBalanceTotal = previousBalanceTotalAmount - newWithdrawAmount;
    balanceTotalElement.innerText = AfterWithdrawCurrentBalanceTotal;

  })

document.getElementById ('btn-log-out').addEventListener('click', function(){

    window.location.href = 'index.html';
})