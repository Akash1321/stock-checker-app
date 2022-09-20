const initialPrice = document.querySelector("#initial-price");
const currentPrice = document.querySelector("#current-price");
const quantity = document.querySelector("#stock-quantity");
const checkButton = document.querySelector("#check-button");
const displayOutput = document.querySelector("#output-box");

function calculateProfitOrLoss(initial, current, quantity){

    if (current > initial){
        var profit = (current - initial)* quantity;
        var profitPercentage = (profit/initial) * 100;

        showMessage(`Your profit is ${profit.toFixed(2)} and your Profit Percentage is ${profitPercentage.toFixed(2)} %`);
        displayOutput.style.color = "#1ECF9A";
    }

    else if (initial > current){
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss/initial) * 100;

        showMessage(`Your loss is ${loss.toFixed(2)} and your Loss Percentage is ${lossPercentage.toFixed(2)} %`);
        displayOutput.style.color = "#C43D4E";
    }

    else{
        showMessage("No Profit No Loss");
        displayOutput.style.color = "#FF6D3F";
    }

}

function showMessage(message){
    displayOutput.innerText = message;
    
}


function checkButtonHandler(){
    var initial = Number(initialPrice.value);
    var current = Number(currentPrice.value);
    var qnty = Number(quantity.value);

    if(initial != "" && currentPrice != "" && qnty != ""){
        if(initial > 0 && current > 0 && qnty > 0){
            calculateProfitOrLoss(initial, current, qnty);
        } else {

            showMessage("The values should be greater than 0");
            displayOutput.style.color = "#C43D4E"

        }
        
    }else{
        showMessage("You must fill all the fields"); 
        displayOutput.style.color = "#C43D4E"
    }

}

checkButton.addEventListener("click", checkButtonHandler);