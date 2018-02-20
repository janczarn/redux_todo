import React from 'react';

const Entry = props => (
  <div className='entry'>
    <input
      type='text'
      value={props.input}
      onChange={e => props.changeInput(e.target.value)}
    />
    <button
      label='Add'
      onClick={props.addTodo}
    >Add</button>
  </div>
);

export default Entry;
