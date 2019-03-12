import React from 'react'
import Task from './Task/Task'
import classes from './Tasks.scss'

const tasks = (props) => {

	const clicked = key => (
		console.log(key)
	)
	
	const list = props.toDo.map((el,key)=>{
		return(
			<Task
				key={key}
				task={el}
				value={props.value}
				deleteHandler={()=>props.deleteHandler(key)} />
		)
	})

	return(
		<>
			<ul className={classes.UlList}>
				{list}
			</ul>
		</>
	)

}

export default tasks