import React from 'react'
import PropTypes from 'prop-types'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import styled from 'styled-components'
import { IconButton, withStyles, Card, Typography } from '@material-ui/core/'

const style = theme => (
	{
		IconButton: {
			color: '#ff3d00',
			padding: 5
		},
		
		Text: {
			marginLeft: '5%',
			display: 'flex',
			alignItems: 'center',
			flexBasis: '90%',
			wordBreak: 'break-all',
			padding: '.3em .1em'

		},
		Number: {
			flexBasis: '5%',
			display: 'flex',
			alignItems: 'flex-start'
		},
		IconSection: {
			flexBasis: '5%',
			padding: '2% 1%',
			display: 'flex',
			alignItems: 'flex-start'
		}
	}
)


const task = (props) => {
	
	const StyledCard = styled(Card)`
		width: 80vw;
		min-height: 50px;
		background-color: ${props=>props.isDraggable? '#f5f5f5' : '#757575'};
		display: flex;
		justify-content: flex-end;
		padding: .5em;
		margin: .5em auto;
		@media(min-width: 960px){
			width: 50vw;
		}
	`;
	
	
	const { classes, task, deleteHandler, editHandler } = props


	return (
				<StyledCard>
					<Typography className={classes.Text} variant="display1" gutterBottom>{task}</Typography>
					<div className={classes.IconSection}>
						<IconButton onClick={deleteHandler} className={classes.IconButton}>
							<DeleteIcon />
						</IconButton>
							
						<IconButton onClick={editHandler} className={classes.IconButton}>
							<EditIcon />
						</IconButton>
							
					</div>
				</StyledCard>

	)
}

task.propTypes = {
	task: PropTypes.any
}

export default withStyles(style)(task);

