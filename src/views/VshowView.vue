<template>
  <div class="control-view">
    <h1>Estructura v-show</h1>
    <p>Esta directiva cambia la visibilidad de un elemento alterando su propiedad CSS `display`. A diferencia de `v-if`, el elemento siempre está en el DOM.</p>
    
    <div class="example">
      <h3>Ejemplo: Mostrar/Ocultar Mensaje</h3>
      <button @click="isVisible = !isVisible">
        {{ isVisible ? 'Ocultar' : 'Mostrar' }} Mensaje
      </button>
      <br>
      <p v-show="isVisible">¡Hola! Gracias a V-show puedes ver este Mensaje</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isVisible = ref(true);
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

button {
  margin-bottom: 10px;
  padding: 8px 8px;
  font-size: 1rem 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #b5afaf;
}

h1 {
    color: #41b883;
}
</style>