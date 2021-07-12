const rotateBetweenWords = (value) => {
    const wheelInner = document.querySelectorAll('.wheel__word')
    
    let deg = -60
    
    for (let item of wheelInner) {
        item.style.transform = `rotate(${ deg }deg)`
        deg += value
    }
}

const rotateBetweenLetters = (value) => {
    const wheelContent = document.querySelectorAll('.wheel__letter')
    
    let deg = 0
    
    for (let item of wheelContent) {
        item.style.transform = `rotate(${ deg }deg)`
        deg += value
    }
    
}

rotateBetweenWords(50)
rotateBetweenLetters(12)
