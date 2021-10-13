const todoForm = document.querySelector('#todo_form');
const todoList = document.querySelector('#todo-list');
const todoInput = document.querySelector('#todo_form input');

let todos = [];   /* 빈 array 로 변수를 선언해줬기 때문에 로컬 스토리지에 계속 덮어씌게 된다. 
해결 방법: let 으로 선언으로 바꿔주고, if 문의 savedTodos 부분을 고쳐보자.
*/

const TODOS_KEY = "todos";    // 실수 방지를 위해 변수로 선언


function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    
}


function deleteTodo(event) {
    /*
    console.log(event);  <--- path 주목(button의 부모는 li 확인)
    console.dir(event.target)  <--- 이것도 정보가 충분하지 않지만, parentNode 주목 = li
    console.dir(event.target.parentNode); <-- 드디어 li 가 출력된다. 이제 구분이 가능하다.
    */
    const li = event.target.parentNode;
    /* console.log(li.id);    <---- li의 id 를 얻어온다 */
    li.remove();

    todos = todos.filter((todo) => todo.id !== parseInt(li.id) );
    /* 질문이 있습니다. 
     * li.id = newtodoObj.id로 painttoDo함수안에서 선언했는데, 
     * newtodoOb.id는 date.now()니까 int형인데 
     * li.id는 string이 되는 이유가 궁금합니다. 
     * document안의 element라서 그런건가요? --> 네 
     * */


    /* 중괄호를 사용하게 되면 
     * toDos안에서 element 하나를 delete할 시 전부 delete가 됩니다. 
     * 이유가 무엇인가요? 
     * (중괄호를 제거하면 정상적으로 동작합니다.) 
     * 
     * 답변: arrow function에서 중괄호를 사용하여 작성했을때는 
     * return true/false 를 해줘야합니다.
     * arrow function의 구조에 대해 찾아보시는게 좋을듯 해요.
     * */

    saveTodos();
}


function paintTodo(newTodoObj) {
    const li = document.createElement('li');
    li.id = newTodoObj.id;     //    <---li의 id 를 생성
    const span = document.createElement('span');
    const button = document.createElement('button');
    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);  // <li><span></span><button></button></li>
    span.innerText = newTodoObj.text;
    button.innerText = '❌';
    button.addEventListener('click', deleteTodo);
}


function onSubmitTodoForm(event) {
    event.preventDefault();
    const newList = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        id: Date.now(),
        text: newList,
    }
    todos.push(newTodoObj);   // todos 에다가 newList 를 넣기
    saveTodos();    // 현재 todos 를 저장
    paintTodo(newTodoObj);
}

todoForm.addEventListener('submit', onSubmitTodoForm);



const savedTodos = localStorage.getItem(TODOS_KEY);   // stringify --> 아직까진 문자열이 저장되어 있다.

if (savedTodos !== null) {
    /* 
      1. 문자열을 배열로 바꿔준다.
      2. 배열을 다시 투두리스트 형태로 화면에 출력해줘야 하지 않을까? 
    */

    const arraySavedTodos = JSON.parse(savedTodos);
    arraySavedTodos.forEach(element => paintTodo(element));
    /* 위의 코드는 parsedToDos.forEach(paintToDo); 이렇게 쓸 수도 있다 */

    todos = arraySavedTodos;  // 새로고침할때 덮어씌우는 것 방지하는 방법
    
    
}