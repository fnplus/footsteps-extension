class Parser {
    parse() {
        var a = {
          title: this.getTitle(),
          content: this.getLink()
        };
        return a;
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
