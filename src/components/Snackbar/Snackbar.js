import React, {useState} from 'react'
import { Snackbar, Tooltip, SnackbarContent, Button, Typography, withStyles, IconButton, Zoom  } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

const style = {
	Text: {
		color: 'white',
		textAlign: 'center',
	},
	Button: {
		color: '#ffb300',
		padding: '2%',
		fontSize: '.96em',
		'&:hover': {
			background: '#424242'
		},
		
	},
	IconButton: {
		padding: 5,
		color: '#fafafa',
		'&:hover': {
			color: '#e0e0e0',
			backgroundColor: 'inherit',
		}
	},
	Snackbar: {
		marginBottom: 30,
		padding: '3% 4%',
	},
	SnackbarMessage: {
		display: 'flex',
		alignItems: 'center',
	},
	
	Action: {
		width: '100%',
	},
	CloseIcon: {
		fontSize: '0.85em',
	},
	Tooltip: {
		backgroundColor: '#eeeeee',
		color: 'rgba(0, 0, 0, 0.87)',
	}
	

}

const snackbar = (props) => {

	const [show, setShow] = useState(false)

	const { classes, snackbar, closeSnackbarHandler, revertList } = props

	const action = (
		<div className={classes.Action}>
		<Button
			onClick={revertList}
			className={classes.Button}>
			Cofnij
		</Button>

		<Tooltip 
			TransitionComponent={Zoom}
			title="Zamknij"
			placement="bottom"
			open={show}>
			<IconButton
				onMouseOver={()=>setShow(true)}
				onMouseLeave={()=>setShow(false)}
				onClick={closeSnackbarHandler}
				className={classes.IconButton}>
					<CloseIcon onClick={()=>setShow(false)} className={classes.CloseIcon}/>
			</IconButton>
		</Tooltip>
		</div>
	)
	
	return (
		<>
			<Snackbar
				anchorOriginBottomCenter
				open={snackbar}
				onClose={closeSnackbarHandler}>
				<SnackbarContent
					className={classes.Snackbar}
					message={
						<span id="message-id" className={classes.SnackbarMessage}>
							<Typography
								className={classes.Text}
								id='message-id'
								color='primary'
								noWrap>
								Notatka została usunięta
							</Typography>
						</span>}
					action={action}
						/>

			</Snackbar>
		</>
	)
}

export default withStyles(style)(snackbar)