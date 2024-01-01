const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]


function colorChangingFunction () {
    let hexColor = '#'
    for (let i = 0; i < 6; i ++){
        hexColor += hex[getRandomNumber()]
    }

    let backgroundBox = document.querySelector('.color-box')
    backgroundBox.innerText = `Background Color : ${hexColor}`

    let MainContainer = document.querySelector('.main-container')
    MainContainer.style.background = `${hexColor}`

}

function getRandomNumber () {
    return Math.floor(Math.random() * hex.length)
}