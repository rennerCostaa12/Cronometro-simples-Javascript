// SELECIONANDO ELEMENTOS
const timer = document.getElementById('timer')
const start = document.getElementById('start')
const pause = document.getElementById('pause')
const reset = document.getElementById('reset')

let cron
let minutes = 0
let seconds = 0 

// INICIA O CRONÔMETRO
function startTime(){

    cron = setInterval(() => {
        if(seconds != 60){
            seconds++
            timer.innerText = `${minutes}:${seconds}`
        }if(seconds == 60){
            minutes++
            timer.innerText = `${minutes}:${seconds}`
        }if(seconds == 60){
            seconds = 0
        }if(minutes < 10){
            timer.innerText = `0${minutes}:${seconds}`
        }if(seconds < 10){
            timer.innerText = `0${minutes}:0${seconds}`
        }
        
    }, 1000);
}

//PAUSA O CRONÔMETRO
function pauseTime(){
    clearInterval(cron)
}

// RESETA O CRONÔMETRO
function resetTime(){
    clearInterval(cron)
    minutes = 0
    seconds = 0
    timer.innerText = `0${minutes}:0${seconds}`
}

// APLICA OS EVENTOS NOS BOTÕES DINAMICAMENTE
reset.addEventListener('click', resetTime)
pause.addEventListener('click', pauseTime)
start.addEventListener('click', startTime)