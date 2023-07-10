import { defineStore } from "pinia";
import { ref, reactive } from "vue";

import { server } from '@/axiosInstances.js'

export const useTaskStore = defineStore('media', () => {
    const tasks = reactive([])

    const form_method = ref('')


    function getTasks() {
        server.get('tasks/')
            .then(response => {
                tasks.length = 0
                tasks.push(...response.data)
            })

            .catch(error => {
                console.error(error)
            })
    }
    
    function postTask(task) {
        server.post('tasks/', task)
            .then(response => {
                getTasks()
                console.log(response)
            })
            .catch(error => {
                console.error(error)
            })
    }

    function putTask(id, task) {
        server.put(`tasks/${id}/`, task)
            .then(response => {
                getTasks()
                console.log(response)
            })
            .catch(error => {
                console.error(error, 'error')
            })
    }

    function deleteTask(id) {
        server.delete(`tasks/${id}/`)
            .then(response => {
                getTasks()
                console.log(response)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return { tasks, form_method, getTasks, postTask, putTask, deleteTask }
})