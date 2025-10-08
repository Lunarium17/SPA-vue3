<template>
  <div class="control-view">
    <h1>Integrantes del Equipo</h1>
    
    <div class="example">
      <ul>
        <li v-for="member in teamMembers" :key="member.id">
          {{ member.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const teamMembers = ref([
  { id: 1, name: 'Alejandro Salazar Morales - 23270688' },
  { id: 2, name: 'Victor Armando Gomez Vazquez -23270666' },
  { id: 3, name: 'Alejandra Lizeth Ruiz Juarez - 232769' },
    { id: 4, name: 'Miguel Albarado Gamboa - 23270673' }
]);
</script>

<style scoped>
.control-view {
  padding: 20px;
}
.example {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #bd0f0f;
  border-radius: 8px;
}
ul {
  list-style-type: disc;
  padding-left: 20px;
}

h1{
    color: #41b883;
}
</style>