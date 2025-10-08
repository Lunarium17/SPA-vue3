<template>
  <div class="control-view">
    <h1>Estructura v-if / v-else-if / v-else</h1>
    <p>Esta Estructura renderiza un bloque condicionalmente de los elementos del DOM. El bloque solo se mostrará si la expresión de la directiva devuelve un valor verdadero.</p>
    <p>Parecida a las estructuras condicionales tradicionales en los lenguajes de programación como if / else if / else, pero aplicada directamente en las plantillas de Vue.</p>
    
    <div class="example">
      <h3>Ejemplo: Calificación Interactiva</h3>
      
      <label for="scoreInput">Introduce una calificación:</label>
      <input 
        id="scoreInput"
        type="number" 
        v-model.number="score" 
        min="0" 
        max="10" 
        placeholder="Escribe un número del 0 al 10"
      >
      
      <p>La calificación es: <strong>{{ score }}</strong></p>
      
      <p v-if="score >= 10">¡Excelente! Manten tu calificación</p>
      <p v-else-if="score >= 7">¡Calificación Aprobatoria! Puedes Mejorar :3</p>
      <p v-else>No acredita</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// El valor inicial ahora puede ser modificado por el input.
const score = ref(8); 
</script>

///<style scoped>
.control-view {
  padding: 20px;
}
.example {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #bd0f0f;
  border-radius: 8px;
}
strong {
  color: #42b983;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input{
    width: 100px;
    text-align: center;
    font-size: 1rem 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-top: 10px;
    margin-bottom: 15px;
    padding: 5px;
    display: block;
    background-color: #b5afaf;
}

h1 {
    color: #41b883;
}
</style>