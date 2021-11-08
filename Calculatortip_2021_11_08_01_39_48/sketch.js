let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
  let billAmount = document.getElementById('bill_amount').value;
  let TipPercentage = document.getElementById('tip_percentage').value;
  
  let tipamount = document.getElementById('tip_amount').value =billAmount/TipPercentage ;
  document.getElementById('total_bill').value = parseFloat(billAmount) + parseFloat(TipPercentage);
  
  
});