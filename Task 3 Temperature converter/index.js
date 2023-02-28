let celciusInput = document.querySelector('#Celcius>input')
let fahrenheitInput = document.querySelector('#Fahrenheit>input')
let kelvinInput = document.querySelector('#Kelvin>input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100/100)
}
function changeColor(cTemp){
    if(cTemp>=37)
    {
        document.body.style.backgroundColor = "red"
    }
    if(cTemp<37 && cTemp>=17)
    {
        document.body.style.backgroundColor = "#FFBA01"
    }
    if(cTemp<17 && cTemp>=4)
    {
        document.body.style.backgroundColor = "#FFFFC2"
    }
    if(cTemp<4)
    {
        document.body.style.backgroundColor ="#128FCB" 
    }
}
celciusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15

    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)

    changeColor(cTemp)
    
})

fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp-32) * (5/9)
    let kTemp = (fTemp-32) * (5/9) +273.15

   celciusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)

    changeColor(cTemp)
})

kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let fTemp = (kTemp-273.15) * (9/5) + 32 
    let cTemp = kTemp - 273.15

    fahrenheitInput.value = roundNumber(fTemp)
    celciusInput.value = roundNumber(cTemp)

    changeColor(cTemp)
})

btn.addEventListener('click', ()=>{
    celciusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
    document.body.style.backgroundColor = "white"
    console.log("Working")
})