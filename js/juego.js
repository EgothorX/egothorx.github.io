let deck = []
const tipos = ['C', 'D', 'H', 'S']
const especiales = ['A', 'J', 'Q', 'K']

let puntosJugador = 0
let puntosComputadora = 0

const btnNuevo = document.querySelector('#btnNuevo')
const btnDetener = document.querySelector('#btnDetener')
const btnPedir = document.querySelector('#btnPedir')
const puntosHTML = document.querySelectorAll('small')
const divCartasJugador = document.querySelector('#jugador-cartas')
const divCartasComputadora = document.querySelector('#computadora-cartas')

const crearDeck = () => {
    
    for( let i = 2; i<= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo)
        }
    }
    
    for (let tipo of tipos) {
        for ( let esp of especiales ) {
            deck.push( esp + tipo)
        }
    }
    
    deck = _.shuffle( deck )
    
    
    return deck    
}


crearDeck()

const pedirCarta = () => {
    
    if (deck.length === 0) {
        alert("No quedan cartas")
        throw 'No quedan cartas'
        
    }
    
    const carta = deck.pop()
    

    return carta
}

const valorCarta = ( carta ) => {
    
    const valor = carta.substring(0, carta.length -1)
    return ( isNaN( valor )) ?
                ( valor === 'A') ? 11 : 10
                : valor * 1
}


const turnoComputadora = ( puntosMinimos ) => {
  do {
    const carta = pedirCarta()
    
    puntosComputadora = puntosComputadora + valorCarta( carta )
    puntosHTML[1].innerText = puntosComputadora
    
    const imgCarta = document.createElement('img')
    imgCarta.src = `assets/cartas/${carta}.png`
    imgCarta.classList.add('carta')
    divCartasComputadora.append(imgCarta)
    
    if (puntosMinimos > 21) {
        break;
    }
    
  
} while ( (puntosComputadora <= puntosMinimos) && (puntosMinimos <= 21) ) 

    setTimeout(() => {

        if (puntosComputadora > 21) {
            
            alert("Ganaste crack")
            
        } else if ( puntosComputadora === puntosMinimos ) {
            alert("Empate, ni pa ti ni pa mi")
            
        } else if ( puntosMinimos > 21) {
            alert("Cagaste :(")
        } else if ( puntosComputadora < 21 && puntosComputadora > puntosMinimos) {
            alert("Cagaste :(")
        }
}, 600)
}



btnPedir.addEventListener('click', () => {
    
    const carta = pedirCarta()
    puntosJugador = puntosJugador + valorCarta ( carta )
    puntosHTML[0].innerText = puntosJugador
    
    const imgCarta = document.createElement('img')
    imgCarta.src = `assets/cartas/${ carta }.png`
    imgCarta.classList.add('carta')
    divCartasJugador.append( imgCarta )
    
    if (puntosJugador > 21) {
        btnPedir.disabled = true
        btnDetener.disabled = true
        turnoComputadora( puntosJugador )
    } else if ( puntosJugador === 21) {
        alert('21, pinta bonito')
        btnPedir.disabled = true
        btnDetener.disabled = true
        turnoComputadora( puntosJugador )
    }
})

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true
    btnDetener.disabled = true
    turnoComputadora( puntosJugador)
})

btnNuevo.addEventListener('click', () => {
    
    console.clear()
    deck = []
    deck = crearDeck()
    
    puntosJugador = 0
    puntosComputadora = 0
    
    puntosHTML[0].innerText = 0
    puntosHTML[1].innerText = 0
    
    divCartasComputadora.innerHTML = ''
    divCartasJugador.innerHTML = ''
    
    btnPedir.disabled = false
    btnDetener.disabled = false
})



