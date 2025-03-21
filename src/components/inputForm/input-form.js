import styles from "./input-form.module.css";
export const InputForm = ({
	placeholder = "",
	title = "",
	setNewTitle,
	onClick,
	className,
}) => {
	return (
		<form className={styles.form} onSubmit={onClick}>
			<div className={styles.addTask}>
				<div className={styles.taskListItem}>
					<label className={styles.taskListItemLabel}>
						<input
							type="text"
							placeholder={placeholder}
							value={title}
							className={styles.taskInput}
							onChange={({ target }) => setNewTitle(target.value)}
						></input>
					</label>
				</div>

				{/* <button
					type="submit"
					className={className}
					title={title}
					onClick={onClick}
				></button> */}
			</div>
		</form>
	);
};
