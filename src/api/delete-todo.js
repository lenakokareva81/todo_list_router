export const requestDeleteTodo = (id) => {
	return fetch(`http://localhost:3004/todos/${id}`, {
		method: "DELETE",
	}).then((rawResponse) => rawResponse.json());
};
