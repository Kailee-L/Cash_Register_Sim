let price= 19.5;
let input;
let total=0;
let cid =[["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

function makeCash(){
  const returns = document.getElementById("change-due");
  const inputs = document.getElementById("cash");
  const totalp = document.getElementById("totalis");
  totalp.innerHTML= "Your total is: $"+price;
  
  if (inputs.value < price){
    alert("Customer does not have enough money to purchase the item");
  }
  else if (inputs.value == price){
  returns.innerHTML= "No change due - customer paid with exact cash";
  
  }
  else{
    returns.innerHTML= cash(inputs.value);
  }
}
function cash(input2){
  let values = [
  ["PENNY", 1,0],
  ["NICKEL", 5,0],
  ["DIME", 10,0],
  ["QUARTER", 25,0],
  ["ONE", 100,0],
  ["FIVE", 500,0],
  ["TEN", 1000,0],
  ["TWENTY", 2000,0],
  ["ONE HUNDRED", 10000,0]];
  let result="";
  let register="";
  for (let i=0; i< cid.length;++i){
     register+=cid[i][1];
  }
 input= (input2*100) - (price*100);
  for (let i= cid.length-1; i>=0; --i){
    while (input >= values[i][1] && input >=0){
      if (cid[i][1] > 0.00){
        input-=values[i][1];
        values[i][2]++;
        cid[i][1]-=values[i][1]/100;
      }
      else{
        continue;
      }    
    }
  }

total=0;
for (let i=values.length-1; i>=0;--i){
     if (values[i][2]!=0){
       result +=" "+ cid[i][0] + ': $'+ Math.round(values[i][2] * values[i][1])/100;
       total+= values[i][1]* values[i][2]/100;
     }
    
 }
 if (register == (input2-price)){
    return "Status: CLOSED"+ result; 
 }
  
if (total < (input2-price)) {
   return "Status: INSUFFICIENT_FUNDS";
  
}

  return "Status: OPEN"+ result;
    
}