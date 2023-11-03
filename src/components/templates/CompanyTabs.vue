<template>
  <el-tabs tab-position="top" style="height: 200px" class="demo-tabs">
    <el-tab-pane label="Perfil">
      <ProfileTab />
    </el-tab-pane>
    <el-tab-pane label="Vacantes">Vacantes</el-tab-pane>
  </el-tabs>
</template>

<script>
import ProfileTab from "../organisms/ProfileTab/index.vue";
</script>
