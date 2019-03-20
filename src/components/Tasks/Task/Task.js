import React, { useState } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'
import { IconButton, withStyles, Card, Typography } from '@material-ui/core/';
import blue from '@material-ui/core/colors/blue';

const style = theme => (
	{
		IconButton: {
			color: blue[600],
			padding: 5
		},
		Card: {
			width: '50vw',
			minHeight: 50,
			display: 'flex',
			justifyContent: 'flex-end',
			padding: '.5em',
			margin: '.5em auto',
			[theme.breakpoints.down('sm')]: {
				width: '80vw',
			  },
			
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
		}
	}
)


const task = (props) => {
	
	const [show, setShow] = useState(false)

	const IconSection = styled.div`
		flex-basis: 5%;
		padding: 2% 1%;
		display: flex;
		align-items: flex-start;
		opacity: ${props => props.visible ? "1" : "0"};	
	`

	const { classes, task, deleteHandler, editHandler } = props


	return (
				<Card 
					className={classes.Card}
					onMouseEnter={()=>setShow(true)}
					onMouseLeave={()=>setShow(false)}>
					<Typography className={classes.Text} variant="display1" gutterBottom>{task}</Typography>
					<IconSection visible={show} >
						<IconButton onClick={deleteHandler} className={classes.IconButton}>
							<DeleteIcon />
						</IconButton>
							
						<IconButton onClick={editHandler} className={classes.IconButton}>
							<EditIcon />
						</IconButton>
							
					</IconSection>
				</Card>

	)
}

task.propTypes = {
	task: PropTypes.any
}

export default withStyles(style)(task);

