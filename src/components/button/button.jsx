import { Children } from 'react'
import styles from './button.module.css'



export const Button = ({children, onClick })=>{


	return <div className={styles.buttonsContainer}>
		<button className={styles.buttonArounder} onClick ={onClick}>
			{children} </button></div>
}
