const todo =[{
                    name:'make dinner', 
                    dueDate :'2022-3-2'},
          {
                    name :'wish dishes',
                    dueDate:'2022-5-2'
          }

];
renderToDo();
function renderToDo (){
          let todoisHTML ='';

          
          for (let i =0 ;i<todo.length ; i++){ 
                    const todoobject = todo[i];
                    const {name , dueDate } = todoobject; 
                    const html = `<p>${name} ${dueDate}</p>
                     <button class="delete_btn" onclick=
                     "todo.splice(${i}, 1);
                      renderToDo();">
                      Delete</button>`;
                    todoisHTML+=html;
          }
          document.querySelector('.todo_output').innerHTML = todoisHTML;
}
function addToDo (){
          const name =document.querySelector('.todo_input').value;
          const dateInput = document.querySelector('.date_input');
          const dueDate = dateInput.value;
          todo.push({name , 
                    dueDate
          });
          console.log(todo); 
          
          renderToDo(); 
          document.querySelector('.todo_input').value = "";
}

