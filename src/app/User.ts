export class User {
    constructor(
        private username: string, 
        private password: string,
        private first_name: string = "",
        private last_name: string = ""
        ) {}
}