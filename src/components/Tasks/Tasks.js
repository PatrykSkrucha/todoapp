import React from 'react'
import Task from './Task/Task'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components';

const tasks = (props) => {

	const UlList = styled.div`
		display: flex;
		flex-direction: column;
		align-content: center;
		margin: 0 auto;	
	`
	
	const list = props.toDo.map((el, key) => {
			return (
			
						<Task
							key={key}
							id={key}
							task={el}
							deleteHandler={() => props.deleteHandler(key)}
							editHandler={() => props.editHandler(key)} />
					
				
		)
	})

	return (
		<>
			<Droppable droppableId="droppable" direction="vertical">
				{(provided, snapshot) => (
					<UlList
						ref={provided.innerRef}
						{...provided.droppableProps}>
						{list}
						{provided.placeholder}
					</UlList>
				)}
			</Droppable>
		</>
	)

}

export default tasks