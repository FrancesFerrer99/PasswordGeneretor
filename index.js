const letters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
const numbers = '1234567890'
const symbols = ['"', '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '-', '=', '{', '}', '[', ']', '|', ':', ';', "'", '<', '>', ',', '.', '/', '?', '', '',]
const PSW_LENGHT = 15
let N_SYMBOLS = generateNumber(PSW_LENGHT/2) +1
let N_NUMBERS = generateNumber(PSW_LENGHT/2) +1

let password1El = document.getElementsByClassName("password")[0]
let password2El = document.getElementsByClassName("password")[1]


function generatePsw(){
    let psw1 = ''
    let psw2 = ''
    let i = 0

    let hasNumbers = document.getElementById('hasNumbers').checked
    let hasSymbols = document.getElementById('hasSymbol').checked

    if(hasNumbers){
        console.log("came here", N_NUMBERS)
        for(let k = 0; k < N_NUMBERS; k++, i++){
            psw1 += numbers[generateNumber(numbers.length)]
            psw2 += numbers[generateNumber(numbers.length)]
        }
    }
    if(hasSymbols){
        console.log("came here", N_SYMBOLS)
        for(k= 0; k < N_SYMBOLS; k++, i++){
            psw1 += symbols[generateNumber(symbols.length)]
            psw2 += symbols[generateNumber(symbols.length)]
        }
    }
    for(; i < PSW_LENGHT; i++){
        psw1 += letters[generateNumber(letters.length)]
        psw2 += letters[generateNumber(letters.length)]
    }
    password1El.textContent= shuffle(psw1)
    password2El.textContent= shuffle(psw2)
}

function shuffle(password){
    let tempPassword = [...password]
    let temp
    let newPosition
    console.log(tempPassword)
    for(let i=0; i<tempPassword.length; i++){
        newPosition = generateNumber (tempPassword.length)
        temp = tempPassword[newPosition]
        tempPassword[newPosition] = tempPassword[i]
        tempPassword[i] = temp
    }
    return tempPassword.join('')
}

function generateNumber(maxRange){
    return Math.floor(Math.random()*maxRange)
}

function copy(){
    let notice = document.getElementById('notice')
    navigator.clipboard.writeText(event.target.textContent)
    notice.style.color = 'white'

    setTimeout(() => {
        notice.style.color = '#1F2937'
    }, 2000);
}