<template>
  <el-col>
    <el-card shadow="always">
      <div class="flex m-5">
        <el-icon :size="15" class="mr-2">
          <User />
        </el-icon>
        <p class="font-bold">Resumen de la empresa</p>
      </div>
      <div class="m-5">
        <p class="font-bold">Description</p>
        <p>
          En ac telecom somos expertos en telecomunicaciones con mas de 25 años
          comprobables en el mercado, brindando empleo a mas de 321 empleados al
          rededor de todo el mundo
        </p>
      </div>
      <div class="grid grid-cols-2 m-5 gap-5">
        <div>
          <p class="font-bold">correo electronico</p>
          <p>ejemplo@ejemplo.com</p>
        </div>
        <div>
          <p class="font-bold">Número de contacto</p>
          <p>3005895648</p>
        </div>
        <div>
          <p class="font-bold">Estados deseados buscados</p>
          <p>Emprendedor, practicas, primer empleo</p>
        </div>
        <div>
          <p class="font-bold">Rol más buscado</p>
          <p>Lider UX</p>
        </div>
      </div>
    </el-card>
  </el-col>
</template>

<script setup>
import { User } from "@element-plus/icons-vue";
</script>
