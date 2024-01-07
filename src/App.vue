<template>
  <main>

    <!-- heading -->
    <header>
      <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo">
      <h1>{{ taskStore.name }}</h1>
    </header>

     <!-- new task form -->
     <div class="new-task-form">
      <TaskForm />
    </div>
    
    <!--filter-->
    <nav class="filter">
      <button @click="filter = 'all'">All Tasks</button>
      <button @click="filter = 'favs'">Favs Tasks</button>
    </nav>

    <!-- Task list-->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have assigned {{ taskStore.totalCount }} tasks.</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
          <TaskDetails :task='task' />        
        </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>You have Done {{ taskStore.favCount }} tasks.</p>
      <div v-for="task in taskStore.favs" :key="task.id">
          <TaskDetails :task='task' />        
        </div>
    </div>

  </main>
</template>

<script>
import { ref } from 'vue'
import TaskDetails from './components/TaskDetails.vue';
import TaskForm from './components/TaskForm.vue';
import {useTaskStore} from './stores/TaskStore';

  export default {
    components:{
      TaskDetails,
      TaskForm
    },
    setup(){

      const taskStore = useTaskStore();

      const filter = ref('all');

      return {
        taskStore,
        filter
      }

    }
    
  }
</script>