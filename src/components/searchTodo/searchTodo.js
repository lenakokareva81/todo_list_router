import styles from "./searchTodo.module.css";

export const SearchTodo = ({ placeholder, searchPhrase, setSearchPhrase }) => {
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
					></button>
				</div>
			</form>
		</>
	);
};
