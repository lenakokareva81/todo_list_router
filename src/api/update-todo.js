export const requestUpdateTodo = (id, title, completed) => {
	fetch(`http://localhost:3004/todos/${id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json;charset=utf-8" },
		body: JSON.stringify({
			title: title,
			completed: completed,
		}),
	}).then((rawResponse) => rawResponse.json());
};
