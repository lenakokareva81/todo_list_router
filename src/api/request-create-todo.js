export const requestCreateTodo = (title) =>
	fetch("http://localhost:3004/todos", {
		method: "POST",
		headers: { "Content-Type": "application/json;charset=utf-8" },
		body: JSON.stringify({
			title: title,
			completed: false,
		}),
	}).then((loadedData) => loadedData.json());
