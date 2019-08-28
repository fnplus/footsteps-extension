class Parser {
    parse() {
        return {
            topic: this.getTopic(),
            content: this.getContent(),
            link: this.getLink(),
        }
    }
    getTopic() {}
    getContent() {}
    getLink() {}
}

class SOFParser extends Parser {
    getTopic() {
        return "sof-title"
    }

    getContent() {
        return "sof-content"
    }
}

class GoogleParser extends Parser {
    getTopic() {
        return "google-title"
    }

    getContent() {
        return "google-content"
    }
}

exports.SOFParser = SOFParser
exports.GoogleParser = GoogleParser