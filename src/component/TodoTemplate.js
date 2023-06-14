import React from 'react'
import TodoHeader from './TodoHeader'
import TodoMain from './TodoMain'
import TodoInput from './TodoInput'

import './scss/TodoTemplate.scss';

const TodoTemplate = () => {

  //서버에 할일 목록(json)을 요청(fetch)해서 받아와야함.

  return (
    <div className='TodoTemplate'>
        <TodoHeader/>
        <TodoMain/>
        <TodoInput/>
    </div>
  )
}

export default TodoTemplate