import { useState } from "react";

export default initialVal => {
    const[input, setInput] = useState(initialVal);
    const updateInput = (e) => {
        setInput(e.target.value);
    }
    const resetInput = () => {
        setInput("");
    }
    return [input, updateInput, resetInput];
}