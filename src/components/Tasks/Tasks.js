import React from 'react'
import Task from './Task/Task'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import classes from './Tasks.scss'

const tasks = (props) => {

	const clicked = key => (
		console.log(key)
	)

	const list = props.toDo.map((el, key) => {
			return (
			<Draggable key={`item-key-${key}`} draggableId={`item-id-${key}`} index={key}>
				{(provided, snapshot) => (
					<div
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}>
						<Task
							task={el}
							deleteHandler={() => props.deleteHandler(key)} />
					</div>
				)}
			</Draggable>
		)
	})

	return (
		<>
			<Droppable droppableId="droppable">
				{(provided, snapshot) => (
					<div
						ref={provided.innerRef}
						className={classes.UlList}
						{...provided.droppableProps}>
						{list}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</>
	)

}

export default tasks