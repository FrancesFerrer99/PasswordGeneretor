const letters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
const numbers = '1234567890'
const symbols = ['"', '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '-', '=', '{', '}', '[', ']', '|', ':', ';', "'", '<', '>', ',', '.', '/', '?', '', '',]
const PSW_LENGHT = 15
let N_SYMBOLS = Math.floor(Math.random()*PSW_LENGHT/2+1)
let N_NUMBERS = Math.floor(Math.random()*PSW_LENGHT/2+1)

function generatePsw(){
    let psw1 = ''
    let psw2 = ''
    let i = 0

    if(document.getElementById('hasNumbers').checked){
        for(let k = 0; k < N_NUMBERS; k++, i++){
            psw1 += numbers[Math.floor(Math.random()*numbers.length)]
            psw2 += numbers[Math.floor(Math.random()*numbers.length)]
        }
    }
    if(document.getElementById('hasSymbol').checked){
        for(k= 0; k < N_SYMBOLS; k++, i++){
            psw1 += symbols[Math.floor(Math.random()*symbols.length)]
            psw2 += symbols[Math.floor(Math.random()*symbols.length)]
        }
    }
    for(; i < PSW_LENGHT; i++){
        psw1 += letters[Math.floor(Math.random()*letters.length)]
        psw2 += letters[Math.floor(Math.random()*letters.length)]
    }
    document.getElementsByClassName("password")[0].textContent= shuffle(psw1)
    document.getElementsByClassName("password")[1].textContent= shuffle(psw2)
}

function shuffle(password){
    let tempPassword = [...password]
    let temp
    let newPosition
    console.log(tempPassword)
    for(let i=0; i<tempPassword.length; i++){
        newPosition = Math.floor(Math.random()*tempPassword.length)
        temp = tempPassword[newPosition]
        tempPassword[newPosition] = tempPassword[i]
        tempPassword[i] = temp
        console.log(temp, newPosition, tempPassword[i])
    }
    return tempPassword.join('')
}