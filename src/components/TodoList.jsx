import React from 'react';

import TodoItem from './TodoItem';

const TodoList = props => (
  <div className='itemsContainer'>
    <table className='items'>
      <tbody>
        {props.items.map((item, idx) => (
          <TodoItem
            key={idx}
            idx={idx}
            item={item}
            toggleTodo={props.toggleTodo}
            deleteTodo={props.deleteTodo}
          />
        ))}
      </tbody>
    </table>
  </div>
);

export default TodoList;
