import React from 'react'
import TodoHeader from './TodoHeader'
import TodoMain from './TodoMain'
import TodoInput from './TodoInput'

import './scss/TodoTemplate.scss';

const TodoTemplate = () => {

  //서버에 할일 목록(json)을 요청(fetch)해서 받아와야함.
  const todos = [
    {
      id:1,
      title: '풀업',
      done: false
    },
    {
      id:2,
      title: '스미스로우',
      done: true
    },
    {
      id:3,
      title: '데드리프트',
      done: false
    },
    {
      id:4,
      title: '렛풀다운',
      done: false
    }
  ]

  return (
    <div className='TodoTemplate'>
        <TodoHeader/>
        <TodoMain todoList={todos}/>
        <TodoInput/>
    </div>
  )
}

export default TodoTemplate