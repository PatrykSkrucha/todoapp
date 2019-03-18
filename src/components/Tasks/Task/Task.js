import React from 'react'
import styles from './Task.scss'
import PropTypes from 'prop-types'
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton, withStyles } from '@material-ui/core/';
import blue from '@material-ui/core/colors/blue';

const style = theme => (

	{
		deleteIcon: {
			color: blue[600],
		}
	}

)
const task = (props) => {

	const { classes } = props;


	return (
		<div
			className={styles.Task}>
			<span className={styles.Text}>{props.task}</span>
			<div className={styles.DeleteButton}>
				<IconButton onClick={props.deleteHandler} className={classes.deleteIcon}>
					<DeleteIcon />
				</IconButton>
			</div>
		</div>

	)
}



export default withStyles(style)(task);

