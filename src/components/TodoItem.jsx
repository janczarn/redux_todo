import React from 'react';

const TodoItem = props => (
  <tr className={`item ${props.item.completed ? 'completed' : ''}`}>
    <td className='toggle'>
      <input
        type='checkbox'
        checked={props.item.completed}
        onChange={() => props.toggleTodo(props.idx)}
      />
    </td>
    <td className='text'>
      {props.item.text}
    </td>
    <td className='delete'>
      <button
        onClick={() => props.deleteTodo(props.idx)}
      >Delete</button>
    </td>
  </tr>
);

export default TodoItem;
