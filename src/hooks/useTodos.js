import { useState, useEffect } from "react";
import {
	requestTodos,
	requestDeleteTodo,
	requestUpdateTodo,
	requestCreateTodo,
} from "../api";
import { setTodoInTodos, sortTodos, searchTodos } from "../utils/index ";

export const useTodos = () => {
	const [todos, setTodos] = useState([]);
	const [isloading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [searchPhrase, setSearchPhrase] = useState("");
	const [isSorted, setIsSorted] = useState(false);

	useEffect(() => {
		getTodos();
	}, []);

	const getTodos = async () => {
		setIsLoading(true);

		try {
			const todos = await requestTodos();
			setTodos(todos);
		} catch (error) {
			setError(error);
		}
		setIsLoading(false);
	};

	const deletetodo = async (id) => {
		setIsLoading(true);

		try {
			await requestDeleteTodo(id);
			setTodos(todos.filter((todo) => todo.id !== id));
		} catch (error) {
			setError(error);
		}
		setIsLoading(false);
	};

	const updateTodo = async (id, title, completed) => {
		setIsLoading(true);
		const newTodoData = { id, title, completed };
		try {
			await requestUpdateTodo(id, title, completed);
			setTodos(setTodoInTodos(todos, newTodoData));
			setIsLoading(false);
		} catch (error) {
			setError(error);
		}
	};

	const createTodo = async (title) => {
		// setIsLoading(false);
		// setIsLoading(true);
		try {
			await requestCreateTodo(title).then((data) =>
				setTodos([...todos, data]),
			);
		} catch (error) {
			setError(error);
		}
	};

	const sortedTodos = isSorted ? sortTodos(todos) : todos;
	const findTodosSerchPhrase = searchPhrase
		? searchTodos(sortedTodos, searchPhrase)
		: sortedTodos;
	return {
		todos: findTodosSerchPhrase,
		isloading,
		error,
		setIsLoading,
		deletetodo,
		updateTodo,
		createTodo,
		setTodos,
		searchPhrase,
		setSearchPhrase,
		isSorted,
		setIsSorted,
	};
};
