<template>
  <el-col>
    <el-card shadow="always">
      <div>
        <img
          class="object-cover object-bottom w-full h-13 my-6"
          src="../../../../images/vacancie-image.png"
          alt=""
        />
      </div>
      <div class="grid grid-cols-6">
        <div class="col-span-4 grid grid-cols-5 gap-3">
          <p class="col-span-3">Experticia</p>
          <p class="col-span-2">rating</p>
        </div>
        <div class="col-span-2">
          <el-icon :size="25" class="text-blue">
            <Share />
          </el-icon>
        </div>
      </div>
      <div>
        <div class="mb-5">
          <h3>Lider Ux/Ui</h3>
          <el-tag>Creada por organización: Nombre</el-tag>
          <p>
            ¿Cómo podrías crear un plan de ejecución a seis meses desde tu área
            de conocimiento para generar valor en una organización?
          </p>
        </div>
        <div class="flex justify-around mb-3">
          <div class="flex flex-col items-center">
            <p class="bg-pinklight text-white w-10 text-center rounded-md">
              60
            </p>
            <p>Vistas</p>
          </div>
          <div class="flex flex-col items-center">
            <p class="bg-pinklight text-white w-10 text-center rounded-md">
              60
            </p>
            <p>comentarios</p>
          </div>
          <div class="flex flex-col items-center">
            <p class="bg-pinklight text-white w-10 text-center rounded-md">
              60
            </p>
            <p>Pitches</p>
          </div>
        </div>
      </div>
      <Button text="Aplicar a vacante" />
    </el-card>
  </el-col>
</template>

<script>
import { Share } from "@element-plus/icons-vue";
import Button from "../../../atoms/Button.vue";
</script>
