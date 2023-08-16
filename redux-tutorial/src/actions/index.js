export const addTodo = (task) => {
    return {
        type: "ADD_TASK",
        payload: task
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TASK",
        payload: id
    }
}