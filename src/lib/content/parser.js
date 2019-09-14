class Parser {
    parse() {
        return {
            title: this.getTitle(),
            content: this.getLink()
        }
    }
    getTitle() {}
    getLink() {}
}

class GenericParser extends Parser {
    getTitle() {
        return document.title;
    }
    getLink() {
        return document.location.href;
    }
}

exports.NewParser = () => new GenericParser();