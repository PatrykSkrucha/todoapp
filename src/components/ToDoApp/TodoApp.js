import React, { useState, useRef } from 'react'
import Tasks from '../Tasks/Tasks'
import { DragDropContext } from 'react-beautiful-dnd'
import Input from '../Input/Input'
import Modal from '../Modal/Modal'
import styles from './ToDoApp.scss'
import {Snackbar, Button, Typography, withStyles, IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

const style = {
	Text: {
		color: 'white',
		textAlign: 'center',
	},
	Button: {
		color: '#ffb300',
	},
	IconButton: {
		padding: 5,
		color: 'white'
	},
	root: {
		marginBottom: 20
	},
	message: {
		width: '100%',
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

	const {classes} = props
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

	const revertList = () => {
		setToDoList(deletedList)
		setDeletedList(null)
		setSnackbar(false)
	}
	

	const handleKeyDown = e => {
		if (e.which === 13) submitHandler()
	}

	const deleteHandler = id => {
		setDeletedList(toDoList)
		setToDoList(toDoList.filter((el, key) => key !== id))
		setSnackbar(true)
		setTimeout(() => {
			setSnackbar(false)
		}, 3000);
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
		
		if(task===edit || task===''){
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
				open={edit!==''}
			/>
			<Snackbar
				ContentProps={{
					classes: {
						root: classes.root,
						message: classes.message
					},
					'aria-describedby': 'message-id'
				}}
				anchorOriginBottomCenter
				open = {snackbar}
				onClose = {()=>setSnackbar(false)}
				message={ 
					<span className={styles.SnackbarMessage}>
						<div className={styles.Left}>
							<Typography
								className={classes.Text}
								id='message-id'
								color='primary'
								noWrap>
								Notatka została usunięta
					</Typography>
						</div>
						<div className={styles.Right}>
							<Button
								onClick={revertList}
								className={classes.Button}>
								Cofnij
					</Button>
							<IconButton
								onClick={() => setSnackbar(false)}
								className={classes.IconButton}>
								<CloseIcon />
							</IconButton>
						</div>
					</span>}

			/>
		</div>

	)
}

export default withStyles(style)(toDoApp)