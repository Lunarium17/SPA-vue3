<template>
  <div class="control-view">
    <h1>Estructura v-bind:key (o :key)</h1>
    <p>El atributo especial `key` se usa con `v-for` para darle a Vue una forma de rastrear la identidad de cada nodo, permitiendo reutilizar y reordenar elementos existentes. Es crucial para el rendimiento y para evitar comportamientos inesperados.</p>
    
    <div class="example">
      <h3>Ejemplo Correcto con :key</h3>
      <pre v-pre><code>&lt;ul&gt;
  &lt;li v-for="item in items" :key="item.id"&gt;
    {{ item.text }}
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
      <p>Aquí, <strong>`item.id`</strong> debe ser un valor único para cada elemento (como un ID de una base de datos). Esto le permite a Vue optimizar el renderizado cuando la lista cambia.</p>
    </div>
  </div>
</template>

<style scoped>
.control-view {
  padding: 20px;
}
.example {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #bd0f0f;
  border-radius: 8px;
  /*background-color: #b5afaf;*/
}
pre {
  /*background-color: #b5afaf;*/
  padding: 10px;
  border-radius: 5px;
  white-space: pre-wrap; /* Para que el código se ajuste bien */
}

h1 {
    color: #41b883;
}
</style>