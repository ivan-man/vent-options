function FindProxyForURL(url, host) {
    let domains = [
      "google.com"
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
