const textoTiempo = document.querySelector('.tiempo')


const segundo = 1000
const minuto = segundo * 60
const hora = minuto * 60
const dia = hora * 24

const aniversario = new Date('1 May 2022')


const countDown = () => {
    const hoy = new Date()
    const tiempoRestante = aniversario - hoy
    
    
    
    const dias = Math.floor(tiempoRestante / dia)
    const horas = Math.floor((tiempoRestante % dia) / hora)
    const minutos = Math.floor((tiempoRestante % hora) / minuto)
    const segundos = Math.floor((tiempoRestante % minuto) / segundo)
    
    
    textoTiempo.innerHTML = dias + ' días ' + horas + ' horas ' + minutos + ' minutos ' + segundos + ' segundos'
    
    
}

setInterval(countDown, segundo)
