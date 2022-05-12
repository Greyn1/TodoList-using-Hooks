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
                }}>
                <TextField value={value} onChange={handleChange} margin="normal" />
            </form>
    );
}

export default EditTodoForm;    