import React from 'react'
import Task from './Task/Task'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components';
import { List, RootRef  } from '@material-ui/core/'

const tasks = (props) => {

	const UlList = styled(List)`
		display: flex;
		flex-direction: column;
		align-content: center;
		margin: 0 auto;	
	`
	
	const { deleteHandler, editHandler} = props
	
	const list = props.toDo.map((el, key) => {
		return 	<Task
					key={key}
					id={key}
					task={el}
					deleteHandler={() => deleteHandler(key)}
					editHandler={() => editHandler(key)} />
	})

	return (
		
			<Droppable droppableId="droppable">
				{(provided, snapshot) => (
					<RootRef rootRef={provided.innerRef}>

						<UlList
						{...provided.droppableProps}
					>
						{list}
						{provided.placeholder}
					</UlList>
					</RootRef>
				)}
			</Droppable>
		
	)

}

export default tasks