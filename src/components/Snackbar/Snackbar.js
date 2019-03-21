import React from 'react'
import { Snackbar, Button, Typography, withStyles, IconButton } from '@material-ui/core'
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
	SnackbarMessage: {
		display: 'flex',
		justifyContent: 'space-between',
	
	},
	Left: {
		flexBasis: '30%',
		display: 'flex',
		alignItems: 'center',
	},
	Right: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
	}
	
}

const snackbar = (props) => {

	const { classes, snackbar, closeSnackbarHandler, revertList } = props

	return (
		<>
			<Snackbar
				ContentProps={{
					classes: {
						root: classes.root,
						message: classes.message
					},
					'aria-describedby': 'message-id'
				}}
				anchorOriginBottomCenter
				open={snackbar}
				onClose={closeSnackbarHandler}
				message={
					<span className={classes.SnackbarMessage}>
						<div className={classes.Left}>
							<Typography
								className={classes.Text}
								id='message-id'
								color='primary'
								noWrap>
								Notatka została usunięta
							</Typography>
						</div>
						<div className={classes.Right}>
							<Button
								onClick={revertList}
								className={classes.Button}>
								Cofnij
					</Button>
							<IconButton
								onClick={closeSnackbarHandler}
								className={classes.IconButton}>
								<CloseIcon />
							</IconButton>
						</div>
					</span>}

			/>
		</>
	)
}

export default withStyles(style)(snackbar)