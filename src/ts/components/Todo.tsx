import * as React from 'react'

interface Prop {
  onClick: any;
  completed: boolean,
  text: string,
}

export default class Todo extends React.Component<Prop, {}> {
  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-throught' : 'none'
        }}>
        {this.props.text}
      </li>
    )
  }
}

/*
const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
style={{
  textDecoration: completed ? 'line-through' : 'none'
}}
>
{text}
</li>
)
export default Todo
*/