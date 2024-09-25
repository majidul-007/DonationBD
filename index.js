

function calculate(price, money,parent) {
    const number = /\d/;
    const string = /[a-zA-Z]/;
    if (number.test(money) && string.test(money)) {
        alert('this is not money')
    }
    else if (number.test(money)) {
        const temp=parseInt(price.innerText);
        price.innerText=parseInt(money)+temp;
        const myAccount=document.querySelector('#total-Account');
        myAccount.innerText=myAccount.innerText-money;
        console.log(parent)
    }
    else if (string.test(money)) {
        alert('this is not money')
    }

}




document.querySelector('#donet-btn').addEventListener('click', function (event) {
    
    const donetion = document.querySelector('#price ')
    const inputField = document.querySelector('#card_text ').value;
    console.log(inputField)
    const parent=event.target.parentElement.parentElement
    calculate(donetion, inputField,parent)
    
})
document.querySelector('#donet-btnF').addEventListener('click', function (event) {
    
    const donetion = document.querySelector('#priceTwo ')
    const inputField = document.querySelector('#card_textFeni ').value;
    console.log(inputField)
    const parent=event.target.parentElement.parentElement
    calculate(donetion, inputField,parent)
    
})
document.querySelector('#donet-btnQ').addEventListener('click', function (event) {
    
    const donetion = document.querySelector('#priceThree ')
    const inputField = document.querySelector('#card_textQuota ').value;
    console.log(inputField)
    const parent=event.target.parentElement.parentElement
    calculate(donetion, inputField,parent)
    
})