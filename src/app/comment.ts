export class Comment {
    private author: string;
    private content: string;
    private creationDate: Date;

    constructor(author: string, content: string) {
        this.author = author;
        this.content = content;
        this.creationDate = new Date();
    }

    public getAuthor() { return this.author; }
    public getContent() { return this.content; }
    public getCreationDate() { return this.creationDate; }
}
