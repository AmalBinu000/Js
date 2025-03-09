


const todoList = [{name:'make tea',date:'2022-06-08'} ,{name:'wash dish',date:'2022-06-09'}]

function renderTodo(){

    let todoListHTML='';

    for(let i=0;i<todoList.length;i++){
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const date = todoObject.date;
        const {name,date} = todoObject;
        const html = `
        <p>${name} ${date}
            <button onclick="todoList.splice(${i},1); renderTodo();">
                Delete
            </button>
        </p>`
        todoListHTML += html;
    }


    document.querySelector('.js-todo').innerHTML = todoListHTML;
    
}

function addTodo(){
    const inputList = document.querySelector('.js-input')
    const name = inputList.value
   
    const dateInput = document.querySelector('.js-date')
    const date = dateInput.value
    
    todoList.push({
        // name:name,date:date
        name,date
    })

    console.log(todoList)
    
    inputList.value = ''; // to make the input empty after adding 

    renderTodo()
}

