//how to accept input user

//Easy way
// let user;

// user = window.prompt("what is your name")

// console.log(user)





//proffetional way


// let username;

// document.getElementById('btn').onclick = function (){
//     username = document.getElementById('input').value
//     document.getElementById('myH1').textContent = `Helo ${username}`
// }





// counter

// const dec = document.getElementById("dec")
// const inc = document.getElementById("inc")
// const reset = document.getElementById("reset")
// const Ptag = document.getElementById("con")
// let count = 0 



// inc.onclick = () =>{
//     count++
//     Ptag.textContent = count
// }
// dec.onclick = () =>{
//     count--
//     Ptag.textContent = count
// }
// reset.onclick = () =>{
//     count=0
//     Ptag.textContent = count
// }



// Random no genarator

// max = 6
// min = 1
// const btn = document.getElementById('btn')
// const label = document.getElementById('label')
// let randomNum ;

// btn.onclick = () =>{
//     randomNum = Math.floor(Math.random() * max) + min;
//     label.textContent = randomNum
// }


//cheachbox

// const checkBtn = document.getElementById('myCheckbox')
// const rupay = document.getElementById('rupay')
// const master = document.getElementById('master')
// const visa = document.getElementById('visa')
// const subResults = document.getElementById('subResult')
// const payResult = document.getElementById('payResult')
// const submit = document.getElementById('submit')


// submit.onclick = ()=>{
//     if(checkBtn.checked){
//         subResults.textContent = `You are subscribed`
//     }else{
//         subResults.textContent = `You are not subscribed`
//     }

//     if(rupay.checked){
//         payResult.textContent = `You seleted Rupay`
//     }else if(master.checked){
//         payResult.textContent = `You seleted Master`
//     }else if(visa.checked){
//         payResult.textContent = `You seleted Visa`
//     }
// }


// let user = ""

// while(user === ""  || user === null){
//     user = window.prompt('Enter the name')
// }
// console.log(user)
