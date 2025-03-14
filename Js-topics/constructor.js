

function Car(name,model,year,color){
    this.name = name,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){
        console.log(`You drive a ${this.model}`)
    }
}

const car1 = new Car('M3','BMW',2005,'Blue')
const car2 = new Car('R8','AUDI',2007,'Black')

console.log(car1.name)
console.log(car1.model)
console.log(car1.year)
console.log(car1.color)
console.log()
console.log(car2.name)
console.log(car2.model)
console.log(car2.year)
console.log(car2.color)

car1.drive()