export interface addTodoAction {
  type: 'ADD_TODO',
  id: number,
  text: string
}
export interface setVisibilityFilterAction {
  type: 'SET_VISIBILITY_FILTER',
  filter: string
}
export interface toggleTodoAction {
  type: 'TOGGLE_TODO',
  id: number
}

let nextTodoId = 0;
export const addTodo = (text: string) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
};

export const setVisibilityFilter = (filter: string) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
};

export const toggleTodo = (id: number) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};