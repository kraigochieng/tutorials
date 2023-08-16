import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

export default function Task() {

    const [task, setTask] = useState({
        name: ""
    })

    function handleChange(event) {
        const {name, value} = event.target

        setTask(prevTask => ({
            ...prevTask,
            [name]: value
        }))
    }

    function handleAddTodo() {
        const dispatch = useDispatch()
        dispatch(addTodo(task))
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Add New Task"
                name="name"
                value={task.name}
                onChange={handleChange}
            />
            <button onClick={handleAddTodo}>Add Task</button>
        </form>
    )
}
