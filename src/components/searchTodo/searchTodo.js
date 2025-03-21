import styles from "./searchTodo.module.css";
import { InputForm } from "../../components";

export const SearchTodo = ({ placeholder, searchPhrase, setSearchPhrase }) => {
	const requestNewTodo = () => {
		// if (searchTodo > 3) {
		// 	requestAddTodo(newTodo);
		// 	setNewToto("");
		// 	setIsCreating(false);
		// }
	};
	const onClick = () => {};
	return (
		<>
			<form className={styles.form} onSubmit={onClick}>
				<div className={styles.addTask}>
					<div className={styles.taskListItem}>
						<label className={styles.taskListItemLabel}>
							<input
								type="text"
								placeholder={placeholder}
								value={searchPhrase}
								className={styles.taskInput}
								onChange={({ target }) =>
									setSearchPhrase(target.value)
								}
							></input>
						</label>
					</div>
					<button
						type="submit"
						className={`${styles.searchTask}`}
						// className={className}
						// title={title}
						// onClick={onClick}
					></button>
				</div>
			</form>
		</>
	);
};
