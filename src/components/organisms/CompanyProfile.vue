<template>
  <el-card class="box-card" shadow="always">
    <div class="mb-4 grid col-span-1 justify-center company-info">
      <div class="flex">
        <el-avatar :size="80" :src="circleUrl" />
      </div>
      <p class="text-blue text-2xl">A.C. Telecom</p>
      <p class="text-xs">@ac-telecom</p>
      <p class="text-purplelight text-xs">Startup - tecnología</p>
      <p class="text-green text-xs">• Empresa activa</p>
      <div class="flex text-xs">
        <el-icon :size="15" class="mr-2">
          <Position />
        </el-icon>
        <p>Floridablanca - Colombia</p>
      </div>
      <div class="flex text-xs items-center">
        <el-rate v-model="starScore" disabled text-color="#ff9900" />
        <p>(10 reviews)</p>
      </div>
      <div class="text-xm">
        <el-icon :size="20" class="mr-2 text-primary">
          <Link />
        </el-icon>
        <a class="text-primary" href="https://www.actelecom.net/telecom">
          https://www.actelecom.net/telecom
        </a>
      </div>
    </div>
    <el-card class="box-card flex justify-center p-0" shadow="always">
      <img src="../../images/pitch.png" alt="company profile" />
    </el-card>
    <el-card class="box-card flex justify-center my-2" shadow="always">
      <img src="../../images/qr-code.png" alt="company profile" />
    </el-card>
    <div class="w-max">
      <Button text="Compartir Perfil" />
    </div>
    <el-card class="box-card flex" shadow="always">
      <Button />
      <p>Descargar Resumen</p>
    </el-card>
    <div class="grid grid-cols-1 divide-y-[0.5px] divide-x-reverse">
      <div class="flex justify-between py-4">
        <div class="flex">
          <el-icon :size="20" class="mr-2">
            <UserFilled size="10" />
          </el-icon>
          <p>Talentos</p>
        </div>
        <p>20</p>
      </div>
      <div class="flex justify-between py-4">
        <div class="flex">
          <el-icon :size="20" class="mr-2">
            <View />
          </el-icon>
          <p>Vistas de perfil</p>
        </div>
        <p>20</p>
      </div>
      <div class="flex justify-between py-4">
        <div class="flex">
          <el-icon :size="20" class="mr-2">
            <VideoCamera />
          </el-icon>
          <p>Pitches recibidos</p>
        </div>
        <p>20</p>
      </div>
      <div class="flex justify-between py-4">
        <div class="flex">
          <el-icon :size="20" class="mr-2">
            <Histogram />
          </el-icon>
          <p>Exhibiciones</p>
        </div>
        <p>20</p>
      </div>
      <div class="flex justify-between py-4">
        <div class="flex">
          <el-icon :size="20" class="mr-2">
            <Document />
          </el-icon>
          <p>Vacantes</p>
        </div>
        <p>20</p>
      </div>
      <div class="flex justify-between py-4">
        <div class="flex">
          <el-icon :size="20" class="mr-2">
            <PictureFilled />
          </el-icon>
          <p>Contenido</p>
        </div>
        <p>20</p>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { ref } from "vue";
const starScore = ref(4);
import Button from "../atoms/Button.vue";
import {
  UserFilled,
  View,
  VideoCamera,
  Document,
  PictureFilled,
  Histogram,
  Position,
  Star,
  Link,
} from "@element-plus/icons-vue";
</script>

<style>
.company-info * {
  display: flex;
  justify-content: center;
  margin: 2px 0;
}
</style>
