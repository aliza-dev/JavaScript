class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}aliza`
    }

    set password(value){
        this._password = value
    }
}

const aliza = new User("a@aliza.ai", "abc")
console.log(aliza.email);