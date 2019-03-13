import React, { useState, useRef } from 'react'
import Tasks from '../Tasks/Tasks'
import { DragDropContext } from 'react-beautiful-dnd'
import Input from '../Input/Input'
import classes from './ToDoApp.scss'

const toDoApp = () => {

	const inputRef = useRef()
	const [task, setTask] = useState(``)
	const [toDoList, setToDoList] = useState([])

	const changeHandler = e => {
		setTask(e.target.value)
	}

	const submitHandler = () => {
		if (task.trim()) {
			setToDoList(toDoList.concat(task))
			setTask('')
			inputRef.current.value = ``



		}
	}

	const handleKeyDown = e => {
		if (e.which === 13) submitHandler()
	}

	const deleteHandler = id => {

		setToDoList(toDoList.filter((el, key) => key !== id))
	}

	const dragEndHandler = result => {
		//TODO
	}
	return (

			<DragDropContext
				onDragEnd={dragEndHandler}>
		<div className={classes.Wrap}>
			<Input
				changeHandler={changeHandler}
				refInput={inputRef}
				handleKeyDown={handleKeyDown}
				task={task}
				submitHandler={submitHandler}
				value={task}
				inputRef={inputRef} />
				<div className={classes.Tasks}>
					<Tasks
						tasksId="1"
						toDo={toDoList}
						deleteHandler={deleteHandler} />

				</div>
		</div>
			</DragDropContext>

	)
}

export default toDoApp;