
class Person{
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    
    display(){
        console.log(`Your name is ${this.name}`)
        console.log(`Your age is ${this.age}`)
    }
}

const person1 = new Person('Kiran',23)
const persin2 = new Person('Alan',24)

person1.display()
person2.display()