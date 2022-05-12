import React from 'react';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';


function Todo({task, completed, id, removeTodo, toggle}) {
    return (
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed} onClick={()=>toggle(id)} />
            <ListItemText style={{textDecoration:completed ? "line-through" : "none"}}>{task}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='delete' onClick={()=>removeTodo(id)} >
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label='edit'>
                    <EditIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Todo;