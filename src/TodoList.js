import React from 'react';
import Todo from './Todo';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

function TodoList(props) {
    if (props.todos.length)
        return (
            <Paper>
                <List>
                    {props.todos.map((todo, i) => (
                        <>
                            <Todo task={todo.task} key={todo.id}
                                completed={todo.completed}
                                id={todo.id}
                                removeTodo={props.removeTodo}
                                toggleCheckBox={props.toggleCheckBox}
                                editTodo={props.editTodo} />
                            {i < props.todos.length - 1 && <Divider />}
                        </>
                    ))}
                </List>
            </Paper>
        );
    else
        return null;
}

export default TodoList;