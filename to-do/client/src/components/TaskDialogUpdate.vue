<template>
    <div>
        <dialog id="update_task_dialog" class="task_dialog">
            <form id="update_task_form" class="task_form" @submit.prevent="handleSubmit">
                <input type="hidden" id="update_task_id" name="id" />
                <input type="text" id="update_task_title" class="task_form_title" name="title" placeholder="Title" v-model="update_task_form.title"/>
                <input type="text" id="update_task_description" class="task_form_description" name="description" placeholder="Description" v-model="update_task_form.description" />
                <label for="start_date">Date and Time</label>
                <input type="datetime-local" id="update_task_start_date" class="task_form_start_date" name="start_date" :min="update_task_form.min" v-model="update_task_form.start_date" />
                <div class="task_form_buttons">
                  <button type="button" class="task_form_cancel" @click="update_task_dialog.close()">Cancel</button>
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
  let update_task_form = reactive({
    title: ref(''),
    description: ref(''),
    start_date: ref(''),
    min: ref(''),
  })

  // DOM elements
  let update_task_dialog = reactive({})
  let update_task_id = reactive({})

  // Store
  let taskStore = useTaskStore()

  function setMin() {
    let now = new Date;
    update_task_form.min = now.toISOString().slice(0,16)
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
    let id = '#update_task_form'
    let task = getFormData(id)
    console.log(task, update_task_id.value)
    taskStore.putTask(update_task_id.value, task)
    update_task_dialog.close()
  }

  onMounted(() => {
    update_task_dialog = document.querySelector('#update_task_dialog')
    update_task_id = document.querySelector('#update_task_id')


})

</script>

<style  scoped>

</style>