import React, {Component} from 'react';
import {Droppable} from 'react-beautiful-dnd';
import Dragee from './task';
import Droopable from './dropee';

class Draggablec extends Component {

    render() {
        return (
            <div className="container coll">
                <div className='col2'>
                    <h3 className='h3'>Images</h3>

                    {this.props.states.map((task, index) =>

                        <Droppable droppableId={task.id + "drags"} key={task.id}>
                            {provided => (

                                <div className='list'
                                     ref={provided.innerRef}
                                     {...provided.droppableProps}
                                >
                                    <Dragee index={task.id + 'drags'} task={task}/>
                                </div>
                            )}

                        </Droppable>
                    )}
                </div>
                <div className='col2'>
                    <h3 className='h3'>Prepositions</h3>

                    {this.props.capitals.map((capital, index) =>

                        <Droppable droppableId={capital.id + "drops"} key={capital.id}>
                            {provided => (
                                <div className='list'
                                     ref={provided.innerRef}
                                     {...provided.droppableProps}
                                >
                                    <Droopable index={capital.id + "drops"} capital={capital}/>
                                </div>
                            )}

                        </Droppable>
                    )}
                </div>

            </div>
        );
    }
}

export default Draggablec;