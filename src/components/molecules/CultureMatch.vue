<template>
  <div class="grid grid-cols-12 max-h-7 items-center">
    <div class="col-span-9 flex w-full">
      <p class="text-purplelight">match con la cultura</p>
      <el-progress :percentage="50" class="w-full" color="#8BC34A" />
    </div>
    <div class="col-span-3 grid grid-cols-2">
      <Button text="Enviar Pitch" />
      <Button text="Seguir" type="secondary" />
    </div>
  </div>
</template>

<script setup>
import Button from "../atoms/Button.vue";
</script>
