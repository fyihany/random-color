const square = document.querySelector(".square");

const randomColorChange = () => {
    let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);

    return `#${randomColor}`

}

const backgrooundColorChange = () => {
    square.style.backgroundColor = randomColorChange()
    setTimeout(backgrooundColorChange, 500)
}

backgrooundColorChange()




