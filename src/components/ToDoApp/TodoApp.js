import React, { useState, useRef } from 'react'
import Tasks from '../Tasks/Tasks'
import { DragDropContext } from 'react-beautiful-dnd'
import Input from '../Input/Input'
import Modal from '../Modal/Modal'
import styles from './ToDoApp.scss'




const toDoApp = (props) => {
	

	const inputRef = useRef()
	const [task, setTask] = useState(``)
	const [toDoList, setToDoList] = useState([])
	const [modal, setModal] = useState(false)
	const [open, setOpen] = useState(false)
	const [edit, setEdit] = useState(``)
	const [editableId, setEditableId] = useState(null)

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

	

	const reorder = (list, startIndex, endIndex) => {
		const result = [...list]
		const [removed] = result.splice(startIndex, 1)
		result.splice(endIndex, 0, removed)
	  
		return result
	  }

	const dragEndHandler = (result) => {
		if (!result.destination) return
	
		const items = reorder(
		  toDoList,
		  result.source.index,
		  result.destination.index
		)
	
		setToDoList(items)
	}
	
	const handleClickOpen = id => {
		setEditableId(id)
		setEdit(toDoList[id])		
	}

	
	const handleClose = task => {
		
		if(task===edit && edit===null){
			setEdit('')
			setEditableId(null)
		}
		else{
			const newTasks = [...toDoList]
			newTasks.splice(editableId, 1, task)
			setToDoList(newTasks)
			setEdit('')
			setEditableId(null)
		}
	  };
	

	return (
		<div className={styles.Wrap}>
			<DragDropContext
				onDragEnd={dragEndHandler}>
			<Input
				changeHandler={changeHandler}
				refInput={inputRef}
				handleKeyDown={handleKeyDown}
				task={task}
				submitHandler={submitHandler}
				value={task}
				inputRef={inputRef} />
				<div className={styles.Tasks}>
					<Tasks
						toDo={toDoList}
						deleteHandler={deleteHandler}
						editHandler={handleClickOpen} />

				</div>
			</DragDropContext>
			<Modal 
				handleClose={handleClose}
				task={edit}
				open={edit.length}
				/>
        
		</div>

	)
}

export default toDoApp