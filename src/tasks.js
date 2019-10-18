import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    flex-grow: 1;
    background-color: lightblue;
`;

export default class Task extends React.Component {

    handleChange(e, i, id) {
        //debugger
        if(this.props.task.id === id) {
            this.props.task.completed = e.target.checked
        }
        console.log(this.props.task)
    }
    render() {

        return (
            <Draggable draggableId={this.props.task.id} key={this.props.task.id} index={this.props.index}>
                {provided => (

                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        >
                        <input type="checkbox" onChange={(e) => this.handleChange(e, this.props.index, this.props.task.id)}/>
                        {this.props.task.details}
                    </Container>
                )}

            </Draggable>
        )
    }
}