import React from 'react';
import useFormUpdate from './useFormUpdate';
import TextField from '@mui/material/TextField';

function EditTodoForm({editTodo, id, task, toggleEditForm}) {
    const [value, handleChange, reset] = useFormUpdate(task);
    return (
        <form onSubmit={(e)=>{
                e.preventDefault();
                editTodo(id, value);
                reset();
                toggleEditForm();
                }} 
                style={{marginLeft:"1rem"}}>
                <TextField value={value} onChange={handleChange} margin="normal" autoFocus />
            </form>
    );
}

export default EditTodoForm;    