export const addTodo = (text, id) => {
  return {
  	id: id,
    type: 'ADD_TODO',
    text
  }
}