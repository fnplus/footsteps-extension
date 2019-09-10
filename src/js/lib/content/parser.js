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
}

class GoogleParser extends Parser {
    getTopic() { return document.title.split(" - ")[0] } 
    getLink () { return document.URL }
}

export function NewParser() {
    
}
