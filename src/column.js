import React from 'react'
import styled from 'styled-components'
import Todos from './todoList'
import {Droppable} from 'react-beautiful-dnd'
import Task from './tasks'

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgray;
    border-radius: 2px;
    background-color: yellow;
padding-bottom: 10px;
`;
const Title = styled.h3`
    padding: 8px;
`;
const Tasklist = styled.div`
    padding: 8px;
    width: 150px;
`;

export default class Column extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            nextListIndex: 5,
            update: false,
            updatedList: '',
            todos: Todos
        }

        this.showMore = this.showMore.bind(this)
    }

    showMore() {

        let nextListIndex = this.state.nextListIndex;
        let taskItems = this.props.tasks.map(function (todo, i) {

            if( i < (nextListIndex + 5) ) {
                return  <Task key={todo.id} task={todo} index={i}/>
            }
        }.bind(this));

        this.setState({
            update: true,
            updatedList: taskItems,
            nextListIndex: nextListIndex + 5
        })

    }

    render() {
        let taskItems = this.props.tasks.map(function(todo, i) {
            if (i < 5) {
               return <Task key={todo.id} task={todo} index={i}/>
            }
        }.bind(this))
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id} >
                    {provided => (
                    <Tasklist
                        ref = {provided.innerRef}
                        {...provided.droppableProps}

                        >
                        {this.state.update ? this.state.updatedList : taskItems}
                        {provided.placeholder}
                    </Tasklist>
                    )}
                </Droppable>
                <button onClick={this.showMore}> Show more</button>
            </Container>
        )
    }
}
