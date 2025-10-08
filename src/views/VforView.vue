<template>
  <div class="control-view">
    <h1>Estructura v-for</h1>
    <p>Esta directiva renderiza una lista de elementos basada en un array. Es el equivalente a un bucle `for` para mostrar datos en la plantilla.</p>
    <p>Es una de las directivas más potentes de Vue, permitiendo iterar sobre datos de manera eficiente.</p>
    
    <div class="example">
      <h3>Ejemplo: Lista de Frutas</h3>
      <ul>
        <li v-for="fruit in fruits" :key="fruit.id">
          {{ fruit.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const fruits = ref([
  { id: 1, name: 'Manzana' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Naranja' },
    { id: 4, name: 'Mango' },
    { id: 5, name: 'Uva' },
    { id: 6, name: 'Pera' },
    { id: 7, name: 'Piña' },
    { id: 8, name: 'Cereza' },
    { id: 9, name: 'Melón' },
    { id: 10, name: 'Kiwi' }
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