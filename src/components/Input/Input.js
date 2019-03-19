import React from 'react'
import {Input, Button, withStyles} from '@material-ui/core';

const styles = theme =>(

	{
		Button: {
			background: 'linear-gradient(45deg, #00acc1 30%, #01579b 90%)',
			borderRadius: 3,
			border: 0,
			color: 'white',
			boxShadow: '0 3px 5px 2px rgba(0, 172, 193, .2)',
			textTransform: 'capitalize',
			marginTop: 10,
		},
		Input: {
			marginTop: 15,
			width: '50vw',
			[theme.breakpoints.down('sm')]: {
				width: '90vw',
			  },
		}
	}
	) 
	

const input = (props) => {


	const { classes } = props;



	return (
		<>
			<Input
				className={classes.Input}
				id="standard-name"
				label="Utwórz notatkę"
				type="text"
				onChange={props.changeHandler}
				inputRef={props.inputRef}
				onKeyDown={props.handleKeyDown}
				placeholder="Utwórz zadanie"
			/>
			

			<Button
				className={classes.Button}
				size="medium"
				onClick={props.submitHandler}>
				
				Dodaj zadanie
    		</Button>
		</>

	)
}

export default withStyles(styles)(input);

