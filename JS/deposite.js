// step-1 for deposite
document.getElementById('btn-deposite').addEventListener('click', function () {

  // console.log('btn click');
  // Step-2
  const depositeAmount = document.getElementById('deposit-field');
  const newDpAmountString = depositeAmount.value;
  // console.log(dpAmount);
  const newDpAmount = parseFloat(newDpAmountString);

  //  step-3
  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText;
  // console.log(depositTotal);
  // step-4
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  const currentDepositeTotal = previousDepositTotal + newDpAmount;
  depositTotalElement.innerText = currentDepositeTotal;

  // step-5
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalElementString = balanceTotalElement.innerText;
  const previousBalanceTotalAmount = parseFloat(previousBalanceTotalElementString);

  //step-6
  const currentBalanceTotal = previousBalanceTotalAmount + newDpAmount;
  balanceTotalElement.innerText = currentBalanceTotal;
  // step-7
  depositeAmount.value = '';
})

