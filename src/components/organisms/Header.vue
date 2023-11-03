<template>
  <div class="w-full h-16 bg-blue grid grid-cols-12">
    <a
      href="/"
      class="col-span-3 flex-auto flex justify-center items-center header-links"
    >
      <p>TalentPitch</p>
    </a>
    <ul class="col-span-5 flex-auto grid grid-cols-4 items-center">
      <li class="header-links">Conectate</li>
      <li class="header-links">Mi muros</li>
      <li class="header-links">Mi Lista</li>
      <li class="header-links">Aprende</li>
    </ul>
    <div class="col-span-3 flex justify-between items-center">
      <Button text="Comenzar" />
      <el-icon :size="25" class="text-graylight">
        <Message />
      </el-icon>
      <el-icon :size="25" class="text-graylight">
        <Notification />
      </el-icon>
      <el-icon :size="25" class="text-graylight">
        <User />
      </el-icon>
    </div>
  </div>
  <img src="../../images/hero.png" />
</template>

<script setup>
import { Message, Notification, User } from "@element-plus/icons-vue";
import Button from "../atoms/Button.vue";
</script>
