
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');

let crTkn;

let configData = {
    "home_logo": "",
    "away_logo": "",
    "timer_property": "",
    "home": "",
    "away": "",
    "home_color": "",
    "away_color": "",
    "home_text_color": "",
    "away_text_color": "",
    "score_text_color": "",
    "score_background_color": "",
    "timer_text_color": "",
    "timer_background_color": "",
}

function updateConfig(newData) {
    configData = { ...configData, ...newData };
}

if (token) {

    fetch(`/api/tokenverify?token=${token}`)
        .then(response => response.json())
        .then(data => {
            updateConfig({ home_logo: data.home_logo })
            updateConfig({ away_logo: data.away_logo })
            updateConfig({ timer_property: data.timer_property })
            updateConfig({ home: data.home })
            updateConfig({ away: data.away })
            updateConfig({ home_color: data.home_color })
            updateConfig({ away_color: data.away_color })
            updateConfig({ home_text_color: data.home_text_color })
            updateConfig({ away_text_color: data.away_text_color })
            updateConfig({ score_text_color: data.score_text_color })
            updateConfig({ score_background_color: data.score_background_color })
            updateConfig({ timer_text_color: data.timer_text_color })
            updateConfig({ timer_background_color: data.timer_background_color })
        })
        .catch(error => console.error('Error:', error));

} else {

    fetch('http://127.0.0.1:3000/api/session', { method: 'GET' })
        .then(response => response.json())
        .then(data => { crTkn = data.token })

    console.log(crTkn)
}



let homeName = document.getElementById('hName');
let awayName = document.getElementById('aName');
let leftS = document.getElementById('lColor');
let rightS = document.getElementById('rColor');
let clockk = document.getElementById('ttimer');
let ext = document.getElementById('extr');


let startBtn = document.getElementById('start_btn');
let stopBtn = document.getElementById('stop_btn');
let resetBtn = document.getElementById('reset_btn');


let puranatime;
let secc;
let minn;
let userH;
let userA;
let userL;
let userR;
let isRunning = false;
let hTOver = false;
let temp = false;


let sec = 0;
let min = 0;
let jst = null;


async function checker() {
    if (!temp) {
        puranatime = await Date.now() / (1000 * 60);
    }

    temp = await true;

    while (!hTOver) {

        await new Promise(r => setTimeout(r, 30000));

        if (Math.round((Date.now() / (1000 * 60)) - puranatime) >= 17) {

            console.log('started');
            ext.style.visibility = 'hidden';

            if (!isRunning) {
                jst = setInterval(tStart, 1000);
            }

            isRunning = true;
            hTOver = true;

        }
    }
}


async function tStart() {
    if (isRunning) {
        sec++
        if (sec >= 60) {
            sec = 0;
            min++;
        }
        if (sec < 10 && min < 10) {
            clockk.textContent = await '0' + min + ':' + '0' + sec;
        }
        if (min < 10 && sec > 9) {
            clockk.textContent = await '0' + min + ':' + sec;
        }
        if (min > 9 && sec < 10) {
            clockk.textContent = await min + ':' + '0' + sec;
        }
        if (sec > 9 && min > 9) {
            clockk.textContent = await min + ':' + sec;
        }
        if (min == 45 && sec == 0) {
            ext.style.visibility = await 'visible';
            isRunning = await false;
            let tt = await clearInterval(jst)
            checker();
        }
        if (min == 90 && sec == 0) {
            ext.textContent = '+8';
            ext.style.visibility = await 'visible';
            isRunning = await false;
            let tt = await clearInterval(jst)
        }
    }
    if (min > 99) {
        clockk.style.left = '150px';
    }
}


document.getElementById('Submit_btn').onclick = function () {
    userH = document.getElementById('home_name').value;
    userA = document.getElementById('away_name').value;
    userL = document.getElementById('leftC').value;
    userR = document.getElementById('rightC').value;
    minn = document.getElementById('Minute').value;
    secc = document.getElementById('Seconds').value;
    datte = document.getElementById('pDate').value;

    leftS.style.backgroundColor = userL;
    rightS.style.backgroundColor = userR;

    if (secc != '') {
        secc = Number(secc);
        sec = secc;
    }
    if (minn != '') {
        minn = Number(minn);
        min = minn;
    }
    if (sec < 10 && min < 10) {
        clockk.textContent = '0' + min + ':' + '0' + sec;
    }
    if (min < 10 && sec > 9) {
        clockk.textContent = '0' + min + ':' + sec;
    }
    if (min > 9 && sec < 10) {
        clockk.textContent = min + ':' + '0' + sec;
    }
    if (sec > 9 && min > 9) {
        clockk.textContent = min + ':' + sec;
    } if (min > 99) {
        clockk.style.left = '150px';
    }

    homeName.textContent = userH.toUpperCase();
    awayName.textContent = userA.toUpperCase();
}


startBtn.onclick = function () {
    if (!isRunning) {
        jst = setInterval(tStart, 1000);
    }
    isRunning = true;
}


resetBtn.onclick = function () {
    clearInterval(jst)
    ext.style.visibility = 'hidden'
    min = 0;
    sec = 0;
    clockk.textContent = '00:00';
    if (isRunning) {
        jst = setInterval(tStart, 1000);
    }
}


stopBtn.onclick = function stopTimerr() {
    isRunning = false;
    clearInterval(jst)
}