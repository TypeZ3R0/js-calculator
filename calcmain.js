window.onload = function() {
    
    const charBtns = document.querySelectorAll('.char-btns');
    const clearOutput = document.querySelector('#clear-output');
    const charDisplay = document.querySelector('#characters');
    const result = document.querySelector('#equal');
    const resultDisplay = document.querySelector('#result');

    let eqDisplay = [];

    // Clear output button function
    clearOutput.addEventListener('click', () => {
        eqDisplay = [];
        charDisplay.innerHTML = '';
        resultDisplay.innerHTML = '';
    })

    // Number key function
    charBtns.forEach((charBtn) => {
        charBtn.addEventListener('click', () => {
            eqDisplay.push(charBtn.value);
            charDisplay.innerHTML = eqDisplay.join('');
        })
    })

    // Calculate result
    result.addEventListener('click', () => {
        let array = eqDisplay.join('')
        let stringResult = array.toString();
        let finalResult = eval(stringResult);
        console.log(finalResult)
        resultDisplay.innerHTML = finalResult;
    })

};
