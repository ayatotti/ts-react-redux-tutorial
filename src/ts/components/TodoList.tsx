import * as React from 'react'
import Todo from './Todo'

interface Props {
  todos: {
    id: number,
    completed: boolean,
    text: string,
  }[],
  onTodoClick: any,
}

export default class TodoList extends React.Component<Props, {}> {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => this.props.onTodoClick(todo.id)}
          />
        )}
      </ul>
    )
  }
}

/*
const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todoState =>
      <Todo
        key={todoState.id}
        {...todoState}
        onClick={() => onTodoClick(todoState.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
*/