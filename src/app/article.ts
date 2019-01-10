import { Comment } from './comment';
import { ArticleStatus } from './article-status.enum';

export class Article {
    private author: string;
    private title: string;
    private content: string;
    private creationDate: Date;
    private updateDate: Date;
    private comments: Array<Comment>;
    private status: ArticleStatus;
    private id: string;

    constructor(author: string, title: string, content: string, id: string, comments?: Array<Comment>) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.content = content;
        this.comments = comments ? comments : [];
        this.creationDate = new Date();
        this.updateDate = new Date();
        this.status = ArticleStatus.EDITING;
    }

    public getId(): string { return this.id; }
    public getAuthor(): string { return this.author; }
    public getTitle(): string { return this.title; }
    public getContent(): string { return this.content; }
    public getCreationDate(): Date { return this.creationDate; }
    public getUpdateDate(): Date { return this.updateDate; }
    public getComments(): Array<Comment> { return this.comments; }
    public getStatus(): ArticleStatus { return this.status; }
    public addComment(comment: Comment) {
        this.comments.push(comment);
        return this;
    }
}
