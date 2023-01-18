const form = document.querySelector('#form-imc')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputWeight = document.querySelector('#weight')
    const inputHeight = document.querySelector('#height')

    const weight = Number(inputWeight.value)
    const height = Number(inputHeight.value)

    if (!weight) {
        setResult('Peso inválido', false)
        return
    }

    if (!height) {
        setResult('Altura inválida', false)
        return
    }

    const imc = calculateImc(weight, height)
    const indexImc = getIndexImc(imc)

    const messageIndexImc = `Seu IMC é ${imc} (${indexImc})`

    setResult(messageIndexImc, true)
})

const createResultContainer = (className) => {
    const resultContainer = document.createElement('div')
    return resultContainer
}

const calculateImc = (weight, height) => {
    const imc = weight / height ** 2
    return imc.toFixed(2)
}

const getIndexImc = (imc) => {
    const indexImc = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3'
    ]

    if (imc >= 39.9) {
        return indexImc[5]
    }

    if (imc >= 34.9) {
        return indexImc[4]
    }

    if (imc >= 29.9) {
        return indexImc[3]
    }

    if (imc >= 24.9) {
        return indexImc[2]
    }

    if (imc >= 18.5) {
        return indexImc[1]
    }

    if (imc < 18.5) {
        return indexImc[0]
    }
}

const setResult = (message, isValid) => {
    const result = document.getElementById('result')
    result.innerHTML = ''

    const newResultContainer = createResultContainer()

    if (isValid) {
        result.classList.add('result-valid')
        result.classList.remove('result-invalid')
    } else {
        result.classList.add('result-invalid')
        result.classList.remove('result-valid')
    }

    newResultContainer.innerHTML = message
    result.appendChild(newResultContainer)
}