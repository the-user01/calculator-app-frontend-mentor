const digitSection = document.querySelectorAll('button')
const digitInput = document.getElementById('digit-input');

digitSection.addEventListener('click', event =>{
    const targetValue = event.target.innerHTML;

    if(isNaN(targetValue)){
        if(targetValue == 'DEL')
        {
            digitInput.value = digitInput.value.slice(0,-1);
        }

        if(targetValue == 'RESET')
        {
            digitInput.value = ' ';
        }
        
        if(targetValue == '+')
        {
            let inp_val = digitInput.value + targetValue;
            console.log(inp_val);
        }


    }
    else{
        digitInput.value = digitInput.value + targetValue;
    }

})