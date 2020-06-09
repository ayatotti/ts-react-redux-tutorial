export interface  todoState {
  id: number,
  text: string,
  completed: boolean
}

export interface state {
  todos: todoState[],
  visibilityFilter: string
}
