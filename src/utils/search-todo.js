export const searchTodos = (todos, searchPhrase = "") => {
	return todos.filter(({ id, title, completed }) =>
		title.includes(searchPhrase),
	);
};
