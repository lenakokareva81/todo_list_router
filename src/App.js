import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import { MainPage, TodoPage, TodoNotFound } from "./pages";
import { useTodos } from "./hooks";

// cd /e/фротент/result/todo_list_router/src; json-server --watch db.json --port 3004
// cd /e/фротент/result/todo_list_router; npm start

export const App = () => {
	const {
		todos,
		deletetodo,
		updateTodo,
		searchPhrase,
		setSearchPhrase,
		createTodo,
		isSorted,
		setIsSorted,
	} = useTodos();

	return (
		<>
			<NavLink to="/"></NavLink>
			<Routes>
				<Route
					path="/"
					element={
						<MainPage
							todos={todos}
							setIsSorted={setIsSorted}
							isSorted={isSorted}
							searchPhrase={searchPhrase}
							setSearchPhrase={setSearchPhrase}
						/>
					}
				>
					<Route
						path="todo/:id"
						element={
							<TodoPage
								createTodo={createTodo}
								updateTodo={updateTodo}
								onRemove={deletetodo}
								todos={todos}
							/>
						}
					></Route>
					<Route path="/404" element={<TodoNotFound />}></Route>
					<Route path="*" element={<Navigate to="/404" />}></Route>
				</Route>
			</Routes>
		</>
	);
};
