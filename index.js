document.getElementById('pinGenerator').addEventListener('click', function(){
    const RandomPin = takePin();
    const displayPin = document.getElementById('pinDisplay');
    displayPin.value = RandomPin;
}); 

function takePin(){
    const pin = pinGenerator();
    const pinVarify = pin + '';
    if(pinVarify.length === 4){
        return pin;
    }
    else{
        return takePin();
    }
}

function pinGenerator(){
    const random = parseInt(Math.random()*10000);
    return random;
}



document.getElementById('typeingNumber').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumber = document.getElementById('dispalyTypeNumber');
    const showNumber = typedNumber.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumber.value = '';
        }
        else if (number === '<'){
            const digits = showNumber.split('');
            digits.pop();
            const digit = digits.join('');
            typedNumber.value = digit;
        }
    }
    else{
        const newTypedNumber = showNumber + number;
        typedNumber.value = newTypedNumber;
    }
})

document.getElementById('verifyPin').addEventListener('click', function(){
    const pinDisplay = document.getElementById('pinDisplay');
    const currectPin = pinDisplay.value;

    const number = document.getElementById('dispalyTypeNumber');
    const typed = number.value;

    const correct = document.getElementById('correctPin');
    const worng = document.getElementById('WorngPin');

    if(typed === currectPin){
        correct.style.display = 'block';
        worng.style.display = 'none';
    }
    else{
        worng.style.display = 'block';
        correct.style.display = 'none';
    }

    // clear everything
    const clearInput = document.getElementById('dispalyTypeNumber');
    clearInput.value = '';
    const clearDisplay = document.getElementById('pinDisplay');
    clearDisplay.value = '';

})