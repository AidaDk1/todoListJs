let container=document.createElement("div");
container.className="container";

document.body.appendChild(container);
let h1=document.createElement("h1");
h1=document.createTextNode("Todo List.  Hi,Aida");
container.appendChild(h1);

let mainBlock=document.createElement("div");
mainBlock.className="mainBlock";
container.appendChild(mainBlock);
let div =document.createElement('div');
mainBlock.appendChild(div);
let textIn=document.createElement('input');
textIn.className='textIn';
textIn.setAttribute('placeholder',"gonna do.....");
textIn.setAttribute('type',"text");
div.appendChild(textIn);

let date=document.createElement('input');
date.id="date";
date.setAttribute('type',"date");
div.appendChild(date);

let addBtn=document.createElement('button');
addBtn.id="addBtn";
addBtn.innerHTML='Add';
div.appendChild(addBtn);

let list=document.createElement('ul');
mainBlock.appendChild(list);

let todosArray = localStorage.getItem('todos') === null? [] : [...JSON.parse(localStorage.getItem('todos'))];


const addTodo = () => {
// text input value
let newTask = textIn.value;
// checking for empty string
if (newTask != '') {
todosArray.push({
    text: newTask,
    checked: false,
});

localStorage.setItem('todos', JSON.stringify(todosArray));
renderTodoItem();
// clear input
textIn.value = '';
}
};



const deleteTodo = (e) => {
e.currentTarget.parentNode.remove(e.parentNode);
};

const completeTodo = (e) => {
let isDone = e.currentTarget.parentNode.classList.contains('done');

if(isDone){
e.currentTarget.parentNode.classList.remove('done');
}
else{
e.currentTarget.parentNode.classList.add('done');
}
};


addBtn.addEventListener('click', addTodo);



const renderTodoItem = () => {
list.innerHTML = '';
todosArray.map((todo) => {
let li = document.createElement('li');
li.className = 'taskItem';

// done btn
let doneBtn = document.createElement('img');
doneBtn.src = './done.png';
doneBtn.className = 'btn';
doneBtn.addEventListener('click', completeTodo);

// delete btn
let deleteBtn = document.createElement('img');
deleteBtn.src = './delete.png';
deleteBtn.className = 'btn';
deleteBtn.addEventListener('click', deleteTodo);

let dateTime=date.value;
dateTime.className='dateI';

li.append(todo.text);
li.append(doneBtn);
li.append(dateTime);
li.append(deleteBtn);
list.prepend(li);
});
};
renderTodoItem();



