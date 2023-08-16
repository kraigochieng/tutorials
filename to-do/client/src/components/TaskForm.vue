<template>
    <div>
        <dialog id="task_dialog">
            <form id="task_form"  @submit.prevent="taskStore.form_method === 'POST' ? handlePostSubmit() : handlePutSubmit(), task_dialog.close()">
                <input type="hidden" id="id" ref="id" name="id" />
                <input type="text" id="title" ref="title" class="task_form_title" name="title" placeholder="Title" v-model="title"/>
                <input type="text" id="description" ref="description" class="description" name="description" placeholder="Description" v-model="description" />
                <label for="start_date">Date and Time</label>
                <input type="datetime-local" id="start_date" ref="start_date" class="task_form_start_date" name="start_date" :min="min" v-model="start_date" />
                <div class="buttons">
                  <button type="button" id="cancel" ref="cancel" @click="task_dialog.close()">Cancel</button>
                  <button type="submit" id="submit" ref="submit">Submit</button>
                </div>
                <p v-if="taskStore.form_method === 'POST'">POST</p>
                <p v-else>PUT</p>
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

  let title = ref('')
  let description = ref('')
  let start_date = ref('')
  let min = ref('')

  // DOM elements
  let task_dialog = reactive({})
  let id = reactive({})

  // Store
  let taskStore = useTaskStore()

  function setMin() {
    let now = new Date;
    min = now.toISOString().slice(0,16)
  }

  function clearForm() {
    title.value = ''
    description.value = ''
    start_date.value = ''
    min = {}
  }

  // To run First time
  setMin()
  // To run after every minute
  let interval_set = false
  if(!interval_set) {
    setInterval(setMin, 60 * 1000)
    interval_set = true
  }


  function handlePostSubmit() {
    let form_id = '#task_form'
    let task = getFormData(form_id)
    console.log(task)
    taskStore.postTask(task)
    task_dialog.close()
    clearForm()
  }

  function handlePutSubmit() {
    let form_id = '#task_form'
    let task = getFormData(form_id)
    console.log(task, id.value)
    taskStore.putTask(id.value, task)
    task_dialog.close()
    clearForm()
  }

  onMounted(() => {
    task_dialog = document.querySelector('#task_dialog')
    id = document.querySelector('#id')
})

</script>

<style scoped>
  #task_dialog {
    @apply
      border-none
      border-gray-500
      rounded-lg
  }

  #task_form {
    @apply
      w-96
      flex
      flex-col
      align-middle
      space-y-2
  }

  #buttons {
    @apply
      flex
      justify-end
      space-x-2
  }

  #submit {
    @apply
      text-green-800
      border-green-800
      hover:bg-green-100
  }

  #cancel {
    @apply
    text-rose-800
    border-rose-800
     hover:bg-rose-100
  }
</style>