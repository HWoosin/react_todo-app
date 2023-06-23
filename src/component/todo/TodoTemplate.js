import React, { useEffect, useState } from 'react'
import TodoHeader from './TodoHeader'
import TodoMain from './TodoMain'
import TodoInput from './TodoInput'

import './scss/TodoTemplate.scss';

import { API_BASE_URL as BASE, TODO } from '../../config/host-config';

const TodoTemplate = () => {

  //서버에 할일 목록(json)을 요청(fetch)해서 받아와야함.
  const API_BASE_URL = BASE + TODO;

  //todos 배열을 상태 관리
  const [todos, setTodos] = useState([
    // {
    //   id:1,
    //   title: '풀업',
    //   done: false
    // },
    // {
    //   id:2,
    //   title: '스미스로우',
    //   done: true
    // },
    // {
    //   id:3,
    //   title: '데드리프트',
    //   done: false
    // },
    // {
    //   id:4,
    //   title: '렛풀다운',
    //   done: false
    // }
  ]);

  //id값 시퀀스 생성 함수
  // const makeNewId = () => {
  //   if(todos.length === 0) return 1;
  //   return todos[todos.length-1].id+1;
  // }

  //todoInput에게 todoText를 받아오는 함수
  //자식컴포넌트가 부모컴포넌트에게 데이터를 전달할 때는
  //props 사용이 불가능.
  //부모 컴포넌트에서 함수를 선언(매개변수 꼭 선언!) -> props로 함수를 전달
  //자식 컴포넌트에서 전달받은 함수를 호출하면서 매개값으로 데이터를 전달.
  const addTodo = todoText => {
    // console.log('할 일 정보: ', todoText);
    const newTodo={
      // id: makeNewId(),
      // title: todoText,
      // done: false
      title : todoText
    };
    // todos.push(newTodo); (x) ->useState
    //리액트의 상태변수는 무조건 setter를 통해서만
    //상태값을 변경해야 렌더링에 적용된다.
    //다만,상태변수가 불변성(immutable)을 가지기 때문에
    //기존 상태에서 변경은 불가능하고,
    //새로운 상태를 만들어서 변경해야한다.
    // const copyTodos = todos.slice();
    // copyTodos.push(newTodo);
    // setTodos(todos.concat([newTodo]));

    fetch(API_BASE_URL, {
      method : 'POST',
      headers : {'content-type' : 'application/json'},
      body: JSON.stringify(newTodo)
    })
    .then(res => res.json())
    .then(json =>{
      setTodos(json.todos);
    })

    // setTodos([...todos, newTodo]);
  }
  
  //할 일 삭제 처리 함수
  const removeTodo = id => {
    // console.log(`삭제 대상 id:${id}`);
    // let idx;
    // for(let i = 0; i<todos.length; i++){
    //   if(id === todos[i].id){
    //     idx=i;
    //     break;
    //   }
    // }
    // const copyTodos = [...todos];
    // copyTodos.splice(idx, 1);

    // setTodos(copyTodos);

    //주어진 배열의 값들을 순회하여 조건에 맞는 요소들만 모아서
    //새로운 배열로 리턴해 주는 함수.


    fetch(`${API_BASE_URL}/${id}`,{
      method : 'DELETE'
    })
    .then(res => res.json())
    .then(json=>{
      setTodos(json.todos)
    })

    // setTodos(todos.filter(todo => todo.id !== id));
  }

  //할 일 체크 처리 함수
  const checkTodo = (id, done) =>{
    // console.log(`체크 대상 id:${id}`);
    // const copyTodos = [...todos];
    // for(let cTodo of copyTodos){
    //   if(cTodo.id === id){
    //     cTodo.done = !cTodo.done;
    //   }
    // }
    const check ={
      'done' : !done,
      'id' : id
    }
    

    // setTodos(copyTodos);
    fetch(API_BASE_URL,{
      method : 'PUT',
      headers : {'content-type' : 'application/json'},
      body: JSON.stringify(check)
    })
    .then(res => res.json())
    .then(json=>{
      setTodos(json.todos)
    });
    
    // setTodos(todos.map(todo => todo.id === id ? {...todo, 'done':!todo.done} : todo));

  }

  //체크가 안 된 할일의 갯수 카운트 하기
  const countRestTodo = () =>{
    return todos.filter(todo => !todo.done).length;
  }

  useEffect(()=>{
    //페이지가 렌더링 됨과 동시에 할 일 목록을 요청해서 뿌려 주겠다.
    fetch(API_BASE_URL)
    .then(res => res.json())
    .then(json => {
      console.log(json.todos);
      setTodos(json.todos);
    })
  },[]);

  return (
    <div className='TodoTemplate'>
        <TodoHeader count = {countRestTodo}/>
        <TodoMain todoList={todos} remove = {removeTodo} check={checkTodo}/>
        <TodoInput addTodo={addTodo}/>
    </div>
  )
}

export default TodoTemplate