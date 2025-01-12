function setCookie(name, value, days) {
    d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "expires=" + d.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}


function getCookie(name) {
    nameEq = name + "=";
    cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(nameEq) == 0) {
            return c.substring(nameEq.length, c.length);
        }
    }
    return "";
}

function deleteCookie(name) {
    setCookie(name, "", -1);
}