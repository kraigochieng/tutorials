<template>
  <TaskForm />
  <button id="add_task" class="button" @click="taskStore.form_method = 'POST', task_dialog.showModal();">Add Task</button>
  <h1>Tasks</h1>
  <div id="tasks">
    <TaskComponent v-for="task in taskStore.tasks" :key="task.id" :task="task" />
  </div>
</template>

<script setup>
  // Tailwind
  import '@/assets/tailwind.css'
  // Neccesities 
  import { reactive, onBeforeMount, onMounted } from 'vue';
  // Store
  import{ useTaskStore }from '@/stores/taskStore.js'

  // Components
  import TaskComponent from '@/components/TaskComponent.vue';

  import TaskForm from './components/TaskForm.vue';

  // DOM Fecthing
  let task_dialog = reactive({})

  // Store
  let taskStore = useTaskStore()

  onBeforeMount(() => {
    taskStore.getTasks()
  })

  onMounted(() => {
    task_dialog = document.querySelector('#task_dialog')
  })
</script>

<style>
  @tailwind base;

  @layer base {
    h1 {
      @apply text-5xl
    }

    h2 {
      @apply text-4xl
    }

    h3 {
      @apply text-3xl
    }

    h4 {
      @apply text-2xl
    }

    h5 {
      @apply text-xl
    }

    h6 {
      @apply text-lg
    }

    input {
      @apply border-[1px] border-gray-800 p-1
    }

    button {
      @apply p-1 border rounded bg-white
    }
  }

  /* * {
    @apply outline outline-1 outline-red-800
  } */
  
  @font-face {
    font-family: 'Roboto';
    src: url('@/assets/Roboto/Roboto-Regular.ttf');
  }

  @font-face {
    font-family: 'Libre_Franklin';
    src: url('@/assets/Libre_Franklin/static/LibreFranklin-Regular.ttf');
  }

  #app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    font-family: Libre_Franklin;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: black;

  }

  #add_task {
    @apply
      text-sky-600
      border-sky-600
      hover:bg-sky-100
  }

</style>
