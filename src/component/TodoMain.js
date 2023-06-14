import React from 'react'
import TodoItem from './TodoItem'
import './scss/TodoMain.scss';

const TodoMain = ({todoList, remove}) => {

  // const rednerTodoList =() =>{
  //   const todoItems = [];
  //   for(const todo of todoList){
  //     todoItems.push(<TodoItem/>);
  //   }
  //   return todoItems;
  // }

  

  // console.log(props.todoList);
  return (
    <ul className='todo-list'>
        {/* 
        {
          renderTodoList
        } */
          todoList.map(todo => <TodoItem key={todo.id} item={todo} remove={remove}/>)
        }
    </ul>
  )
}

export default TodoMain