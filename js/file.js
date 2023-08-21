
//get input value
function getInputValue(fieldId){
    const inputField=document.getElementById(fieldId);
    const inputValueText=inputField.innerText;
    const value=parseFloat(inputValueText);
    return value;
}

//set result
function setElementInnerText(setId,areaa){
    
    const element=document.getElementById(setId);
    element.innerText=areaa;
    
    
    
}
//card 1
function firstCard(){
    const areaa=getInputValue('first');
    
setElementInnerText('first',areaa);
addToCalculationEntry('K. Accessories',areaa);
}

//set function for card total
function getElementValueById(elementId){
    const element2=document.getElementById(elementId);
    const elementValueString=element2.innerText;
    const value=parseFloat(elementValueString);
    
    return value;
}

function setElementValueById(elementId,newValue){
    const textElement=document.getElementById(elementId);
    textElement.innerText=newValue;


}


//function for 1sst card
document.getElementById('btn-first').addEventListener('click', function(){
const newDepositAmount =getInputValue('first');
const previousDepositTotal=getElementValueById('total_price');
const previousBalanceTotal=getElementValueById('balance-total');
const newDepositTotal=previousDepositTotal+newDepositAmount;

setElementValueById('total_price', newDepositTotal.toFixed(2));
const newBalanceTotal2=previousBalanceTotal+newDepositAmount;
setElementValueById('balance-total', newBalanceTotal2.toFixed(2));

if(newDepositTotal>0){
    const deleteButton2=document.getElementById('btn-purchase');
deleteButton2.removeAttribute('disabled');

}

if(newDepositTotal>200){
    const deleteButton=document.getElementById('btn-apply');
deleteButton.removeAttribute('disabled');

}

document.getElementById('btn-apply').addEventListener('click', function () {
    const couponCode = document.getElementById('confirm').value;

    if (couponCode === 'SELL200') {
        const discount = newDepositTotal * 0.20;
        const newBalanceTotal = newDepositTotal - discount;      
        setElementValueById('discount', discount.toFixed(2));
        setElementValueById('balance-total', newBalanceTotal.toFixed(2));
    }
});




})




//function for 2nd card
document.getElementById('btn-sec').addEventListener('click', function(){
    const newDepositAmount =getInputValue('sec');
    const previousDepositTotal=getElementValueById('total_price');
    
    const previousBalanceTotal=getElementValueById('balance-total');
    const newDepositTotal=previousDepositTotal+newDepositAmount;
    setElementValueById('total_price', newDepositTotal.toFixed(2));
const newBalanceTotal2=previousBalanceTotal+newDepositAmount;
setElementValueById('balance-total', newBalanceTotal2.toFixed(2));

if(newDepositTotal>0){
    const deleteButton2=document.getElementById('btn-purchase');
deleteButton2.removeAttribute('disabled');

}

if(newDepositTotal>200){
    const deleteButton=document.getElementById('btn-apply');
deleteButton.removeAttribute('disabled');

}

document.getElementById('btn-apply').addEventListener('click', function () {
    const couponCode = document.getElementById('confirm').value;

    if (couponCode === 'SELL200') {
        const discount = newDepositTotal * 0.20;
        const newBalanceTotal = newDepositTotal - discount;      
        setElementValueById('discount', discount.toFixed(2));
        setElementValueById('balance-total', newBalanceTotal.toFixed(2));
    }
});
})

  

    //function for 3rd card
document.getElementById('btn-third').addEventListener('click', function(){
    const newDepositAmount =getInputValue('third');
    const previousDepositTotal=getElementValueById('total_price');
    
    const previousBalanceTotal=getElementValueById('balance-total');
const newDepositTotal=previousDepositTotal+newDepositAmount;


setElementValueById('total_price', newDepositTotal.toFixed(2));
const newBalanceTotal2=previousBalanceTotal+newDepositAmount;
setElementValueById('balance-total', newBalanceTotal2.toFixed(2));

if(newDepositTotal>0){
    const deleteButton2=document.getElementById('btn-purchase');
deleteButton2.removeAttribute('disabled');

}

if(newDepositTotal>200){
    const deleteButton=document.getElementById('btn-apply');
deleteButton.removeAttribute('disabled');

}

document.getElementById('btn-apply').addEventListener('click', function () {
    const couponCode = document.getElementById('confirm').value;

    if (couponCode === 'SELL200') {
        const discount = newDepositTotal * 0.20;
        const newBalanceTotal = newDepositTotal - discount;      
        setElementValueById('discount', discount.toFixed(2));
        setElementValueById('balance-total', newBalanceTotal.toFixed(2));
    }
});
    })

    //function for 4th card
document.getElementById('btn-forth').addEventListener('click', function(){
    const newDepositAmount =getInputValue('forth');
    const previousDepositTotal=getElementValueById('total_price');
    
    const previousBalanceTotal=getElementValueById('balance-total');
    const newDepositTotal=previousDepositTotal+newDepositAmount;
  
    setElementValueById('total_price', newDepositTotal.toFixed(2));
const newBalanceTotal2=previousBalanceTotal+newDepositAmount;
setElementValueById('balance-total', newBalanceTotal2.toFixed(2));

if(newDepositTotal>0){
    const deleteButton2=document.getElementById('btn-purchase');
deleteButton2.removeAttribute('disabled');

}

if(newDepositTotal>200){
    const deleteButton=document.getElementById('btn-apply');
deleteButton.removeAttribute('disabled');

}

document.getElementById('btn-apply').addEventListener('click', function () {
    const couponCode = document.getElementById('confirm').value;

    if (couponCode === 'SELL200') {
        const discount = newDepositTotal * 0.20;
        const newBalanceTotal = newDepositTotal - discount;      
        setElementValueById('discount', discount.toFixed(2));
        setElementValueById('balance-total', newBalanceTotal.toFixed(2));
    }
});
    })

    //function for 5th card
document.getElementById('btn-fifth').addEventListener('click', function(){
    const newDepositAmount =getInputValue('fifth');
    const previousDepositTotal=getElementValueById('total_price');
    
    const previousBalanceTotal=getElementValueById('balance-total');
    const newDepositTotal=previousDepositTotal+newDepositAmount;
  
    setElementValueById('total_price', newDepositTotal.toFixed(2));
const newBalanceTotal2=previousBalanceTotal+newDepositAmount;
setElementValueById('balance-total', newBalanceTotal2.toFixed(2));

if(newDepositTotal>0){
    const deleteButton2=document.getElementById('btn-purchase');
deleteButton2.removeAttribute('disabled');

}

if(newDepositTotal>200){
    const deleteButton=document.getElementById('btn-apply');
deleteButton.removeAttribute('disabled');

}

document.getElementById('btn-apply').addEventListener('click', function () {
    const couponCode = document.getElementById('confirm').value;

    if (couponCode === 'SELL200') {
        const discount = newDepositTotal * 0.20;
        const newBalanceTotal = newDepositTotal - discount;      
        setElementValueById('discount', discount.toFixed(2));
        setElementValueById('balance-total', newBalanceTotal.toFixed(2));
    }
});
    })

    //function for 6th card
document.getElementById('btn-sixth').addEventListener('click', function(){
    const newDepositAmount =getInputValue('sixth');
    const previousDepositTotal=getElementValueById('total_price');
    
    const previousBalanceTotal=getElementValueById('balance-total');
    const newDepositTotal=previousDepositTotal+newDepositAmount;
  
    setElementValueById('total_price', newDepositTotal.toFixed(2));
const newBalanceTotal2=previousBalanceTotal+newDepositAmount;
setElementValueById('balance-total', newBalanceTotal2.toFixed(2));

if(newDepositTotal>0){
    const deleteButton2=document.getElementById('btn-purchase');
deleteButton2.removeAttribute('disabled');

}

if(newDepositTotal>200){
    const deleteButton=document.getElementById('btn-apply');
deleteButton.removeAttribute('disabled');

}

document.getElementById('btn-apply').addEventListener('click', function () {
    const couponCode = document.getElementById('confirm').value;

    if (couponCode === 'SELL200') {
        const discount = newDepositTotal * 0.20;
        const newBalanceTotal = newDepositTotal - discount;      
        setElementValueById('discount', discount.toFixed(2));
        setElementValueById('balance-total', newBalanceTotal.toFixed(2));
    }
});
    })

    function refresh(){
 
          

          document.getElementById("total_price").innerText = "";
            document.getElementById("discount").innerText = "";
            document.getElementById("balance-total").innerText = "";
            document.getElementById('calculation-entry').innerText="";
            document.getElementById('a').innerText="";
            document.getElementById('b').innerText="";
            document.getElementById('c').innerText="";
            document.getElementById('confirm').value="";
    

    }

//card 2
function secCard(){
    const areaa=getInputValue('sec');
setElementInnerText('sec',areaa);
addToCalculationEntry('K. Accessories',areaa);
}

//card 3
function thirdCard(){
    const areaa=getInputValue('third');
setElementInnerText('third',areaa);
addToCalculationEntry('Home Cooker',areaa);
}

//card 4
function forthCard(){
    const areaa=getInputValue('forth');
setElementInnerText('forth',areaa);
addToCalculationEntry('Sports Back Cap',areaa);
}

//card 5
function fifthCard(){
    const areaa=getInputValue('fifth');
setElementInnerText('fifth',areaa);
addToCalculationEntry('Full Jersey Set',areaa);
}

//card 6
function sixthCard(){
    const areaa=getInputValue('sixth');
setElementInnerText('sixth',areaa);
addToCalculationEntry('Sports cates',areaa);
}



//add calculation

function addToCalculationEntry(areaType){

    const calculationEntry=document.getElementById('calculation-entry');
    const count=calculationEntry.childElementCount;
    const p=document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} `;
    calculationEntry.appendChild(p);
    }