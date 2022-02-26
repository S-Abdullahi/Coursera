document.querySelector('#chicken').addEventListener('click', chicken)
document.querySelector('#shawarma').addEventListener('click', shawarma)
document.querySelector('#berbecue').addEventListener('click', berbecue)



function chicken(){
    document.querySelector('body').style.backgroundColor = 'lightcyan'
    document.querySelector('.outerDiv:nth-child(1)').style.background = 'url(chik.jfif)'
}

function shawarma(){
    document.querySelector('body').style.backgroundColor = 'lightpink'
    document.querySelector('.outerDiv:nth-child(2)').style.backgroundImage = 'url(shawarma.jfif)'
}

function berbecue(){
    document.querySelector('body').style.backgroundColor = "lightsalmon"
    document.querySelector('.outerDiv:nth-child(3)').style.backgroundImage = 'url(barb.jfif)'
}