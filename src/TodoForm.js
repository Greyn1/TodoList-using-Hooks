import React from 'react';
import useFormUpdate from './useFormUpdate';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

function TodoForm({addTodo}) {
    const [value, handleChange, reset] = useFormUpdate("");
    return (
        <Paper>
            <form onSubmit={(e)=>{
                e.preventDefault();
                addTodo(value);
                reset();
                }}>
                <TextField value={value} onChange={handleChange} />
            </form>
        </Paper>
    );
}

export default TodoForm;