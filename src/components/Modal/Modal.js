import React, { useState, useEffect } from 'react'
import { Slide, DialogTitle, DialogContentText, DialogContent, Dialog, DialogActions, withStyles, Input, Button, } from '@material-ui/core';

const styles = theme => (
	{
		input: {
			margin: theme.spacing.unit,
		}
	}
)

const Transition = (props) => <Slide direction="up" {...props} />

const modal = (props) => {

	const { classes, handleClose, open, task } = props;
	const [edit, setEdit] = useState(0)
	useEffect(()=>setEdit(task),[task])

	const editHandler = e => {
		setEdit(e.target.value)
	}
	const handleKeyDown = e => {
		if(e.which===13) handleClose(edit)
	}
	return (
		
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={()=>handleClose(edit)}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle id="alert-dialog-slide-title">
					{"Edytuj notatkę"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						<Input
							value={edit}
							className={classes.input}
							
							onChange={editHandler}
							onKeyDown={handleKeyDown}
							spellCheck={false}
							
						/>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={()=>handleClose(edit)} color="primary">
						Akceptuj
            </Button>
				</DialogActions>
			</Dialog>
		
	)
}

export default withStyles(styles)(modal)
