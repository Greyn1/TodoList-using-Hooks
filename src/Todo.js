import React from 'react';
import useToggle from './useToggle';
import EditTodoForm from './EditTodoForm';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';


function Todo({ task, completed, id, removeTodo, toggleCheckBox, editTodo}) {
    const [isEditing, toggleIsEditing] = useToggle(false);
    return (
        <ListItem>
            {isEditing ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggleIsEditing} />
                :
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleCheckBox(id)} />
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>{task}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label='delete' onClick={() => removeTodo(id)} >
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label='edit' onClick={toggleIsEditing} >
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }
        </ListItem>
    );
}

export default Todo;