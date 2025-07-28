const buttonCPF = document.getElementById('showCPF')
const display = document.getElementById('display')

buttonCPF.addEventListener('click', () => {
    let CPF = document.getElementById('inputCPF').value
    let finalValues = [requestAcumulator(CPF, 10, 2), requestAcumulator(CPF, 11, 1)]
    let finalDigits = CPF.replace(/\D+/g, "").split("").map(Number).slice(-2);
    finalDigits.join("")

    showDisplay(verifyNumbers(finalValues, finalDigits), CPF)
})

function requestAcumulator(CPF, max, removeArray) {
    let arrayCPF = Array.from(CPF.replace(/\D+/g, "").split("").map(Number))
    arrayCPF.splice(-removeArray)
    let reducedCPF = arrayCPF.reduce((acumulator, currentValue, index) => {
        console.log({ acc: acumulator, currentValue: currentValue, index: index })
        acumulator += currentValue * (max - index)    
        return acumulator
    }, 0 )
    return reducedCPF
}

function verifyNumbers(values, finalDigits) {
    let finalValues = []
    for (let i in values) {
        let calc = 11 - (values[i] % 11)
            if (calc > 9) {
                calc = 0
            }
        finalValues.push(calc)
    }
    console.log([finalDigits, finalValues])
    return finalValues[0] === finalDigits[0] && finalValues[1] === finalDigits[1];
}

function showDisplay(booleanCPF, CPF) {
    if (booleanCPF == true) {
        display.innerHTML = `${CPF} e realmente um cpf`
    } else {
        display.innerHTML = `${CPF} nao e um cpf`
    }
}