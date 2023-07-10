<template>
    <div>
        <dialog id="create_task_dialog" class="task_dialog">
            <form id="create_task_form" class="task_form" @submit.prevent="handleSubmit">
                <input type="text" id="title" class="task_form_title" name="title" placeholder="Title" v-model="create_task_form.title" />
                <input id="description" class="task_form_description" name="description" placeholder="Description" v-model="create_task_form.description" />
                <label for="start_date">Date and Time</label>
                <input type="datetime-local" id="start_date" class="task_form_start_date" name="start_date" :min="create_task_form.min" v-model="create_task_form.start_date" />
                <div class="task_form_buttons">
                  <button type="button" class="task_form_cancel" @click="create_task_dialog.close() ">Cancel</button>
                  <button type="submit" class="task_form_submit">Submit</button>
                </div>
              </form>
        </dialog>
    </div>
</template>

<script setup>
  // Neccesities 
  import { ref, reactive, onMounted } from 'vue';
  // Store
  import{ useTaskStore }from '@/stores/taskStore.js'
  // Functionalities
  import getFormData from '@/functions/getFormData.js'

  // Form
  let create_task_form = reactive({
    title: ref(''),
    description: ref(''),
    start_date: ref(''),
    min: ref('')
  })

  // DOM elements
  let create_task_dialog = reactive({})
  // Store
  let taskStore = useTaskStore()

  function setMin() {
    let now = new Date;
    create_task_form.min = now.toISOString().slice(0,16)
  }

  // To run First time
  setMin()
  // To run after every minute
  let interval_set = false
  if(!interval_set) {
    setInterval(setMin, 60 * 1000)
    interval_set = true
  }


  function handleSubmit() {
    let id = '#create_task_form'
    let task = getFormData(id)
    taskStore.postTask(task)
    create_task_dialog.close()
  }

  onMounted(() => {
    create_task_dialog = document.querySelector('#create_task_dialog')
  })

</script>

<style  scoped>

</style>