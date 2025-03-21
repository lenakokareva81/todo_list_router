export const requestTodos = () => {
	return fetch("http://localhost:3004/todos").then((loadedData) =>
		loadedData.json(),
	);
};
