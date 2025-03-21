import { useState } from "react";
import {useParams,useNavigate} from "react-router-dom";
import styles from "./todoPage.module.css";
import {Button} from "../../components";
import {TodoNotFound} from '../index'
import { NEW_TODO_ID } from "../../constants";


export const TodoPage = ({ todos,updateTodo,onRemove,createTodo}) => {
	const [newTitle, setNewTitle] = useState('');
	const params = useParams();
	const navigate = useNavigate();
    let todo = {}

	if (params.id == 0){
		todo={"title":"", "completed": true , "id": NEW_TODO_ID}
	} else {
		todo = todos.find(({ id}) => id == params.id);
}
	if (!todo ) {
		return <TodoNotFound/>;
	}
	const { completed, id, title } = todo
    const newcompleted = !completed
	const saveTodo=(id,newTitle,completed)=>{
	if (id === NEW_TODO_ID){
		createTodo(newTitle).then(() => navigate('/'))
	}else{
		updateTodo(id,newTitle,completed).then(() => navigate('/'))
	}

}

const deleteTodo = (id) =>{
	onRemove(id).then(() => navigate('/'))
}

const saveTitle=newTitle||title

	return (
		<form className={styles.form} >
			<div className={styles.buttonsContainer}>
				<Button onClick={()=>navigate(-1)}> назад</Button>
				<Button onClick={()=>deleteTodo(id)} >удалить</Button>
				<Button onClick={()=>saveTodo(id,saveTitle,completed)} >сохранить</Button>
				<Button onClick={()=>updateTodo(id,saveTitle,newcompleted) } > выполнена</Button>
			</div>
 		<textarea
			type="text"
			value={saveTitle}
			className={styles.taskAria}
			onChange={({ target }) =>
				setNewTitle(target.value)
			}
			rows="5"
		></textarea>
		</form>
	);
};
