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
    toJson(selectedAttributes?: UserAttributes): any {
        let userToJson: any;
        if (!selectedAttributes)
            for (const i in this) {
                if (this.hasOwnProperty(i))
                    userToJson[i] = this[i];
            }
        else
            for (const i in selectedAttributes) {
                if (selectedAttributes.hasOwnProperty(i) && selectedAttributes[i])
                    userToJson[i] = this[i];
            }

        return userToJson;
    }
}

export interface UserAttributes {
    username?: boolean;
    password?: boolean;
    email?: boolean;
}
