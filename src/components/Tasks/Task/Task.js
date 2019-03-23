import React from 'react'
import PropTypes from 'prop-types'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
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
			padding: '.3em .1em',
			fontSize: 30,
			[theme.breakpoints.down('sm')]: {
				fontSize: 20,
			  },

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
		background-color: #f5f5f5;
		display: flex;
		justify-content: flex-end;
		padding: .5em;
		margin: .5em auto;
		@media(min-width: 960px){
			width: 50vw;
		}
	`;
	
	
	const { classes, id, task, deleteHandler, editHandler } = props


	return (
		<Draggable key={`item-key-${id}`} draggableId={`item-id-${id}`} index={id} shouldRespectForceTouch={false}>
				{(provided, snapshot) => (
					<div
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						>
				<StyledCard>
					<Typography className={classes.Text} variant="display1" gutterBottom inline style={{wordBreak: 'break-all'}}>{task}</Typography>
					<div className={classes.IconSection}>
						<IconButton onClick={deleteHandler} className={classes.IconButton}>
							<DeleteIcon />
						</IconButton>
							
						<IconButton onClick={editHandler} className={classes.IconButton}>
							<EditIcon />
						</IconButton>
							
					</div>
				</StyledCard>
				</div>
				)}
		</Draggable>
	)
}

task.propTypes = {
	task: PropTypes.any
}

export default withStyles(style)(task);

