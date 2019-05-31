class Parser {
    parse() {
        return {
            title: getTitle(),
            content: getContent()
        }
    }

    getTitle() {

    }

    getContent() {

    }
}

class SOFParser extends Parser {
    getTitle() {
        return "title"
    }

    getContent() {
        return "content"
    }
}

exports.SOFParser = SOFParser