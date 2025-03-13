// getElementById()

const H1 = document.getElementById('myH1')

H1.style.backgroundColor = 'yellow'

//getElementsByClassName() -  returns an array so if we need to change a particualr one then we have to specify the element position , if we need to change every thing at the same time then we need to use a loop .forEach does not work here 

const Fruits = document.getElementsByClassName('fruits')

Fruits[0].style.backgroundColor = 'red'
Fruits[1].style.backgroundColor = 'green'
Fruits[2].style.backgroundColor = 'blue'



for(let fruit of Fruits){
    fruit.style.color = 'white' 
}

//getElementByTagName() - returns an array so if we need to change a particualr one then we have to specify the element position , if we need to change every thing at the same time then we need to use a loop .forEach does not work here 

const tags = document.getElementsByTagName('li')

tags[0].style.backgroundColor = 'yellow'
tags[2].style.backgroundColor = 'green'


for(let tag of tags){
    tag.style.color = 'red' 
}

//querySelector() -  it selects the first one which has the classname or the first tag . if nothing in the same parameter it will return a null 

//querySelectorAll() - it selects everything with the same class or tag . it has a build in forEach 

