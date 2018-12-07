export class Comment {
    private author: string;
    private content: string;
    private creationDate: Date;

    public getAuthor() { return this.author; }
    public getContent() { return this.content; }
    public getCreationDate() { return this.creationDate; }
}
