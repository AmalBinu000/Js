//desturturing 

const arr = ['manu','ramu','raju','rony']


function display([first,last]){
    
    console.log(first,last)
}

display(arr)


//spred 

const arr2=[2,3,4,5]
const str = "arun"

const maximum = Math.max(arr)
const maximum2 = Math.max(...arr)
const spred = [...str]


console.log(maximum)
console.log(maximum2)
console.log(spred)

//object shorthand method

const name = 'arun'
const age = 19

const person1 = {
    name:name,
    age:age
}

console.log(person1)

const person2 = {
    name,
    age
}

console.log(person2)

//Default parameter

function add(a=20,b=30){
    console.log(a+b)
}

add(10,20)
add()


const nums2 = [1,2,3,4,5]
//filter
const even = nums2.filter((ele)=> ele%2===0)

//map
const double = nums2.map((ele)=> Math.pow(ele,2))


//forEach
const cube = nums.forEach((ele)=>console.log(Math.pow(ele,3)))

//reduce
const sum = nums.reduce((acc,ele)=>acc+ele)

console.log(even)
console.log(double)
console.log(sum)


const nums1 = [3,1,2,4,5]

//find and findIndex

const num = nums1.find(findthree);
const Index = nums1.findIndex(findIndex)

function findthree(ele){
     return ele === 3;
}

function findIndex(ele){
     return ele === 3;
}

console.log(num)
console.log(Index)


//some

const findEven = nums1.some((ele)=> ele%2==0)

console.log(findEven)

//closure

function createCounter(){
    let count = 0
    function increment(){
        count++
        console.log(count)
    }
    return {increment}
}
const counter = createCounter()

counter.increment()