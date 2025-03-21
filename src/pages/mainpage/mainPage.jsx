import { useState } from "react";
import {
	NavLink,
	Outlet,
} from "react-router-dom";
import styles from "./mainPage.module.css";
import {Button,SearchTodo} from '../../components'


export const MainPage = ({ todos, isSorted , setIsSorted,searchPhrase,
	setSearchPhrase}) => {

	const [isEnabled, setIsEnabled] = useState(false);

	const onChange = ({ target }) => {
		setIsEnabled(target.checked);
		setIsSorted(target.checked);
	};

	return (




	<div>
		<div className={styles.appContainer} id="taskList">
			<h1 className={styles.appHeader}>TO DO LIST</h1>
			<div className={styles.controlPanel} >
				<div className={styles.taskListItem}>
                         <label className={styles.taskListItemLabel}>
							<input
								type="checkbox"
								checked={isSorted}
								onChange={onChange}
							></input>
					     	<span className={styles.inSorting}>А-Я</span>
						</label>

				</div>

			<NavLink className={`${styles.navLink} ${styles.navlinkControlPanel}`} to={`todo/${0}`}>
			 <Button>+</Button></NavLink>
			</div>

			<SearchTodo
				placeholder="search task"
				title="Add Task"
				searchPhrase={searchPhrase}
				setSearchPhrase={setSearchPhrase}

			></SearchTodo>
			{
			todos.map(({ id, title, completed }) => (
				<li key={id} className={styles.taskListItem}>
					<NavLink to={`todo/${id}`}>
					<label className={styles.taskListItemLabel}>
							<input
								type="checkbox"
								checked={completed}
							></input>
							{({ isActive }) => isActive
								?
								 <span className={styles.spanActive}>{title}</span>
								: <span>{title}</span>
								}
                             <span>{title}</span>
						</label>


					</NavLink>
				</li>
			))}

			<Outlet/>||<NavLink to={`todo/${0}`}/>
		</div>

	</div>
);}
