<template>
    <div id="task_component">
        <div id="task_components_without_buttons">
            <div id="task_component_title_date_and_time">
                <h2 id="task_component_title" v-if="task.title">{{task.id}}. {{ task.title }}</h2>
                <div id="task_component_date_and_time">
                    <div class="icon_and_field">
                        <img class="icon" id="clock_icon" src="@/assets/icons/calendar.png"/>
                        <p>{{ props.task.start_date.slice(0,10) }}</p>
                    </div>
                    <div class="icon_and_field">
                        <img class="icon" id="clock_icon" src="@/assets/icons/clock.png"/>
                        <p>{{  getTime(props.task.start_date) }}</p>
                    </div>
                </div>
            </div>
            <p>{{ task.description }}</p>
        </div>
        <div id="task_component_buttons">
            <button id="update_button" @click="taskStore.form_method = 'PUT', handleUpdate(), task_dialog.showModal()">Update</button>
            <button id="delete_button" @click="handleDelete">Delete</button>
        </div>

    </div>
</template>

<script setup>
    import { ref, defineProps, reactive, onMounted } from 'vue';
    import { useTaskStore } from '@/stores/taskStore';

    let task_dialog = reactive({})

    const taskStore = useTaskStore()

    const props = defineProps({
        task: Object
    })

    function padding(number) {
        return number < 10 ? `0${number}`: number
    }

    function getTime(isoString) {
        let date = new Date(isoString)
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let meridiem = hours >=12 ? 'PM': 'AM'
        // Padding
        return `${padding(hours > 12 ? hours - 12 : hours)}:${padding(minutes)} ${meridiem}`
    }

    function handleDelete() {
        taskStore.deleteTask(props.task.id)    
    }

    function handleUpdate() {
        let task = JSON.stringify(props.task)
        console.log()
        sessionStorage.setItem("task", task)
        console.log(task)
    }

    onMounted(() => {
        task_dialog = document.querySelector('#task_dialog')
    })
</script>

<style scoped>

    @font-face {
        font-family: 'Libre_Franklin_SemiBold';
        src: url('@/assets/Libre_Franklin/static/LibreFranklin-SemiBold.ttf');
    }

    @font-face {
        font-family: 'Libre_Franklin_Italic';
        src: url('@/assets/Libre_Franklin/static/LibreFranklin-Italic.ttf');
    }

    #task_component {
        @apply
            p-4
            m-3
            md:mx-7
            border-2
            border-x-gray-700
            border-y-gray-400
            rounded-lg
            transition
            ease-in-out
            hover:scale-[1.01]
            hover:bg-gray-100
            lg:flex
            lg:justify-between
    }

    #task_component_without_buttons {
        @apply
            md:grow-[2]
    }
    #task_component_title_date_and_time{
        @apply
            md:flex
            md:justify-between
    }

    #task_component_date_and_time {
        @apply
            font-fibre_franklin_italic
            md:p-2
            py-2 
            flex
            justify-start
            space-x-2
            md:border-l-2
            md:border-l-gray-300
    }

    #task_component_title {
        @apply
            font-fibre_franklin_semibold
            pb-4
            md:p-2
            border-b-2
            border-b-gray-300
            md:border-b-0
            md:border-r-gray-300
    }

    .icon {
        @apply 
            w-6
            h-6
            align-middle
    }

    .icon_and_field {
        @apply
            flex
            items-center
            space-x-2
    }

    #task_component_buttons {
        @apply
            flex
            justify-end
            space-x-3
            items-center
    }
    #update_button {
        @apply
            text-yellow-700
            border-yellow-700
            hover:bg-yellow-100
            
    }
    #delete_button {
        @apply 
            text-rose-800
            border-rose-800
            hover:bg-rose-100
    }
</style>