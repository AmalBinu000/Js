const todoList=[]

function addTodo(){

    const todoList = ['make tea','wash dish']

    for(let i=0;i<todoList.length;i++){
        const todo = todoList[i];
        const html = `<p>${todo}</p>`
    }

    const inputList = document.querySelector('.js-input')

    const name = inputList.value
   
    
    todoList.push(name)
    console.log(todoList)
    
    inputList.value = ''; // to make the input empty after adding 

}

