export class Login {
    //id: number;
    login: string;
    password: string;
    passwordRpt: String;

    constructor() {}

   
    setLogin(login: string) {
        this.login = login;
    } 
    setPassword(password: string) {
        this.password = password;
    }
    setPasswordRpt(passwordRpt: string) {
        this.passwordRpt = passwordRpt;
    }
}