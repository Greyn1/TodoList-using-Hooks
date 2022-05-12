import React from 'react';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Todo from './Todo';

function TodoList(props) {
    return (
        <Paper>
            <List>
                {props.todos.map(todo => (
                    <>
                        <Todo task={todo.task} key={todo.id} 
                         completed={todo.completed} 
                         id={todo.id} 
                         removeTodo={props.removeTodo}
                         toggleCheckBox={props.toggleCheckBox}
                         editTodo={props.editTodo} />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;