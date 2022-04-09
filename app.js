const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const aniversario = new Date("1 May 2022")


function countdown() {
    const fechaAniversario = new Date(aniversario)
    const currentDate = new Date()
    
    const totalSeconds = (fechaAniversario - currentDate) / 1000
    
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor (totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60
    
    daysEl.innerHTML = days
    hoursEl.innerHTML = hours
    minsEl.innerHTML = minutes
    secondsEl.innerHTML = seconds
    
}

countdown()
setInterval(countdown, 1000)
