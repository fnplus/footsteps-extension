exports.getSiteName = () => {
    switch(window.location.hostname) {
        case "www.google.com": return "google";
        case "www.google.co.in": return "google";
        case "stackoverflow.com": return "stackoverflow";
        default: return null;
    }
}
