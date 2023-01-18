const data = new Date()

const inputDate = document.getElementById('date')
const inputHours = document.getElementById('hours')

const formattedFullDate = (dataDay) => {
    const weekDay = dataDay.getDay()
    const numberDay = dataDay.getDate()
    const month = dataDay.getMonth()
    const year = dataDay.getFullYear()

    return `${getWeekNameDay(weekDay)}, ${numberDay} de ${getNameMonth(month)} de ${year}`
}

const getWeekNameDay = (day) => {
    arrWeekDay = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']

    return arrWeekDay[day]
}

const getNameMonth = (month) => {
    arrNameMonth = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

    return arrNameMonth[month]
}

const formattedHours = () => {
    const dataHours = new Date()
    const hours = dataHours.getHours()
    const minutes = dataHours.getMinutes()
    const seconds = dataHours.getSeconds()

    return `${includeZero(hours)}:${includeZero(minutes)}:${includeZero(seconds)}`
}

const includeZero = (num) => {
    return num >= 10 ? num : `0${num}`
}

setInterval(() => {
    inputHours.innerHTML = formattedHours()
}, 1000)

inputDate.innerHTML = formattedFullDate(data)