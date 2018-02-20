import React from 'react';
import {connect} from 'react-redux';

import Entry from './components/Entry';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <TodoList
          items={this.props.items}
          toggleTodo={this.props.toggleTodo}
          deleteTodo={this.props.deleteTodo}
        />
        <Entry
          input={this.props.input}
          changeInput={this.props.changeInput}
          addTodo={this.props.addTodo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
  input: state.input
});

const mapDispatchToProps = dispatch => ({
  changeInput: value => dispatch({type: 'CHANGE_INPUT', value: value}),
  addTodo: () => dispatch({type: 'ADD_TODO'}),
  toggleTodo: idx => dispatch({type: 'TOGGLE_TODO', idx: idx}),
  deleteTodo: idx => dispatch({type: 'DELETE_TODO', idx: idx})
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
