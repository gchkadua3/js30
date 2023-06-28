const form = document.querySelector('.myForm');

form.addEventListener('submit', e => {

    e.preventDefault();

    const cardNameInput = document.getElementById('cardNameHolder');
    const cardNumInput =  document.getElementById('cardNumberHolder');
    const cvcInput = document.getElementById('cvc')

    const cardNameValue = form.cardNameHolder.value;
    const cardNumValue = form.cardNumberHolder.value;
    const cvcValue = form.cvc.value;

    const patternForName = /^[A-Za-z\s'-]{1,50}$/;
    const patternForNum = /^\d{1,16}$/;
    const patternForCvc = /^\d{3}$/;

    if(patternForName.test(cardNameValue)) {
        cardNameInput.style.borderBottomColor = 'gray';
    } else {
        cardNameInput.style.borderBottom = '1px solid red';
    }

    if(patternForNum.test(cardNumValue)) {
        cardNumInput.style.borderBottomColor = 'gray'
    } else {
        cardNumInput.style.borderBottomColor = 'red'
    }

    if(patternForCvc.test(cvcValue)) {
        cvcInput.style.borderBottomColor = 'gray'
    } else {
        cvcInput.style.borderBottomColor = 'red'
    }
})