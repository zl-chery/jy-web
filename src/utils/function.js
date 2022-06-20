export function getCookie(cookie_name) {
    var allcookies = document.cookie;
    //索引长度，开始索引的位置
    var cookie_pos = allcookies.indexOf(cookie_name);

    // 如果找到了索引，就代表cookie存在,否则不存在
    if (cookie_pos != -1) {
        // 把cookie_pos放在值的开始，只要给值加1即可
        //计算取cookie值得开始索引，加的1为“=”
        cookie_pos = cookie_pos + cookie_name.length + 1;
        //计算取cookie值得结束索引
        var cookie_end = allcookies.indexOf("; ", cookie_pos);
        if (cookie_end == -1) {
            cookie_end = allcookies.length;
        }
        //得到想要的cookie的值
        var value = decodeURI(allcookies.substring(cookie_pos, cookie_end));
    }
    return value;
}



export function createCookie(name, value, days, path, domain, secure) {

    if (days) {

        var date = new Date();

        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

        var expires = date.toGMTString();

    }

    // eslint-disable-next-line no-redeclare
    else var expires = "";

    let cookieString = name + "=" + value;

    if (expires) cookieString += ";expires=" + expires;

    if (path) cookieString += ";path=" + path;

    if (domain) cookieString += ";domain=" + domain;

    if (secure) cookieString += ";secure=" + secure;

    document.cookie = cookieString;

}

export function clearCookie(name) {
    createCookie(name, "", -1);
}