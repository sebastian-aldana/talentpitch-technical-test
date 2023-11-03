<template>
  <el-col>
    <el-card shadow="always">
      <div class="flex">
        <el-icon :size="25" class="text-blue">
          <Message />
        </el-icon>
        <p>Áreas de interés</p>
      </div>
      <div>
        <el-tag>Tag 1</el-tag>
        <el-tag>Tag 1</el-tag>
        <el-tag>Tag 1</el-tag>
        <el-tag>Tag 1</el-tag>
      </div>
    </el-card>
  </el-col>
</template>

<script>
import { Message } from "@element-plus/icons-vue";
</script>
