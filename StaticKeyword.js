
class User{
    
    static userCount = 0;
    
    constructor(username){
        this.username = username
        User.userCount++
    }
    
    display(username){
        console.log(username)
    }
    
    static hello(username){
        console.log(`hello ${username}`)
    }
    
    
}

console.log(User.userCount)
const user1 = new User('arun')

user1.display()
User.hello('Arun')