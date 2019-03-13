import React from 'react'
import Task from './Task/Task'
import { Droppable } from 'react-beautiful-dnd'
import classes from './Tasks.scss'

const tasks = (props) => {

	const clicked = key => (
		console.log(key)
	)

	const list = props.toDo.map((el, key) => {
		return (
				<Task
					key={key}
					task={el}
					taskId={key}
					value={props.value}
					index={key}
					deleteHandler={() => props.deleteHandler(key)} />

		)
	})

	return (
			<>
			<Droppable droppableId={props.tasksId}>
				{provided => (

				<ul 
					className={classes.UlList}
					ref={provided.innerRef}
					{...provided.droppableProps}>

						{provided.placeholder}
						{list}
				</ul>
				)}
				</Droppable>
			</>
	)

}

export default tasks