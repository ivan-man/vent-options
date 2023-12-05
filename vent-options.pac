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
        "googlevideo.com",
        "hh.ru", 
        "yandex.ru",
        "google.com", 
        "telegram.org", 
        "youtube.com",
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
        "docker.com",
        "cloudfront.ne",
        "github.com",
        "7tv.io",
        "7tv.app",
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
        "sla.streamlabs.com"
    ];

    if (domains.some(domain => dnsDomainIs(host, domain) || host.endsWith(".ru") || host.endsWith(".рф"))) {
        return "DIRECT";
    } else {
        return "SOCKS5 127.0.0.1:1080";
    }
}
