
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
    "clock_start_time": "",
    "minute": "",
    "second": ""
}

function updateConfig(newData) {
    configData = { ...configData, ...newData };
    console.log(configData)
}

function converttime(tiptop) {

    let tip = tiptop / 1000
    let tip_min = Math.floor(tip / 60);
    let tip_sec = Math.floor(tip % 60);

    console.log(tip_min, tip_sec, tiptop)
    min = tip_min
    sec = tip_sec
}


let start = document.getElementById('sBtn')
let coppy = document.getElementById('cBtn')
let reset = document.getElementById('rBtn')
let stopp = document.getElementById('spBtn')
let exx = document.getElementById('exxt')
let clockk = document.getElementById('timerDisplay')
let cdiv = document.getElementById('adiv')

let fClera = null
let isRunning = false
let sec = 0;
let min = 0;
let temp = false
let hTOver = false;
let aT = true


function minsetter() {
    min = document.getElementById('timMin').value
    updateConfig({ minute: document.getElementById('timMin').value });
    min = Number(min)

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
    }
}

function secsetter() {
    sec = document.getElementById('timSec').value
    updateConfig({ second: document.getElementById('timSec').value });
    sec = Number(sec);


    if (sec > 59) {
        document.getElementById('timSec').value = null
        sec = 0
        min++
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
    }
}

function hsetter() {
    let HHH = document.getElementById('hhN')
    HHH.textContent = document.getElementById('hName').value.toUpperCase()
    updateConfig({ home: document.getElementById('hName').value.toUpperCase() });
}

function asetter() {
    let AAA = document.getElementById('aaN')
    AAA.textContent = document.getElementById('aName').value.toUpperCase()
    updateConfig({ away: document.getElementById('aName').value.toUpperCase() });
}

function hCSetter() {
    let clrdivH = document.getElementById('hhN')
    let imgbackD = document.getElementById('imgBackH')
    clrdivH.style.backgroundColor = document.getElementById('hColor').value
    imgbackD.style.backgroundColor = document.getElementById('hColor').value
    updateConfig({ home_color: document.getElementById('hColor').value });
}

function aCSetter() {
    let clrdivA = document.getElementById('aaN')
    let imgbackC = document.getElementById('imgBackA')
    clrdivA.style.backgroundColor = document.getElementById('aColor').value
    imgbackC.style.backgroundColor = document.getElementById('aColor').value
    updateConfig({ away_color: document.getElementById('aColor').value });
}

function hTCSetter() {
    let HHHC = document.getElementById('hhN')
    HHHC.style.color = document.getElementById('hTColor').value
    updateConfig({ home_text_color: document.getElementById('hTColor').value });
}

function aTCSetter() {
    let AAAC = document.getElementById('aaN')
    AAAC.style.color = document.getElementById('aTColor').value
    updateConfig({ away_text_color: document.getElementById('aTColor').value });
}

function hLSetter() {
    document.getElementById('hImage').src = document.getElementById('hLogo').value
    updateConfig({ home_logo: document.getElementById('hLogo').value });
}

function aLSetter() {
    document.getElementById('aImage').src = document.getElementById('aLogo').value
    updateConfig({ away_logo: document.getElementById('aLogo').value });
}

function sTSetter() {
    let sT = document.getElementById('scS')
    sT.style.color = document.getElementById('sTColor').value
    updateConfig({ score_text_color: document.getElementById('sTColor').value });
}

function sBSetter() {
    let sB = document.getElementById('scS')
    sB.style.backgroundColor = document.getElementById('sBColor').value
    updateConfig({ score_background_color: document.getElementById('sBColor').value });
}

function tTSetter() {
    let tT = document.getElementById('timerDisplay')
    tT.style.color = document.getElementById('tTColor').value
    updateConfig({ timer_text_color: document.getElementById('tTColor').value });
}

function tBSetter() {
    let tB = document.getElementById('timerDisplay')
    tB.style.backgroundColor = document.getElementById('tBColor').value
    updateConfig({ timer_background_color: document.getElementById('aTColor').value });
}

function autooS() {
    if (aT) {
        aT = false
        cdiv.style.backgroundColor = 'grey'
        cdiv.style.justifyContent = 'left'
    }
    else {
        aT = true
        cdiv.style.backgroundColor = 'rgb(56, 232, 255)'
        cdiv.style.justifyContent = 'right'
    }

}


coppy.onclick = function generateShareableLink() {
    const configString = encodeURIComponent(JSON.stringify(configData));
    const shareableLink = `${window.location.origin}${window.location.pathname}?config=${configString}`;

    navigator.clipboard.writeText(shareableLink)
        .then(() => {
            console.log("copied")
        })
        .catch(err => {
            console.error("Failed to copy link:", err);
        });
}

document.getElementById('timMin').addEventListener("input", minsetter)
document.getElementById('timSec').addEventListener("input", secsetter)
document.getElementById('hName').addEventListener("input", hsetter)
document.getElementById('aName').addEventListener("input", asetter)
document.getElementById('hColor').addEventListener("input", hCSetter)
document.getElementById('aColor').addEventListener("input", aCSetter)
document.getElementById('hTColor').addEventListener("input", hTCSetter)
document.getElementById('aTColor').addEventListener("input", aTCSetter)
document.getElementById('sTColor').addEventListener("input", sTSetter)
document.getElementById('sBColor').addEventListener("input", sBSetter)
document.getElementById('tTColor').addEventListener("input", tTSetter)
document.getElementById('tBColor').addEventListener("input", tBSetter)
document.getElementById('hLogo').addEventListener("input", hLSetter)
document.getElementById('aLogo').addEventListener("input", aLSetter)
document.getElementById('autoSwitcher').addEventListener("click", autooS)

async function checker() {
    if (!temp) {
        puranatime = Date.now() / (1000 * 60);
    }

    temp = true;

    while (!hTOver) {

        await new Promise(r => setTimeout(r, 30000));

        if (Math.round((Date.now() / (1000 * 60)) - puranatime) >= 19) {

            exx.style.visibility = 'hidden';

            if (!isRunning) {
                fClera = setInterval(ttemer, 1000);
            }

            isRunning = true;
            hTOver = true;

        }
    }
}

function ttemer() {
    if (isRunning) {

        sec++

        if (sec >= 60) {
            sec = 0;
            min++;
        }

        document.getElementById('timSec').value = sec
        document.getElementById('timMin').value = min

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
        }
        if (min == 45 && sec == 0 && aT) {
            exx.style.visibility = 'visible';
            isRunning = false;
            let tt = clearInterval(fClera)
            checker();
        }
        if (min == 90 && sec == 0 && aT) {
            exx.textContent = '+8';
            exx.style.visibility = 'visible';
            isRunning = false;
            let tt = clearInterval(fClera)
        }
    }

}


function presetter() {

    if (configData.home) {
        let HHH = document.getElementById('hhN');
        HHH.textContent = configData.home.toUpperCase();
    }

    if (configData.away) {
        let AAA = document.getElementById('aaN');
        AAA.textContent = configData.away.toUpperCase();
    }

    if (configData.home_logo) {
        document.getElementById('hImage').src = configData.home_logo;
    }

    if (configData.away_logo) {
        document.getElementById('aImage').src = configData.away_logo;
    }

    if (configData.home_color) {
        let clrdivH = document.getElementById('hhN')
        let imgbackD = document.getElementById('imgBackH')
        clrdivH.style.backgroundColor = configData.home_color;
        imgbackD.style.backgroundColor = configData.home_color;
    }

    if (configData.away_color) {
        let clrdivA = document.getElementById('aaN')
        let imgbackC = document.getElementById('imgBackA')
        clrdivA.style.backgroundColor = configData.away_color;
        imgbackC.style.backgroundColor = configData.away_color;
    }

    if (configData.home_text_color) {
        let HHHC = document.getElementById('hhN')
        HHHC.style.color = conconfigData.home_text_color;
    }

    if (configData.away_text_color) {
        let AAAC = document.getElementById('aaN')
        AAAC.style.color = configData.away_text_color;
    }

    if (configData.timer_property == "start") {
        let spend_time = Date.now() - configData.clock_start_time
        converttime(spend_time)
        starttimer();
    }

    if (configData.timer_property == "stop") {
        stopTimerr()
    }

    if (configData.timer_property == "reset") {
        resetbutt()
    }

    if (configData.minute) {

        min = configData.minute
        min = Number(min)

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
        }
    }

    if (configData.second) {

        sec = configData.second
        sec = Number(sec);

        if (sec > 59) {
            document.getElementById('timSec').value = null
            sec = 0
            min++
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
        }
    }
}


start.onclick = function starttimer() {
    if (!isRunning) {
        fClera = setInterval(ttemer, 1000)
        updateConfig({ timer_property: "start" });
        updateConfig({ clock_start_time: Date.now() });
    }
    isRunning = true
}

function resetbutt() {

    clearInterval(fClera)
    exx.style.visibility = 'hidden'
    min = 0;
    sec = 0;
    clockk.textContent = '00:00';

    if (isRunning) {
        fClera = setInterval(ttemer, 1000);
    }

    document.getElementById('timSec').value = null
    document.getElementById('timMin').value = null
}

function stopTimerr() {
    isRunning = false;
    clearInterval(fClera)
}

function starttimer() {
    if (!isRunning) {
        fClera = setInterval(ttemer, 1000)
    }
    isRunning = true
}

rBtn.onclick = function () {
    clearInterval(fClera)
    exx.style.visibility = 'hidden'
    min = 0;
    sec = 0;
    clockk.textContent = '00:00';
    if (isRunning) {
        fClera = setInterval(ttemer, 1000);
    }

    document.getElementById('timSec').value = null
    document.getElementById('timMin').value = null
}

stopp.onclick = function stopTimerr() {

    isRunning = false;
    clearInterval(fClera)

    updateConfig({ timer_property: "stop" });

    presetter();
}

function loadConfigFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const configString = urlParams.get("config");
    if (configString) {
        configData = JSON.parse(decodeURIComponent(configString));
    }
}

loadConfigFromURL();


presetter();
