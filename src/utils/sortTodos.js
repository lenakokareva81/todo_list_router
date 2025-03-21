export const sortTodos = (todos) => {
	return todos.toSorted((a, b) => a - b);
};
