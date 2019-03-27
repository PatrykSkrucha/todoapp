import React, { useState, useRef, useEffect } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { withStyles } from '@material-ui/core'
import Tasks from '../Tasks/Tasks'
import Input from '../Input/Input'
import Modal from '../Modal/Modal'
import Snackbar from '../Snackbar/Snackbar'


const style = {
	Wrap: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: 'auto',
	},
	Tasks: {
		display: 'flex',
		width: '90%',
		marginTop: 30,
		flexDirection: 'row',
		minHeight: 200,
	},
}

const toDoApp = (props) => {

	
	const inputRef = useRef()
	const [task, setTask] = useState(``)
	const [toDoList, setToDoList] = useState([])
	const [deletedList, setDeletedList] = useState(null)
	const [edit, setEdit] = useState('')
	const [editableId, setEditableId] = useState(null)
	const [snackbar, setSnackbar] = useState(false)
	const [tooltip, setTooltip] = useState(false)
	const [initial, setInitial] = useState(false)

	const { classes } = props
	
	useEffect(()=>{
		localStorage.getItem('tasks') && setToDoList(JSON.parse(localStorage.getItem('tasks')))
		setInitial(true)
	},[])

	useEffect(()=>{
		if(initial) localStorage.setItem('tasks', JSON.stringify(toDoList))
	},[toDoList])

	
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

	const revertList = () => {
		setToDoList(deletedList)
		
		setDeletedList(null)
		setSnackbar(false)
		
	}

	const deleteHandler = id => {
		setDeletedList(toDoList)
		setToDoList(toDoList.filter((el, key) => key !== id))
		setSnackbar(true)
		
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
		if (task === edit || task === '') {
			setEdit('')
			setEditableId(null)
		}
		else {
			const newTasks = [...toDoList]
			newTasks.splice(editableId, 1, task)
			setToDoList(newTasks)
			
			setEdit('')
			setEditableId(null)
		}
	}

	const closeSnackbarHandler = () => {
		setSnackbar(false)
		
	}

	const tooltipOpenHandler = () => {
		setTooltip(true)
	}
	const tooltipCloseHandler = () => {
		setTooltip(false)
	}
	
	return (
		<>
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
							toDo={toDoList}
							deleteHandler={deleteHandler}
							editHandler={handleClickOpen} />
					</div>
				</div>
			</DragDropContext>
			<Modal
				handleClose={handleClose}
				task={edit}
				open={edit !== ''}
			/>
			<Snackbar
				snackbar={snackbar}
				closeSnackbarHandler={closeSnackbarHandler}
				revertList={revertList}
				tooltip={tooltip}
				tooltipOpenHandler={tooltipOpenHandler}
				tooltipCloseHandler={tooltipCloseHandler}
			/>
		</>
	)
}

export default withStyles(style)(toDoApp)