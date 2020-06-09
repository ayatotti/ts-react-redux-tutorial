import * as React from 'react'
import Footer from './Footer'
import TodoList from "./TodoList";
//import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const state = {
  todos: [{
    id: 0,
    completed: false,
    text: "test",
  }],
  onTodoClick: () => {},
};

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <VisibleTodoList />
        <Footer/>
      </div>
    )
  }
}

/*
const App = () => (
  <div>
    <AddTodo />
  <VisibleTodoList />
  <Footer />
  </div>
)

export default App
*/