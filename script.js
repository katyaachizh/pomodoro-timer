let timer = document.querySelector('#pomodoro-time');
let button = document.querySelector('#start');
let timerId;

function makepPromodo() {
    const textTimer = timer.textContent;
    let minute = +textTimer.slice(0,2);
    let seconds = +textTimer.slice(-2);

    if (minute === 0 && seconds === 0) {
        clearIntevrval(timerId);
    };

    if (seconds === 0) {
        minute --;
        seconds = 59;
    } else {
        seconds --;
    };

    if (seconds < 10) {
        timer.textContent = `${minute}:${0}${seconds}`;
    } else {
        timer.textContent = `${minute}:${seconds}`;
    }
};

button.addEventListener("click", function() {
    if (button.textContent === 'stop') {
        button.textContent = 'start';
        clearInterval(timerId);
    } else {
        button.textContent = 'stop';
        timerId = setInterval(makepPromodo, 100);
    };
})


const activePomodoro = document.querySelector('#pomodoro');
const breakBtn = document.querySelector('#break');
const reset = document.querySelector('#reset');


//Не понимаю, что не так(((
breakBtn.addEventListener("click", function() {
    const breakId = setInterval(() => {
        const breakTimer = timer.textContent = "05:00";
        
        let minute = +breakTimer.slice(0,2);
        let seconds = +breakTimer.slice(-2);
    
        if (minute === 0 && seconds === 0) {
            clearIntevrval(breakId);
        };
    
        if (seconds === 0) {
            minute --;
            seconds = 59;
        } else {
            seconds --;
        };
    
        if (seconds < 10) {
            timer.textContent = `$${minute}:${0}${seconds}`;
        } else {
            timer.textContent = `${minute}:${seconds}`;
        }
    }, 1000)
})


activePomodoro.addEventListener("click", function() {
    timer.textContent = "25:00";
})






























