let refe;
let url;

function refrerLogs() {
    url = new URL(window.location.href);
    refe = url.searchParams.get("referer");
    if (refe === null) {
        refe = "HoneyPie";
    }
    console.log(refe);
}

function report() {
    fetch('https://honey-pie.devch-4522.workers.dev', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refe }),
    })
        .then((response) => {
            if (response.ok) {
                console.log('Referer Data was sent successfully ' + refe);
            } else {
                console.error(`Server error: ${response.status}`);
            }
        })
        .catch((error) => {
            console.error('Error sending data:', error);
        });
}

refrerLogs()
report()