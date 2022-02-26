document.querySelector('#chicken').addEventListener('click', chicken)
document.querySelector('#shawarma').addEventListener('click', shawarma)
document.querySelector('#berbecue').addEventListener('click', berbecue)



function chicken(){
    document.querySelector('body').style.backgroundColor = 'red'
}

function shawarma(){
    document.querySelector('body').style.backgroundColor = 'green'
}

function berbecue(){
    document.querySelector('body').style.backgroundColor = "lightsalmon"
}