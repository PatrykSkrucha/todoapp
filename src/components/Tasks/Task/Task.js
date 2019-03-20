import React from 'react'
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
			marginLeft: '1%',
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
	const DeleteButton = styled.div`
		flex-basis: 5%;
		display: flex;
		align-items: flex-start;	
	`

	const { classes } = props


	return (
<<<<<<< HEAD
				<Card 
					className={classes.Card}>
					<Typography className={classes.Text} variant="display1" gutterBottom>{props.task}</Typography>
					<DeleteButton>
						<IconButton onClick={props.deleteHandler} className={classes.IconButton}>
							<DeleteIcon />
						</IconButton>
							
						<IconButton onClick={props.editHandler} className={classes.IconButton}>
							<EditIcon />
						</IconButton>
							
					</DeleteButton>
				</Card>
=======
		<div
			className={styles.Task}>
			<span className={styles.Text}>{props.task}</span>
			<div className={styles.DeleteButton}>
				<IconButton onClick={props.deleteHandler} className={classes.deleteIcon}>
					<DeleteIcon />
				</IconButton>
			</div>
		</div>
>>>>>>> b7b32a49e1aa7762ca1a2d816222a87e56f91dc8

	)
}



export default withStyles(style)(task);

