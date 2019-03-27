import React from 'react'
import { Snackbar, Tooltip, SnackbarContent, Button, Typography, withStyles, IconButton, Zoom  } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

const style = theme => (

	{
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
			width: 'auto',
			[theme.breakpoints.down('sm')]: {
				width: '80vw',
				margin: 'auto',
			},
		},
		SnackbarContent: {
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
		
	}
) 

const snackbar = (props) => {

	const { classes, tooltipOpenHandler, tooltipCloseHandler, tooltip, snackbar, closeSnackbarHandler, revertList } = props

	

	return (
		<>
			<Snackbar
				className={classes.Snackbar}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				autoHideDuration="3000"
				open={snackbar}
				onClose={closeSnackbarHandler}>
				<SnackbarContent
					className={classes.SnackbarContent}
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
					action={(
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
								open={tooltip}>
								<IconButton
									onMouseOver={tooltipOpenHandler}
									onMouseLeave={tooltipCloseHandler}
									onClick={closeSnackbarHandler}
									className={classes.IconButton}>
									<CloseIcon className={classes.CloseIcon} />
								</IconButton>
							</Tooltip>
						</div>
					)}
				/>
			</Snackbar>
		</>
	)
}

export default withStyles(style)(snackbar)