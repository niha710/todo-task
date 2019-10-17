/**
 * Created by Neeharika on 10/15/19.
 */
import React from 'react';
import tasks from './taskData';
import {DragDropContext} from 'react-beautiful-dnd';
import './App.css';

class Tasks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nextListIndex: 5,
            update: false,
            updatedList: ''
        }

        this.showMore = this.showMore.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    showMore() {

        let nextListIndex = this.state.nextListIndex;

        let taskItems = tasks.map(function (task, i) {

            if( i < (nextListIndex + 5) ) {
                return <li key={i}><input type="checkbox" onChange={(e) => this.handleChange(e, i, task.id)}/>{task.details}</li>
            }
        }.bind(this));

        //debugger

        this.setState({
            update: true,
            updatedList: taskItems,
            nextListIndex: nextListIndex + 5
        })

    }


    handleChange(e, i, id) {
        if(tasks[i].id === id) {
            tasks[i].completed = e.target.checked
        }
        console.log(tasks)
    }

    render() {

        let taskItems = tasks.map(function (task    , i) {
            if(i < 5) {

                return <li key={i}><input type="checkbox" onChange={(e) => this.handleChange(e, i, task.id)}/>{task.details}</li>
            }
        }.bind(this));
        return (
            <div className="wrapper">
                <h4> To do list </h4>

                <ul>
                  {this.state.update ? this.state.updatedList : taskItems}
              </ul>
              <button onClick={this.showMore}> Show more</button>
            </div>
        )
    }
}





export default Tasks;