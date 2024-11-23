function FindProxyForURL(url, host) {
    let domains = [
        "twitch.tv", 
        "2gis.ru", 
        "sbermarket.ru", 
        "ytimg.com", 
        "ttvnw.net", 
        "jtvnw.net", 
        "betterttv.net", 
        "frankerfacez.com", 
        "hh.ru", 
        "yandex.ru",
        "google.com", 
        "telegram.org", 
        "gosuslugi.ru",
        "binance.com",
        "habr.com",
        "ozon.ru",
        "hip-hosting.com",
        "nalog.ru",
        "gcorelabs.com",
        "gcore.com",
        "mail.ru",
        "firefox.com",
        "pgadmin.org",
        "postgresql.org",
        "vk.com",
        "store.steampowered.com",
        "alibaba.com",
        "alicdn.com",
        "cloudfront.net",
        "github.com",
        "twitchcdn.net",
        "live-video.net",
        "vkuser.net",
        "gstatic.com",
        "microsoft.com",
        "proglib.io",
        "booking.com",
        "boosty.to",
        "mycdn.me",
        "githubassets.com",
        "userapi.com",
        "vkuseraudio.net",
        "googleapis.com",
        "streamlabs.com",
        "jackbox.fun",
        "reddit.com",
        "aliexpress.com",
        "avito.st",
        "aestatic.net",
        "pki.goog",
        "yandex.net",
        "escapefromtarkov.com",
        "ru-mi.com",
        "hshp.host",
        "yaplakal.com",
        "hcaptcha.com",
        "bdimg.com",
        "globalsign.com",
        "pb06e2-resources.com",
        "drweb.com",
        "yastatic.net",
        "80.249.129.32",
        "googlevideo.com",
        "youtube.com",
        "msecnd.net",
        "github.io",
        "doubleclick.net",
        "atlassian.net",
        "figma.com",
        "hostvds.com",
        "githubusercontent.com",
        "mistral.ai",
        "googleadservices.com",
        "ggpht.com",
        "googleusercontent.com",
        "boosty.to"
    ];

    if (host.endsWith(".ru") ||
        host.endsWith(".рф") ||
        domains.some(domain => dnsDomainIs(host, domain)) || // Использование dnsDomainIs в PAC-файле
        host.includes("xn--"))
    {
        return "DIRECT";
    } else {
        return "SOCKS5 127.0.0.1:1080";
    }
}
