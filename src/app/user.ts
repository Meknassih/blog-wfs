export class User {
    private username: string;
    private password: string;
    private email: string;

    constructor(username?: string, password?: string, email?: string) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    getUsername(): string { return this.username; }
    getPassword(): string { return this.password; }
    getEmail(): string { return this.email; }
}
